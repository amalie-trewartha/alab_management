"""
The ``run_task`` function is used to launch a task in the dramatiq worker. It will be called by the ``task_manager``.
The function will update the status of the task in the database and initiate the task with proper parameters.
"""

import datetime
from traceback import format_exc

import dramatiq
from bson import ObjectId
from dramatiq import get_broker
from dramatiq.middleware import Shutdown
from dramatiq_abort import Abortable, backends, Abort

from alab_management.logger import DBLogger
from alab_management.sample_view import SampleView

from alab_management.task_view import BaseTask, TaskView, TaskStatus
from alab_management.utils.data_objects import get_collection
from alab_management.utils.module_ops import load_definition

abortable = Abortable(
    backend=backends.MongoDBBackend(collection=get_collection("abortable"))
)
get_broker().add_middleware(abortable)


class ParameterError(Exception):
    """
    The exception raised when parameters of a task is wrong
    """


@dramatiq.actor(
    max_retries=0,
    time_limit=30 * 24 * 60 * 60 * 1000,
    notify_shutdown=True,
)  # TODO time limit is set in ms. currently set to 30 days
def run_task(task_id_str: str):
    """
    Submit a task. In this system, each task is run in an
    independent process, which will try to acquire device and
    process samples.
    """
    from .lab_view import LabView  # pylint: disable=cyclic-import

    load_definition()
    task_view = TaskView()
    sample_view = SampleView()
    logger = DBLogger(task_id=None)

    task_id = ObjectId(task_id_str)
    if task_view.get_status(task_id) != TaskStatus.INITIATED:
        print(
            "Task status is not INITIATED; this implies the task has already been picked up by a previous task actor. No action is taken."
        )
        return

    try:
        task_entry = task_view.get_task(task_id, encode=True)
        task_type = task_entry.pop("type")
        print(
            f"{datetime.datetime.now()}: Worker picked up task {task_id} of type {task_type.__name__}"
        )
    except ValueError:
        print(
            f"{datetime.datetime.now()}: No task found with id: {task_id} -- assuming that alabos was aborted without cleanup, and skipping this task."
        )
        return

    lab_view = LabView(task_id=task_id)

    try:
        task: BaseTask = task_type(
            samples=[
                sample["name"] for sample in task_entry["samples"]
            ],  # only the sample names are sent
            task_id=task_id,
            lab_view=lab_view,
            simulation=False,
            **task_entry["parameters"],
        )
    except Exception as exception:
        logger.system_log(
            level="ERROR",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskDefinition",
                "task_id": task_id,
                "task_type": task_type.__name__,
                "message": str(exception),
            },
        )
        lab_view.request_cleanup()
        raise Exception(
            "Failed to create task {} of type {}".format(task_id, str(task_type))
        ) from exception
        # raise ParameterError(exception.args[0]) from exception


    try:
        task_view.update_status(task_id=task_id, status=TaskStatus.RUNNING)   
        
        for sample in task_entry["samples"]:
            sample_view.update_sample_task_id(
                task_id=task_id, sample_id=sample["sample_id"]
            )
        logger.system_log(
            level="INFO",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskStart",
                "task_id": task_id,
                "task_type": task_type.__name__,
            },
        )
        result = task.run()
    except Abort:
        task_view.update_status(task_id=task_id, status=TaskStatus.CANCELLED)
        task_view.set_message(
            task_id=task_id, message="Task was cancelled due to the abort signal"
        )  # display exception on the dashboard
        logger.system_log(
            level="ERROR",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskEnd",
                "task_id": task_id,
                "task_type": task_type.__name__,
                "status": TaskStatus.CANCELLED.name,
                "traceback": "Task was cancelled due to the abort signal",
            },
        )
        lab_view.request_cleanup()
    except Shutdown:
        task_view.update_status(task_id=task_id, status=TaskStatus.STOPPED)
        task_view.set_message(
            task_id=task_id, message="Task was cancelled due to the worker shutdown"
        )  # display exception on the dashboard
        logger.system_log(
            level="ERROR",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskEnd",
                "task_id": task_id,
                "task_type": task_type.__name__,
                "status": TaskStatus.STOPPED.name,
                "traceback": "Task was cancelled due to the worker shutdown",
            },
        )
        lab_view.request_cleanup()
    except Exception:
        task_view.update_status(task_id=task_id, status=TaskStatus.ERROR)
        formatted_exception = format_exc()
        task_view.set_message(
            task_id=task_id, message=formatted_exception
        )  # display exception on the dashboard
        logger.system_log(
            level="ERROR",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskEnd",
                "task_id": task_id,
                "task_type": task_type.__name__,
                "status": "ERROR",
                "traceback": formatted_exception,
            },
        )
        lab_view.request_cleanup()
        raise
    else:
        task_view.update_status(task_id=task_id, status=TaskStatus.COMPLETED)
        if result is None:
            pass
        elif isinstance(result, dict):
            for key, value in result.items():
                # we do this per item to avoid overwriting existing results. Its possible that some results were uploaded mid-task under different keys using lab_view.update_result()
                task_view.update_result(task_id=task_id, name=key, value=value)
        else:
            task_view.update_result(
                task_id=task_id, name=None, value=result
            )  # put result directly in the result field, no nesting.

        logger.system_log(
            level="INFO",
            log_data={
                "logged_by": "TaskActor",
                "type": "TaskEnd",
                "task_id": task_id,
                "task_type": task_type.__name__,
                "status": "COMPLETED",
            },
        )
    finally:
        for sample in task_entry["samples"]:
            sample_view.update_sample_task_id(
                task_id=None, sample_id=sample["sample_id"]
            )

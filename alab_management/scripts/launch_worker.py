"""
Launch Dramatiq worker to submit tasks
"""

from alab_management.task_manager.task_manager import TaskManager
import os


def launch_worker(args):
    from dramatiq.cli import main as launch
    from dramatiq.cli import make_argument_parser
    from argparse import Namespace

    # Clean up any leftover tasks from previous runs. This blocks new workers until cleanup is done!
    TaskManager()._clean_up_tasks_from_previous_runs()

    args = make_argument_parser().parse_args(
        args=["alab_management.task_actor"] + args,
        namespace=Namespace(processes=4, threads=128),
    )
    launch(args=args)
    return True

import time
import unittest
from multiprocessing import Process
from threading import Thread
from traceback import print_exc

from bson import ObjectId
from pydantic import ValidationError

from alab_management.device_view import DeviceView, DeviceTaskStatus
from alab_management.device_view.device import get_all_devices
from alab_management.sample_view import SampleView
from alab_management.sample_view.sample_view import SamplePositionStatus
from alab_management.scripts.cleanup_lab import cleanup_lab
from alab_management.scripts.setup_lab import setup_lab
from alab_management.task_manager import ResourceRequester, TaskManager


def launch_task_manager():
    try:
        task_manager = TaskManager()
        task_manager.run()
    except Exception:
        print_exc()
        raise


class TestTaskManager(unittest.TestCase):
    def setUp(self) -> None:
        time.sleep(2)
        cleanup_lab(all_collections=True, _force_i_know_its_dangerous=True)
        setup_lab()
        self.devices = get_all_devices()
        self.device_view = DeviceView()
        self.sample_view = SampleView()
        self.resource_requester = ResourceRequester(task_id=ObjectId())
        self.process = Process(target=launch_task_manager)
        self.process.daemon = True
        self.process.start()
        time.sleep(1)

    def tearDown(self) -> None:
        self.process.terminate()
        cleanup_lab(all_collections=True, _force_i_know_its_dangerous=True)
        time.sleep(1)

    def test_task_requester(self):
        furnace_type = self.devices["furnace_1"].__class__

        # 1
        result = self.resource_requester.request_resources(
            {furnace_type: {"inside": 1}}, timeout=2
        )
        _id = result.pop("request_id")
        self.assertDictEqual(
            {
                "devices": {furnace_type: "furnace_1"},
                "sample_positions": {furnace_type: {"inside": ["furnace_1/inside"]}},
            },
            result,
        )
        self.assertEqual(
            self.device_view.get_status("furnace_1"), DeviceTaskStatus.OCCUPIED
        )
        self.assertEqual(
            self.sample_view.get_sample_position_status("furnace_1/inside"),
            (SamplePositionStatus.LOCKED, self.resource_requester.task_id),
        )
        self.resource_requester.release_resources(_id)
        time.sleep(1)
        self.assertEqual(
            self.device_view.get_status("furnace_1"), DeviceTaskStatus.IDLE
        )
        self.assertEqual(
            self.sample_view.get_sample_position_status("furnace_1/inside"),
            (SamplePositionStatus.EMPTY, None),
        )

        # 2
        result = self.resource_requester.request_resources(
            {furnace_type: {"inside": 1}}, timeout=2
        )
        _id = result.pop("request_id")
        self.assertDictEqual(
            {
                "devices": {furnace_type: "furnace_1"},
                "sample_positions": {furnace_type: {"inside": ["furnace_1/inside"]}},
            },
            result,
        )
        self.assertEqual(
            self.device_view.get_status("furnace_1"), DeviceTaskStatus.OCCUPIED
        )
        self.assertEqual(
            self.sample_view.get_sample_position_status("furnace_1/inside"),
            (SamplePositionStatus.LOCKED, self.resource_requester.task_id),
        )
        self.resource_requester.release_resources(_id)
        time.sleep(1)
        self.assertEqual(
            self.device_view.get_status("furnace_1"), DeviceTaskStatus.IDLE
        )
        self.assertEqual(
            self.sample_view.get_sample_position_status("furnace_1/inside"),
            (SamplePositionStatus.EMPTY, None),
        )

        # 3
        result = self.resource_requester.request_resources(
            {None: {"furnace_1/inside": 1}}, timeout=2
        )
        _id = result.pop("request_id")
        self.assertDictEqual(
            {
                "devices": {},
                "sample_positions": {None: {"furnace_1/inside": ["furnace_1/inside"]}},
            },
            result,
        )
        self.resource_requester.release_resources(_id)

    def test_task_request_wrong_format(self):
        with self.assertRaises(ValidationError):
            self.resource_requester.request_resources(
                {None: {"prefix": "furnace_temp", "xxx": 4}}, timeout=2
            )

    def test_task_request_wrong_number(self):
        with self.assertRaises(ValueError):
            self.resource_requester.request_resources(
                {None: {"overflow_rack": 100}}, timeout=2
            )

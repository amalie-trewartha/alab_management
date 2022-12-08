import time
from typing import List, Tuple

from bson import ObjectId

from alab_management import BaseTask
from .moving import Moving
from ..devices.furnace import Furnace


class Heating(BaseTask):
    def __init__(
        self, sample: ObjectId, setpoints: List[Tuple[float, float]], *args, **kwargs
    ):
        super(Heating, self).__init__(*args, **kwargs)
        self.setpoints = setpoints
        self.sample = sample

    def run(self):
        with self.lab_view.request_resources({Furnace: {"inside": 1}}) as (
            devices,
            sample_positions,
        ):
            furnace = devices[Furnace]
            inside_furnace = sample_positions[Furnace]["inside"][0]

            self.run_subtask(
                Moving,
                sample=self.sample,
                dest=inside_furnace,
            )

            furnace.run_program(self.setpoints)

            while furnace.is_running():
                self.logger.log_device_signal(
                    {
                        "device": furnace.name,
                        "temperature": furnace.get_temperature(),
                    }
                )
                time.sleep(1)
        return self.task_id

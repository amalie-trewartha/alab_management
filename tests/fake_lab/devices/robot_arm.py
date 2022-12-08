from typing import ClassVar

from alab_management import BaseDevice, SamplePosition


class RobotArm(BaseDevice):
    description: ClassVar[str] = "Fake robot arm"

    @property
    def sample_positions(self):
        return [
            SamplePosition(
                "gripper",
                description="The position that can hold the sample in the robot arm gripper.",
            ),
        ]

    def connect(self):
        pass

    def disconnect(self):
        pass

    def emergent_stop(self):
        pass

    def run_program(self, program):
        pass

    def is_running(self) -> bool:
        return False

from alab_management import (
    add_device,
    add_task,
    add_reroute_task,
    add_standalone_sample_position,
    SamplePosition,
)

from .devices.furnace import Furnace
from .devices.robot_arm import RobotArm
from .tasks import Heating, Starting, Ending, Moving

### Devices ###
add_device(Furnace(name="furnace_1"))
add_device(Furnace(name="furnace_2"))
add_device(Furnace(name="furnace_3"))
add_device(Furnace(name="furnace_4"))

add_device(RobotArm(name="robot_arm"))

### Sample Positions ###
add_standalone_sample_position(
    SamplePosition("overflow_rack", description="Rack for overflow samples.", number=16)
)

### Tasks ###
add_task(Starting)
add_task(Heating)
add_task(Moving)
add_task(Ending)

"""
To remove all the device, sample position definition from database

If ``-a`` is true, the whole database (including the data recorded) shall
be deleted.
"""


def cleanup_lab(
    all_collections: bool = False, _force_i_know_its_dangerous: bool = False
):
    """
    Drop device, sample_position collection from MongoDB
    """
    from ..config import AlabConfig
    from ..utils.data_objects import _GetMongoCollection
    from ..device_view.device_view import DeviceView
    from ..sample_view.sample_view import SampleView

    config = AlabConfig()
    if all_collections:
        if not _force_i_know_its_dangerous:
            y = input(
                f"Are you sure you want to remove the whole database? "
                f"It will purge all of your data in {config['mongodb']['host']}, "
                f"which cannot be recovered. [yN]: "
            )
            if y != "y":
                return False
        _GetMongoCollection.init()
        _GetMongoCollection.client.drop_database(config["general"]["name"])  # type: ignore
    DeviceView()._clean_up_device_collection()
    SampleView().clean_up_sample_position_collection()
    _GetMongoCollection.get_collection("_lock").drop()
    _GetMongoCollection.get_collection("requests").drop()
    return True

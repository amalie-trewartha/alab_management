from typing import cast, Union
from bson import ObjectId

from ..utils.data_objects import get_collection, get_completed_collection
from .sample_view import SampleView


class CompletedSampleView:
    def __init__(self):
        self._working_sample_collection = get_collection("samples")
        self._completed_sample_collection = get_completed_collection("samples")

    def save_sample(self, sample_id: ObjectId):
        """
        Saves a sample dictionary to the completed database. This should be copying a sample from the working database to the completed database.
        """
        # if self.exists(sample_id):
        #     raise ValueError(
        #         f"Sample with id {sample_id} already exists in the completed database!"
        #     )

        sample_dict = self._working_sample_collection.find_one(
            {"_id": ObjectId(sample_id)}
        )
        if sample_dict is None:
            raise ValueError(
                f"Sample with id {sample_id} does not exist in the database!"
            )
        if self.exists(sample_id):
            result = self._completed_sample_collection.update_one(
                filter={"_id": ObjectId(sample_id)},
                update={"$set": sample_dict},
                upsert=True,
            )
        else:
            result = self._completed_sample_collection.insert_one(sample_dict)

    def exists(self, sample_id: Union[ObjectId, str]) -> bool:
        """Check if a sample exists in the database

        Args:
            sample_id (ObjectId): id of the sample within sample collection

        Returns:
            bool: True if sample exists in the database
        """
        return (
            self._completed_sample_collection.count_documents(
                {"_id": ObjectId(sample_id)}
            )
            > 0
        )

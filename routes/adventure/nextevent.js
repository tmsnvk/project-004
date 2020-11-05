const { connection } = require("mongoose");

module.exports = async (request, response) => {
  try {
    const { _id, nextPathId } = request.query;

    connection.db.collection("adventures_database", (error, collection) => {
      collection.find({_id}).toArray((error, data) => {
        return response.json(data[0][_id][nextPathId]);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
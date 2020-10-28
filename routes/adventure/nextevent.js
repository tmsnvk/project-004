const db = require("../../mongodb/database.js");

module.exports = async (request, response) => {
  const { _id, nextPathId } = request.query;

  try {
    const getStory = await db.get().collection("adventures_database").findOne({ _id });
    return response.json(getStory[_id][nextPathId])
  } catch (error) {
    console.log(error);
  }
};
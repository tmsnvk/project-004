const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { id, savedId, storyId } = request.body;

    await userSchema.updateOne({ _id: id, "savedGames.name": storyId }, { "$set": { "savedGames.$.savedId": savedId }});
    return response.json("The Tower librarians have updated your save game data in their Archives.");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
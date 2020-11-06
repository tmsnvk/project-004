const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { savedId, storyId } = request.body;
    const userIdCookie = request.cookies.userId;

    await userSchema.updateOne({ _id: userIdCookie, "savedGames.name": storyId }, { "$set": { "savedGames.$.savedId": savedId }});
    return response.json({ message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
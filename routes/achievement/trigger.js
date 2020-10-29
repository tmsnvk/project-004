const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  const { id, achievementTimestampCode, achievementStateCode } = request.body;

  if (!request.body) return response.status(400).json({ message: "The librarians haven't received any data." });

  const getUser = await userSchema.findById(id).findOne({ [achievementStateCode]: false });

  if (getUser === null) return response.status(200).json({ message: "Already unlocked this one." });

  try {
    await getUser.updateOne({ "$set": { [achievementStateCode]: true, [achievementTimestampCode]: Date.now() }});
    return response.json("The librarians in the Tower have updated your data in their Archives!");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
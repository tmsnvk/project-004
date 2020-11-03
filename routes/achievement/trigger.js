const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  const { id, timestampCode, stateCode } = request.body;

  if (!request.body) return response.status(400).json({ message: "The Tower librarians haven't received any data." });

  const getUser = await userSchema.findById(id).findOne({ [stateCode]: false });

  if (getUser === null) return response.status(200).json({ message: "This achievement has already been unlocked." });

  try {
    await getUser.updateOne({ "$set": { [stateCode]: true, [timestampCode]: Date.now() }});
    return response.json({ status: true, message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
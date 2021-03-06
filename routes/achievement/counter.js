const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { type } = request.body;
    const userIdCookie = request.cookies.userId;

    await userSchema.findByIdAndUpdate(userIdCookie, ({ "$inc": { [type]: +1 }}));
    return response.json({ message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
const userSchema = require("../../models/userModel");
const createToken = require("../../utilities/helpers/createToken");

module.exports = async (request, response) => {
  try {
    const userIdCookie = request.cookies.userId;

    const getUser = await userSchema.findById(userIdCookie);
    const token = createToken(getUser._id, maxAge = -1);

    response.cookie("jwt", token, { maxAge: -1 });
    response.cookie("userId", getUser._id, { maxAge: -1 });
    response.cookie("username", getUser.username, { maxAge: -1 });
    response.cookie("userCreatedAt", getUser.createdAt, { maxAge: -1 });
    response.cookie("userColorTheme", getUser.colorTheme, { maxAge: -1 });

    await userSchema.findByIdAndDelete(userIdCookie);
    return response.json({ message: "The Tower librarians have deleted the entry from their Archives according to your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
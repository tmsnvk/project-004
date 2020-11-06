const userSchema = require("../../models/userModel");
const createToken = require("../../utilities/helpers/createToken");

module.exports = async (request, response) => {
  try {
    const userIdCookie = request.cookies.userId;

    const getUser = await userSchema.findById(userIdCookie);
    const token = createToken(getUser._id, maxAge = -1);

    response.cookie("jwt", token, { httpOnly: true, maxAge: -1 });
    response.cookie("userId", getUser._id, { httpOnly: true, maxAge: -1 });
    response.cookie("username", getUser.username, { httpOnly: true, maxAge: -1 });
    response.cookie("userCreatedAt", getUser.createdAt, { httpOnly: true, maxAge: -1 });
    response.cookie("userColorTheme", getUser.colorTheme, { httpOnly: true, maxAge: -1 });

    return response.json({ message: "The Tower librarians have updated their Archives with your data input." });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
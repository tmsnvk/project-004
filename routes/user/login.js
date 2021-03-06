const bcrypt = require("bcryptjs");
const userSchema = require("../../models/userModel");
const createToken = require("../../utilities/helpers/createToken");
const maxAge = require("../../utilities/helpers/maxAge");

module.exports = async (request, response) => {
  try {
    const { username, password } = request.body;

    if (!username || !password) return response.status(400).json({ message: "Fill out both fields." });

    const getUser = await userSchema.findOne({ username: username });
    if (!getUser) return response.status(400).json({ message: "There is no entry with such name in The Tower's Archives." });

    const isMatch = await bcrypt.compare(password, getUser.password);
    if (!isMatch) return response.status(400).json({ message: "Provide valid credentials." });

    const token = createToken(getUser._id, maxAge);

    response.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    response.cookie("userId", getUser._id, { httpOnly: true, maxAge: maxAge });
    response.cookie("username", getUser.username, { httpOnly: true, maxAge: maxAge });
    response.cookie("userCreatedAt", getUser.createdAt, { httpOnly: true, maxAge: maxAge });
    response.cookie("userColorTheme", getUser.colorTheme, { httpOnly: true, maxAge: maxAge });

    return response.json({ username: getUser.username, createdAt: getUser.createdAt, colorTheme: getUser.colorTheme });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
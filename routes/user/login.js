const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { userName, password } = request.body;

    if (!userName || !password) return response.status(400).json({ message: "Please fill out both fields!" });

    const user = await userSchema.findOne({ userName: userName });
    if (!user) return response.status(400).json({ message: "There is no entry with such name in our archives." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return response.status(400).json({ message: "Please provide valid credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return response.json({ token, user: { id: user._id, userName: user.userName } });

  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
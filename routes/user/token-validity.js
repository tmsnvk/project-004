const jwt = require("jsonwebtoken");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const token = request.header("x-auth-token");
    if (!token) return response.json({ message: { status: true, message: "Our library caretakers were not able to confirm your identity. Begone!" }});

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return response.json({ message: { status: true, message: "Our library caretakers were not able to confirm your identity. Begone!" }});

    const user = await userSchema.findById(verified.id);
    if (!user) return response.json({ message: { status: true, message: "Our library caretakers were not able to confirm your identity. Begone!" }});

    return response.json({ message: { status: true, message: "Our library caretakers were able to confirm your identity. Welcome!" }});
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
const jwt = require("jsonwebtoken");
const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const tokenCookie = request.cookies.jwt;

    if (!tokenCookie) return response.json({ message: { status: false, message: "The Tower librarians are not able to confirm your identity. Begone!" }});

    const isVerified = jwt.verify(tokenCookie, process.env.JWT_SECRET);
    if (!isVerified) return response.json({ message: { status: false, message: "The Tower librarians are not able to confirm your identity. Begone!" }});

    const getUser = await userSchema.findById(isVerified.id);
    if (!getUser) return response.json({ message: { status: false, message: "The Tower librarians are not able to confirm your identity. Begone!" }});

    return response.json({ message: { status: true, message: "The Tower librarians were able to confirm your identity. Welcome!" }});
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
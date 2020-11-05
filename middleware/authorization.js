const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    const tokenCookie = request.cookies.jwt;
    if (!tokenCookie) return response.status(401).json({ message: "No authentication token, authorization denied!" });

    const isVerified = jwt.verify(tokenCookie, process.env.JWT_SECRET);
    if (!isVerified) return response.status(401).json({ message: "Token failed, authorization denied!" });

    request.user = isVerified.id;
    next();
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
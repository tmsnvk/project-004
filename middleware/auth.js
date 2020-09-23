const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  try {
    const token = request.header("x-auth-token");
    
    if (!token) {
      return response.status(401).json({ message: "No authentication token, authorization denied!" });
      response.redirect("/page/home");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return response.status(401).json({ message: "Token failed, authorization denied!" });
      response.redirect("/page/home");
    }

    request.user = verified.id;
    next();
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = auth;
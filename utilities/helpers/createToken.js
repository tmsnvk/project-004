const maxAge = require("../../utilities/helpers/maxAge");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports = createToken;
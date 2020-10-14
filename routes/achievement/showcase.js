const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { _id } = request.query;
  
    const getUser = await userSchema.findById(_id);
    const storyCodes = ["a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];
  
    if (request.url.includes(storyCodes[0])) {
      return response.json(getUser.achievementsA1S1);
    } else if (request.url.includes(storyCodes[1])) {
      return response.json(getUser.achievementsA1S2);
    } else if (request.url.includes(storyCodes[2])) {
      return response.json(getUser.achievementsA2S1);
    } else if (request.url.includes(storyCodes[3])) {
      return response.json(getUser.achievementsA3S1);
    } else if (request.url.includes(storyCodes[4])) {
      return response.json(getUser.achievementsA4S1);
    } else return null;
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
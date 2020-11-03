const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { _id } = request.query;
  
    const getUser = await userSchema.findById(_id);
    const storyCodes = ["a0s1", "a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];
  
    if (request.url.includes(storyCodes[0])) {
      return response.json(getUser.achievementsTutorial);
    } else if (request.url.includes(storyCodes[1])) {
      return response.json(getUser.achievementsA1S1);
    } else if (request.url.includes(storyCodes[2])) {
      return response.json({ error: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCodes[3])) {
      return response.json({ error: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCodes[4])) {
      return response.json({ error: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCodes[5])) {
      return response.json({ error: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else return null;
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
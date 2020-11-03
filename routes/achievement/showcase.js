const userSchema = require("../../models/userModel");

module.exports = async (request, response) => {
  try {
    const { _id } = request.query;
  
    const getUser = await userSchema.findById(_id);
    const storyCode = ["a0s1", "a0s2", "a0s3", "a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];
  
    if (request.url.includes(storyCode[0])) {
      return response.json(getUser.achievementsTutorial01);
    } else if (request.url.includes(storyCode[1])) {
      return response.json(getUser.achievementsTutorial02);
    } else if (request.url.includes(storyCode[2])) {
      return response.json(getUser.achievementsTutorial03);
    } else if (request.url.includes(storyCode[3])) {
      return response.json({ message: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCode[4])) {
      return response.json({ message: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCode[5])) {
      return response.json({ message: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCode[6])) {
      return response.json({ message: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else if (request.url.includes(storyCode[7])) {
      return response.json({ message: "This adventure and its achievements are not yet available. Come & check back at a later time!" });
    } else return null;
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
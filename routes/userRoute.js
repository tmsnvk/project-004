const express = require("express");
const router = express.Router();
const userSchema = require("../../models/userModel");

router.post("/contactform", async (request, response) => {
  const newForm = new userSchema({
    loginname: request.body.loginname,
    password: request.body.password
  });
  
  try {
    const savedForm = await newForm.save();
    response.json(savedForm);
  } catch (error) {
    response.json(error);
    console.log(error);
  }
});

module.exports = router;
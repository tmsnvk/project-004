const express = require("express");
const router = express.Router();

router.post("/form-msg-from-evrallas", require("./form-msg-from-evrallas.js"));

module.exports = router;
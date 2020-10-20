const express = require("express");
const router = express.Router();

router.post("/form-msg-from-evrallas", require("./form-msg-from-evrallas.js"));
router.post("/form-msg-to-evrallas", require("./form-msg-to-evrallas"));

module.exports = router;
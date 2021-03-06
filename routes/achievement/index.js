const express = require("express");
const router = express.Router();

router.get("/showcase/:storyid", require("./showcase"));
router.get("/store", require("./store"));
router.put("/counter", require("./counter"));
router.put("/reset", require("./reset"));
router.put("/trigger", require("./trigger"));

module.exports = router;
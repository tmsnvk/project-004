const express = require("express");
const router = express.Router();

router.get("/store", require("./store"));
router.get("/showcase/:storyid", require("./showcase"));
router.put("/trigger", require("./trigger"));
router.put("/counter-start", require("./counter-start"));
router.put("/counter-death", require("./counter-death"));

module.exports = router;
const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

router.get("/", auth, require("./root"));
router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.post("/token-validity", require("./token-validity"));
router.put("/change-name", require("./change-name"));
router.put("/change-password", require("./change-password"));
router.delete("/delete", auth, require("./delete"));

module.exports = router;
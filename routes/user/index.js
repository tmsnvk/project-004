const express = require("express");
const router = express.Router();
const authorization = require("../../middleware/authorization");

router.get("/", authorization, require("./root"));
router.get("/theme-get", require("./theme-get"));
router.post("/login", require("./login"));
router.post("/register", require("./register"));
router.post("/theme-set", require("./theme-set"));
router.post("/token-validity", require("./token-validity"));
router.put("/change-name", require("./change-name"));
router.put("/change-password", require("./change-password"));
router.delete("/delete", authorization, require("./delete"));

module.exports = router;
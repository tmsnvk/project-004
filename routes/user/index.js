const express = require("express");
const router = express.Router();
const authorization = require("../../middleware/authorization");

router.delete("/delete", authorization, require("./delete"));
router.get("/", authorization, require("./root"));
router.get("/theme-get", require("./theme-get"));
router.post("/login", require("./login"));
router.post("/logout", require("./logout"));
router.post("/register", require("./register"));
router.post("/theme-set", require("./theme-set"));
router.post("/token-validity", require("./token-validity"));
router.put("/change-name", require("./change-name"));
router.put("/change-password", require("./change-password"));

module.exports = router;
const express = require("express");
const { Registration } = require("../Controllers/Registration");
const router = express.Router();
router.post("/registration", Registration)
module.exports = router;
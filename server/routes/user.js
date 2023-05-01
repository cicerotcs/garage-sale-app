const express = require("express");
const verify = require("../middlewares/authentication");
const { uploadAvatar } = require("../controllers/user");

const router = express.Router();

router.post("/avatar", verify, uploadAvatar);

module.exports = router;

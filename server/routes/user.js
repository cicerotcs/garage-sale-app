const express = require("express");
const verify = require("../middlewares/authentication");
const { uploadAvatar, updateInfo, getInfo } = require("../controllers/user");

const router = express.Router();

router.post("/avatar", verify, uploadAvatar);
router.put("/update", verify, updateInfo);
router.get("/get", verify, getInfo);

module.exports = router;

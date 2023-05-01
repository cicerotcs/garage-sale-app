const fs = require("fs");
const path = require("path");
const User = require("../models/user");

const uploadAvatar = async (req, res) => {
  const { avatar } = req.body;
  var data = avatar.replace(/^data:image\/\w+;base64,/, "");

  const filename = `${req.user.userId}.png`;
  const filepath = path.join("public", "avatars", filename);
  fs.writeFile(filepath, data, "base64", (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ msg: "Error saving image" });
    } else {
      const imageUrl = `${req.protocol}://${req.get(
        "host"
      )}/avatars/${filename}`;
      res.json({ imageUrl });
    }
  });
};

const updateInfo = async (req, res) => {
  const { username, location, bio } = req.body;
  await User.update(req.user.userId, username, location, bio);
  res.status(200).json({ msg: "profile has been updated" });
};

const getInfo = async (req, res) => {
  const dbRes = await User.get(req.user.userId);
  res.status(200).json(dbRes);
};

module.exports = { uploadAvatar, updateInfo, getInfo };

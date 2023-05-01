const fs = require("fs");
const path = require("path");

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

module.exports = { uploadAvatar };

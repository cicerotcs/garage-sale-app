const Auth = require("../models/auth");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    await Auth.create(name, email, password);
    res.status(200).json({ msg: "You have been successfully registered" });
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await Auth.login(email, password);
    res.status(200).json({
      msg: "You have successfully logged",
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin };

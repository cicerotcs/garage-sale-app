const pool = require("../db/connect");
const bcrypt = require("bcrypt");
const emailValidation = require("../helpers/emailValidation");
const BadRequestError = require("../errors/bad-request");
const DuplicateEmailError = require("../errors/duplicated-email");
const DuplicateUsernameError = require("../errors/duplicated-username");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class Auth {
  static create = async (name, email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!emailValidation(email)) {
      throw new BadRequestError("You need to provide a valid email!");
    }

    let sql =
      "INSERT INTO users(name, email, password) VALUES($1,$2,$3) returning *;";

    try {
      await pool.query(sql, [name, email, hashedPassword]);
    } catch (err) {
      if (err.code === "23505") {
        if (err.constraint === "users_email_key") {
          throw new DuplicateEmailError("Email already exists!");
        }
        if (err.constraint === "users_username_key") {
          throw new DuplicateUsernameError("Username already exists!");
        }
      } else {
        throw err;
      }
    }
  };

  static login = async (email, password) => {
    let sql = "SELECT * FROM users WHERE email = $1";

    const user = await pool.query(sql, [email]);

    if (user.rowCount === 0) {
      throw new BadRequestError("Email or password incorrect!");
    }

    const isMath = await bcrypt.compare(password, user.rows[0].password);

    if (!isMath) {
      throw new BadRequestError("Email or password incorrect!");
    }

    return jwt.sign(
      { userId: user.rows[0].id, name: user.rows[0].name },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES }
    );
  };
}

module.exports = Auth;

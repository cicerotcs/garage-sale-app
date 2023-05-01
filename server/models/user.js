const pool = require("../db/connect");

class User {
  static update = async (userId, username, location, bio) => {
    let sql = "UPDATE users set username=$1, location=$2, bio=$3 WHERE id=$4";
    const res = await pool.query(sql, [username, location, bio, userId]);
    return res;
  };

  static get = async (userId) => {
    let sql =
      "SELECT name, email, username, location, bio FROM users where id=$1";

    const res = await pool.query(sql, [userId]);
    return res.rows[0];
  };
}

module.exports = User;

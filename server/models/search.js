const pool = require("../db/connect");

class Search {
  static get = async (q, lat, lng) => {
    let sql =
      "SELECT * FROM listing WHERE items::text ILIKE '%' || $1 || '%' AND CAST(latitude AS NUMERIC) <= CAST($2 AS NUMERIC) + 1 AND CAST(latitude AS NUMERIC) >= CAST($2 AS NUMERIC) -1 AND CAST(longitude AS NUMERIC) <= CAST($3 AS NUMERIC) + 1 AND CAST(longitude AS NUMERIC) >= CAST($3 AS NUMERIC) -1;";
    const res = await pool.query(sql, [q, lat, lng]);
    return res.rows;
  };
}

module.exports = Search;

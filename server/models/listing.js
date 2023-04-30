const pool = require("../db/connect");

class Listing {
  static add = async (
    user_id,
    store_name,
    contact,
    description,
    location,
    items,
    lat,
    lng
  ) => {
    let sql =
      "INSERT INTO listing(user_id, store_name, contact, description, location, items, latitude, longitude) VALUES($1,$2,$3,$4,$5,$6,$7,$8);";
    await pool.query(sql, [
      user_id,
      store_name,
      contact,
      description,
      location,
      items,
      lat,
      lng,
    ]);
  };

  static findListingById = async (userId) => {
    let sql = "SELECT * FROM listing WHERE user_id=$1";

    const res = await pool.query(sql, [userId]);
    return res.rows[0];
  };

  static updateListingById = async (
    store_name,
    contact,
    description,
    location,
    items,
    userId,
    listingId,
    lat,
    lng
  ) => {
    let sql =
      "UPDATE listing set store_name=$1, contact=$2, description=$3, location=$4, items=$5, latitude=$6, longitude=$7 where user_id=$8 AND id=$9";

    const res = await pool.query(sql, [
      store_name,
      contact,
      description,
      location,
      items,
      lat,
      lng,
      userId,
      listingId,
    ]);
    return res;
  };

  static delete = async (listingId, userId) => {
    let sql = "DELETE FROM listing where id=$1 AND user_id=$2";

    const res = await pool.query(sql, [listingId, userId]);
    return res;
  };

  static all = async () => {
    let sql = "SELECT * FROM listing";

    const res = await pool.query(sql);
    return res.rows;
  };
}

module.exports = Listing;

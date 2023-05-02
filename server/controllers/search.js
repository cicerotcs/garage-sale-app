const Search = require("../models/search");

const search = async (req, res) => {
  const { q, lat, lng } = req.query;

  const dbRes = await Search.get(q, lat, lng);
  res.json(dbRes);
};

module.exports = search;

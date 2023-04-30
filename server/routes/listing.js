const express = require("express");
const {
  addListing,
  findListings,
  updateListing,
  deleteListing,
  allListings,
} = require("../controllers/listing");
const verify = require("../middlewares/authentication");

const router = express.Router();

router.post("/new", verify, addListing);
router.get("/find", verify, findListings);
router.put("/edit", verify, updateListing);
router.delete("/delete", verify, deleteListing);
router.get("/all", allListings);

module.exports = router;

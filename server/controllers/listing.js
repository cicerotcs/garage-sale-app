const Listing = require("../models/listing");

// add a new listing
const addListing = async (req, res) => {
  const { store_name, contact, description, location, items, lat, lng } =
    req.body;

  await Listing.add(
    req.user.userId,
    store_name,
    contact,
    description,
    location,
    items,
    lat,
    lng
  );
  res.status(200).json({ msg: "You have added a new sale" });
};

// find listing of an user
const findListings = async (req, res) => {
  const dbRes = await Listing.findListingById(req.user.userId);
  res.status(200).json(dbRes);
};

// update listing of an user
const updateListing = async (req, res) => {
  const {
    store_name,
    contact,
    description,
    location,
    items,
    listingId,
    lat,
    lng,
  } = req.body;
  await Listing.updateListingById(
    store_name,
    contact,
    description,
    location,
    items,
    req.user.userId,
    listingId,
    lat,
    lng
  );
  res.status(200).json({ msg: "You sale has been updated" });
};

// delete listing of an user
const deleteListing = async (req, res) => {
  const { listingId } = req.body;

  await Listing.delete(listingId, req.user.userId);
  res.status(200).json({ msg: "Your listing has been deleted" });
};

module.exports = { addListing, findListings, updateListing, deleteListing };

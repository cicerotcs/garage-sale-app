import axios from "axios";
import { getToken } from "./user-service";

const BASE_URL = "http://127.0.0.1:3000/api/listing";

export const addListing = async (
  store_name,
  contact,
  description,
  location,
  items,
  lat,
  lng
) => {
  try {
    const res = await axios.post(
      BASE_URL + "/new",
      {
        store_name,
        contact,
        description,
        location,
        items,
        lat,
        lng,
      },
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

export const editListing = async (
  store_name,
  contact,
  description,
  location,
  items,
  listingId,
  lat,
  lng
) => {
  try {
    const res = await axios.put(
      BASE_URL + "/edit",
      {
        store_name,
        contact,
        description,
        location,
        items,
        listingId,
        lat,
        lng,
      },
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    );

    return res;
  } catch (err) {
    return err;
  }
};

export const deleteListing = async (listingId) => {
  try {
    const res = await axios.delete(BASE_URL + "/delete", {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      data: { listingId },
    });
    return res;
  } catch (err) {
    return err;
  }
};

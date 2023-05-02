import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000/api";

export const searchItems = async ({ q, lat, lng }) => {
  try {
    const res = await axios.get(
      BASE_URL + `/search?q=${q}&lat=${lat}&lng=${lng}`
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

import axios from "axios";
import { getToken } from "./user-service";

const BASE_URL = "http://127.0.0.1:3000/api/user";

export const updateProfile = async (username, location, bio) => {
  try {
    const res = await axios.put(
      BASE_URL + "/update",
      {
        username,
        location,
        bio,
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

export const getInfo = async () => {
  try {
    const res = await axios.get(BASE_URL + "/get", {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });

    return res;
  } catch (err) {
    return err;
  }
};

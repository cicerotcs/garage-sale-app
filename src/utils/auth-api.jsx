import axios from "axios";
import { addTokenToLocalStorage } from "../utils/localStorage";

const BASE_URL = "http://127.0.0.1:3000/api/auth";

export const signup = async (name, email, password) => {
  try {
    const res = await axios.post(BASE_URL + "/signup", {
      name,
      email,
      password,
    });

    return res;
  } catch (err) {
    return err;
  }
};

export const signin = async (email, password) => {
  try {
    const res = await axios.post(BASE_URL + "/signin", { email, password });
    addTokenToLocalStorage(res.data.token);
    return res;
  } catch (err) {
    return err;
  }
};

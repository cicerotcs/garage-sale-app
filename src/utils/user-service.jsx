import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../utils/localStorage";

export function getPayload(token) {
  return JSON.parse(window.atob(token.split(".")[1]));
}

export function getToken() {
  const token = getTokenFromLocalStorage();

  if (!token) return null;

  const payload = getPayload(token);

  if (payload.exp < Date.now() / 1000) {
    //token expired
    removeTokenFromLocalStorage();
    return null;
  }

  return token;
}

export function getUser() {
  const token = getToken();

  if (token) {
    let user = getPayload(token);
    return user;
  } else {
    return null;
  }
}

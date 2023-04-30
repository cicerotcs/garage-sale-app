import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { getToken } from "../utils/user-service";
import isEqual from "lodash/isEqual";

const BASE_URL = "http://127.0.0.1:3000/api/listing";

const headers = { Authorization: `Bearer ${getToken()}` };

const useFetch = () => {
  const [userListing, setUserListing] = useState(null);
  const userListingRef = useRef(null);
  useEffect(() => {
    async function fetchUserListing() {
      const { data } = await axios.get(BASE_URL + "/find", { headers });
      if (!isEqual(data, userListingRef.current)) {
        setUserListing(data);
        userListingRef.current = data;
      }
    }
    fetchUserListing();
  }, []);

  return userListing;
};

export default useFetch;

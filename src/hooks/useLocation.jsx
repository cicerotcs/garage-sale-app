import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const useLocation = () => {
  const { location } = useGlobalContext();
  const [coords, setCoords] = useState({});
  useEffect(() => {
    async function fetchLatLng() {
      if (location) {
        try {
          const { data: position } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${
              import.meta.env.VITE_APP_GOOGLE_API
            }`
          );

          const { lat, lng } = position.results[0].geometry.location;

          if (lat && lng) {
            setCoords({
              lat,
              lng,
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchLatLng();
  }, [location]);

  return coords;
};

export default useLocation;

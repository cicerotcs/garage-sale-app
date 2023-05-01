import Map from "../../components/Map/Map";
import Grid from "../../components/Grid/Grid";
import { BsGrid3X3, BsMap } from "react-icons/bs";
import { useGlobalContext } from "../../hooks/context";
import axios from "axios";
import "./Home.scss";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:3000/api/listing";

const Home = () => {
  const [layout, setLayout] = useState("map");
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
  const { setState, state } = useGlobalContext();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setCoords({
        latitude: latitude,
        longitude: longitude,
      });
      const apiKey = import.meta.env.VITE_APP_GOOGLE_API;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const state = data.results[0].address_components.find((component) =>
        component.types.includes("administrative_area_level_1")
      ).long_name;
      setState(state);
    });
  }, []);

  useEffect(() => {
    async function fetchListings() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(BASE_URL + "/all");
        setListings(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }

    fetchListings();
  }, []);

  function handleLayout(view) {
    setLayout(view);
  }

  return (
    <div className="hero">
      <div className="layout-changer">
        <h4>Garage sales in {state}</h4>
        <div>
          {layout === "map" ? (
            <BsGrid3X3 size={24} onClick={() => handleLayout("grid")} />
          ) : (
            <BsMap size={24} onClick={() => handleLayout("map")} />
          )}
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="hero-listings">
          {layout === "map" ? (
            <Map
              listings={listings}
              height="calc(100vh - 108px - 150px)"
              lat={coords.latitude}
              lng={coords.longitude}
            />
          ) : (
            <Grid listings={listings} />
          )}
        </section>
      )}
    </div>
  );
};
export default Home;

import Map from "../../components/Map/Map";
import Grid from "../../components/Grid/Grid";
import { BsGrid3X3, BsMap } from "react-icons/bs";
import { useGlobalContext } from "../../hooks/context";
import axios from "axios";
import "./Home.scss";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:3000/api/listing";

const Home = ({ region, coords }) => {
  const [layout, setLayout] = useState("map");
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAllByLocation() {
      setIsLoading(true);
      try {
        const { data } = await axios.post(BASE_URL + "/all-by-location", {
          lat: coords.latitude,
          lng: coords.longitude,
        });
        setListings(data);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    }

    fetchAllByLocation();
  }, [coords.latitude, coords.longitude]);

  function handleLayout(view) {
    setLayout(view);
  }

  return (
    <div className="hero">
      <div className="layout-changer">
        <h4>Garage sales in {region}</h4>
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

import Map from "../../components/Map/Map";
import Grid from "../../components/Grid/Grid";
import { BsGrid3X3, BsMap } from "react-icons/bs";

import "./Home.scss";
import { useState } from "react";
const Home = () => {
  const [layout, setLayout] = useState("map");

  function handleLayout(view) {
    setLayout(view);
  }

  return (
    <div className="hero">
      <div className="layout-changer">
        <h4>Garage sales near by:</h4>
        <div>
          {layout === "map" ? (
            <BsGrid3X3 size={24} onClick={() => handleLayout("grid")} />
          ) : (
            <BsMap size={24} onClick={() => handleLayout("map")} />
          )}
        </div>
      </div>
      <section className="hero-listings">
        {layout === "map" ? (
          <Map height="calc(100vh - 108px - 150px)" />
        ) : (
          <Grid />
        )}
      </section>
    </div>
  );
};
export default Home;

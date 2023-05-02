import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Listing from "./pages/Listing/Listing";
import Settings from "./pages/Settings/Settings";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Search from "./pages/Search/Search";
import { useGlobalContext } from "./hooks/context";
import { useEffect, useState } from "react";

import "./App.scss";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { user } = useGlobalContext();

  const [region, setRegion] = useState("");
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });

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
      setRegion(state);
    });
  }, []);

  return (
    <>
      <Navbar coords={coords} />
      <Routes>
        <Route path="/" element={<Home region={region} coords={coords} />} />
        <Route path="/listing/:id" element={<Listing />} />
        <Route
          path="/settings"
          element={
            <ProtectedRouter user={user}>
              <Settings user={user} />
            </ProtectedRouter>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

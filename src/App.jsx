import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Listing from "./pages/Listing/Listing";
import Settings from "./pages/Settings/Settings";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import { useGlobalContext } from "./hooks/context";

import "./App.scss";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const { user } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      <Footer />
    </>
  );
};
export default App;

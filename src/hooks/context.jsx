import { useContext, createContext, useState } from "react";

import { getUser } from "../utils/user-service";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [activeLink, setActiveLink] = useState("general");
  const [user, setUser] = useState(getUser());
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        activeLink,
        setActiveLink,
        user,
        setUser,
        location,
        setLocation,
        state,
        setState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

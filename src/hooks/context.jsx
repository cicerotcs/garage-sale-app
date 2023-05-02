import { useContext, createContext, useState } from "react";
import { removeTokenFromLocalStorage } from "../utils/localStorage";

import { getUser, getPayload } from "../utils/user-service";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [activeLink, setActiveLink] = useState("general");
  const [user, setUser] = useState(getUser());
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const login = (newUser) => {
    setUser(getPayload(newUser));
  };

  const logout = () => {
    setUser(null);
    removeTokenFromLocalStorage();
  };

  return (
    <GlobalContext.Provider
      value={{
        activeLink,
        setActiveLink,
        user,
        setUser,
        location,
        setLocation,
        login,
        error,
        setError,
        success,
        setSuccess,
        isLoading,
        setIsLoading,
        searchResults,
        setSearchResults,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

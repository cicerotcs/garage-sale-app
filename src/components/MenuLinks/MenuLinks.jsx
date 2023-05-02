import { useGlobalContext } from "../../hooks/context";
import "./MenuLinks.scss";

const MenuLinks = () => {
  const { activeLink, setActiveLink, logout } = useGlobalContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="settings-menu__links">
      <ul>
        <li
          onClick={() => setActiveLink("general")}
          className={`${activeLink === "general" && "active"}`}
        >
          General
        </li>
        <li
          onClick={() => setActiveLink("add-listing")}
          className={`${activeLink === "add-listing" && "active"}`}
        >
          Add Listing
        </li>
        <li
          onClick={() => setActiveLink("my-listings")}
          className={`${activeLink === "my-listings" && "active"}`}
        >
          My listings
        </li>
        <li>Message center</li>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </ul>
    </div>
  );
};
export default MenuLinks;

import "./Settings.scss";

import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import Profile from "../../components/Profile/Profile";
import MenuLinks from "../../components/MenuLinks/MenuLinks";
import AddListing from "../../components/AddListing/AddListing";
import MyListings from "../../components/MyListings/MyListings";
import { useGlobalContext } from "../../hooks/context";

const Settings = () => {
  const { activeLink } = useGlobalContext();
  return (
    <div className="settings">
      <div className="settings-sidebar">
        <h2>Settings</h2>
        <ProfilePicture />
      </div>
      <div className="settings-menu">
        <MenuLinks />
        {activeLink === "general" && <Profile />}
        {activeLink === "add-listing" && <AddListing />}
        {activeLink === "my-listings" && <MyListings />}
      </div>
    </div>
  );
};
export default Settings;

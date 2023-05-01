import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
//import { Link } from "react-router-dom";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/context";
import useAvatar from "../../hooks/useAvatar";

const Navbar = () => {
  const { user } = useGlobalContext();
  const profilePicture = useAvatar();
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <Link to="/">Home</Link>
      </div>
      <div className="nav-search">
        <FaSearch color="#bcc1caff" size={20} />
        <input name="search" type="text" placeholder="Search..." />
      </div>
      <div className="nav-profile">
        {user ? (
          <Link to="/settings">
            <img src={profilePicture} alt="profile" />
          </Link>
        ) : (
          <Link to="/signin">
            <FaUserAlt size={24} color="white" />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;

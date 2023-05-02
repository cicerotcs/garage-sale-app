import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/context";
import useAvatar from "../../hooks/useAvatar";
import { useEffect, useState } from "react";
import { searchItems } from "../../utils/search-api";
import { useNavigate } from "react-router-dom";

const Navbar = ({ coords }) => {
  const { user, setSearchResults } = useGlobalContext();
  const { profilePicture } = useAvatar();
  const [search, setSearch] = useState({
    q: "",
    lat: "",
    lng: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setSearch({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  }, [coords.latitude, coords.longitude]);

  const handleOnChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await searchItems(search);
    setSearchResults(data);
    navigate(`/search?q=${search.q}&lat=${search.lat}&lng=${search.lng}`);
    setSearch({ q: "", lat: coords.latitude, lng: coords.longitude });
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <a href="/">Home</a>
      </div>
      <div className="nav-search">
        <form onSubmit={handleSubmit}>
          <FaSearch color="#bcc1caff" size={20} />
          <input
            name="q"
            type="text"
            placeholder="Search..."
            onChange={handleOnChange}
            value={search.q}
          />
        </form>
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

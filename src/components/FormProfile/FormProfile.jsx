import "./FormProfile.scss";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/context";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { updateProfile } from "../../utils/user-api";
import { getInfo } from "../../utils/user-api";

const FormProfile = () => {
  const [user, setUser] = useState({});
  const { location } = useGlobalContext();

  const [form, setForm] = useState({
    name: "",
    username: "",
    location: "",
    bio: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchUser() {
      const { data } = await getInfo();
      setUser(data);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    if (user.username && user.location && user.bio) {
      setForm(user);
    }
  }, [user]);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !location || !form.bio) {
      setError("Please complete all required fields");
      return;
    }

    const res = await updateProfile(form.username, location, form.bio);

    if (res.status === 200) {
      setSuccess(res.data.msg);
    } else {
      setError(res.response.data.msg);
    }
  };

  console.log(user);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-name">
        <div style={{ flex: 1 }}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} disabled />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            placeholder="Your username"
            value={form.username}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="mb-20">
        <Search location={user.location} />
        {/* <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          placeholder="Select your location"
          value={form.location}
          onChange={handleOnChange}
        /> */}
      </div>
      <div className="mb-20">
        <label htmlFor="bio">Bio</label>
        <textarea
          style={{ height: "95px", resize: "none" }}
          id="bio"
          name="bio"
          value={form.bio}
          onChange={handleOnChange}
        ></textarea>
        <small style={{ color: "red", display: "flex", marginTop: "10px" }}>
          {error}
        </small>
        <small style={{ color: "green", display: "flex", marginTop: "10px" }}>
          {success}
        </small>
      </div>
      <Button label="Save Information" />
    </form>
  );
};
export default FormProfile;

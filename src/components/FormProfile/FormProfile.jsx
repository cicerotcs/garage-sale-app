import "./FormProfile.scss";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/context";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import { updateProfile } from "../../utils/user-api";
import { getInfo } from "../../utils/user-api";
import Validator from "../Validator/Validator";

const FormProfile = () => {
  const [user, setUser] = useState({});
  const { location, error, setError, success, setSuccess, setIsLoading } =
    useGlobalContext();

  const [form, setForm] = useState({
    name: "",
    username: "",
    location: "",
    bio: "",
  });

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

    setIsLoading(true);

    const res = await updateProfile(form.username, location, form.bio);

    setIsLoading(false);

    if (res.status === 200) {
      setSuccess(res.data.msg);
    } else {
      setError(res.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-name">
        <div style={{ flex: 1 }}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={form.name || user.name}
            disabled
          />
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
        {error || success ? <Validator /> : ""}
      </div>
      <Button label="Save Information" />
    </form>
  );
};
export default FormProfile;

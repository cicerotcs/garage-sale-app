import "./FormProfile.scss";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/context";

const FormProfile = () => {
  const { user } = useGlobalContext();
  return (
    <form>
      <div className="form-name">
        <div style={{ flex: 1 }}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={user.name} disabled />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" placeholder="Your username" />
        </div>
      </div>
      <div className="mb-20">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          placeholder="Select your location"
        />
      </div>
      <div className="mb-20">
        <label htmlFor="bio">Bio</label>
        <textarea style={{ height: "95px", resize: "none" }}></textarea>
      </div>
      <Button label="Save Information" />
    </form>
  );
};
export default FormProfile;

import "./ProfilePicture.scss";
import avatar from "../../assets/img/avatar.png";
const ProfilePicture = () => {
  return (
    <div className="settings-photo">
      <img src={avatar} alt="avatar" />
      <span className="avatar-name">Jay Rutherford</span>
      <p className="avatar-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis
        distinctio aspernatur.
      </p>
    </div>
  );
};
export default ProfilePicture;

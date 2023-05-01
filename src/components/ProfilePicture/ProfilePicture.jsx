import "./ProfilePicture.scss";
import { useGlobalContext } from "../../hooks/context";
import { FaUserEdit } from "react-icons/fa";
import useAvatar from "../../hooks/useAvatar";
const ProfilePicture = ({ setIsEditingPhoto }) => {
  const profilePicture = useAvatar();
  const { user } = useGlobalContext();

  return (
    <div className="settings-photo">
      <img src={profilePicture} alt="avatar" />
      <span className="avatar-name">{user.name}</span>
      <p className="avatar-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis
        distinctio aspernatur.
      </p>
      <div style={{ marginTop: "15px", cursor: "pointer" }}>
        <FaUserEdit size={30} onClick={() => setIsEditingPhoto(true)} />
      </div>
    </div>
  );
};
export default ProfilePicture;

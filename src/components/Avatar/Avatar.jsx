import Avatar from "react-avatar-edit";
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../utils/user-service";
import useAvatar from "../../hooks/useAvatar";

import "./Avatar.scss";

const BASE_URL = "http://127.0.0.1:3000/api/user/avatar";

const UploadAvatar = ({ setIsEditingPhoto }) => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const { setProfilePicture } = useAvatar();

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const handleUpload = async () => {
    try {
      const res = await axios.post(
        BASE_URL,
        { avatar: preview },
        {
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        }
      );

      if (res.status === 200) {
        setIsEditingPhoto(false);
        setProfilePicture(res.data.imageUrl);
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: "19px" }}>
      <Avatar
        width={350}
        height={300}
        src={src}
        onClose={onClose}
        onCrop={onCrop}
      />
      {preview !== null && (
        <button onClick={handleUpload} className="btn-avatar btn-avatar__save">
          Save
        </button>
      )}
      <button onClick={() => setIsEditingPhoto(false)} className="btn-avatar ">
        Cancel
      </button>
    </div>
  );
};
export default UploadAvatar;

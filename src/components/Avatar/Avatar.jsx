import Avatar from "react-avatar-edit";
import { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../utils/user-service";

const BASE_URL = "http://127.0.0.1:3000/api/user/avatar";

const UploadAvatar = ({ setIsEditingPhoto }) => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

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
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Avatar
        width={400}
        height={300}
        src={src}
        onClose={onClose}
        onCrop={onCrop}
      />
      {preview !== null && <button onClick={handleUpload}>Save</button>}
      <button onClick={() => setIsEditingPhoto(false)}>Cancel</button>
    </>
  );
};
export default UploadAvatar;

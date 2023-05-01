import { useGlobalContext } from "./context";
import { useState, useEffect } from "react";
import axios from "axios";

const useAvatar = () => {
  const [profilePicture, setProfilePicture] = useState(
    "http://127.0.0.1:3000/avatars/avatar.png"
  );
  const { user } = useGlobalContext();

  useEffect(() => {
    async function fetchAvatar() {
      const res = await axios.get(
        `http://127.0.0.1:3000/avatars/${user.userId}.png`
      );
      if (res.status === 200) {
        setProfilePicture(`http://127.0.0.1:3000/avatars/${user.userId}.png`);
      }
    }
    fetchAvatar();
  }, []);

  return profilePicture;
};

export default useAvatar;

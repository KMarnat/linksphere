import Button from "../Button/Button";
import CameraIcon from "../../assets/camera-icon.svg?react";
import Unknown from "../../assets/unknown.jpg";
import { useState } from "react";

interface AvatarProps {
  editProfileImage?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ editProfileImage }) => {
  const [avatar, setAvatar] = useState(null);

  return (
    <div className="avatar">
      <div className="aspect-ratio">
        <div>
          <img src={avatar ? avatar : Unknown} alt="Profile avatar" />
        </div>
      </div>
      {editProfileImage && (
        <Button type={"stats"}>
          <CameraIcon />
        </Button>
      )}
    </div>
  );
};

export default Avatar;

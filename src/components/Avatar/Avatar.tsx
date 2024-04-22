import Button from "../Button/Button";
import CameraIcon from "../../assets/camera-icon.svg";

interface AvatarProps {
  image: string;
  editProfileImage?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ image, editProfileImage }) => {
  return (
    <div className="avatar">
      <div className="aspect-ratio">
        <div>
          <img src={image} alt="Profile avatar" />
        </div>
      </div>
      {editProfileImage && (
        <div>
          <Button type={"stats"}>
            <CameraIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Avatar;

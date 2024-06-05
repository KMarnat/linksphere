import Unknown from "../../assets/unknown.jpg";
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput";

interface AvatarProps {
  editProfileImage?: boolean;
  avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ editProfileImage, avatar }) => {
  return (
    <div className="avatar">
      <div className="aspect-ratio">
        <div>
          <img src={avatar ? avatar : Unknown} alt="Profile avatar" />
        </div>
      </div>
      {editProfileImage && <ImageUploadInput fileToUpload="avatar" />}
    </div>
  );
};

export default Avatar;

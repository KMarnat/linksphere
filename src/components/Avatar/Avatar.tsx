import Unknown from "../../assets/unknown.jpg";

import { useUser } from "../../services/useUser";
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput";

interface AvatarProps {
  editProfileImage?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ editProfileImage }) => {
  const { user } = useUser();

  const userAvatar = user?.user_metadata.avatar;

  return (
    <div className="avatar">
      <div className="aspect-ratio">
        <div>
          <img src={userAvatar ? userAvatar : Unknown} alt="Profile avatar" />
        </div>
      </div>
      {editProfileImage && <ImageUploadInput fileToUpload="avatar" />}
    </div>
  );
};

export default Avatar;

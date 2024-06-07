import { useUser } from "../../services/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput";
import Vibrant from "node-vibrant";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import EditIcon from "../../assets/edit.svg?react";
import placeholderCover from "../../assets/placeholderCover.png";

const ProfileBanner = () => {
  const [bannerColor, setBannerColor] = useState<string | null>(null);
  const { user } = useUser();
  const navigate = useNavigate();
  const userCover = user?.user_metadata.coverImage;
  const userAvatar = user?.user_metadata.avatar;

  useEffect(() => {
    const extractColors = async () => {
      try {
        const palette = await Vibrant.from(userCover).getPalette();
        const vibrantColor = palette.Vibrant ? palette.Vibrant.hex : null;
        setBannerColor(vibrantColor || "transparent");
      } catch (error) {
        console.error("Error extracting palette:", error);
      }
    };

    extractColors();
  }, [userCover]);

  const profileGradient = {
    background: `linear-gradient(to bottom, ${bannerColor}, var(--bg-container) 50%)`,
  };

  return (
    <div className="profile" style={profileGradient}>
      <div className="profile-banner">
        <div className="adaptive">
          <div className="adaptive-photo">
            <img
              src={userCover ? userCover : placeholderCover}
              alt="profile cover"
              onError={(e) => console.error("Error loading cover image:", e)}
            />
          </div>
          <ImageUploadInput fileToUpload="cover" />
        </div>
        <div className="user-details">
          <Avatar editProfileImage={true} avatar={userAvatar} />
          <div className="user-details__content">
            <h3>{user?.user_metadata.fullName}</h3>
            <h4 className="user-details__friends">??? friends</h4>
          </div>
          <Button
            type={"primary"}
            onClick={() => navigate(`/profile/${user?.user_metadata.fullName.toLowerCase()}/edit`)}
          >
            <EditIcon />
            Edit profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

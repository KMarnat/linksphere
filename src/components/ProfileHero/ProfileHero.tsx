import { useUser } from "../../services/useUser";
import Vibrant from "node-vibrant";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import EditIcon from "../../assets/edit.svg?react";
// import TestCoverImage from "../../assets/testProfileCover.png";
import TestCoverImage2 from "../../assets/testProfileCover2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileBanner = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [bannerColor, setBannerColor] = useState("transparent");

  useEffect(() => {
    const extractColors = async () => {
      try {
        const palette = await Vibrant.from(TestCoverImage2).getPalette();
        const vibrantColor = palette.Vibrant ? palette.Vibrant.hex : null;
        setBannerColor(vibrantColor || "transparent");
      } catch (error) {
        console.error("Error extracting palette:", error);
      }
    };

    extractColors();
  }, []);

  console.log(user);

  const profileGradient = {
    background: `linear-gradient(to bottom, ${bannerColor}, var(--bg-container) 50%)`,
  };

  return (
    <div className="profile" style={profileGradient}>
      <div className="profile-banner">
        <div className="adaptive">
          <div className="adaptive-photo">
            <img src={TestCoverImage2} alt="profile cover" />
          </div>
        </div>
        <div className="user-details">
          <Avatar editProfileImage={true} />
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

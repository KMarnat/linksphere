import TestCoverImage from "../../assets/testProfileCover.png";
import Avatar from "../Avatar/Avatar";
import Unknown from "../../assets/unknown.jpg";

const ProfileBanner = () => {
  return (
    <div className="profile-banner">
      <div className="adaptive">
        <div className="adaptive-photo">
          <img src={TestCoverImage} alt="" className="profile-banner__cover" />
        </div>
      </div>
      <div>
        <Avatar image={Unknown} />
        <div>
          <h3>name</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;

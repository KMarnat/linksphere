import Logo from "../../assets/linksphere-logo.svg";
import Avatar from "../Avatar/Avatar";
import LogOut from "../Logout/LogOut";
import { Link } from "react-router-dom";
import { useUser } from "../../services/useUser";

const Header = () => {
  const { user } = useUser();
  const userAvatar = user?.user_metadata.avatar;

  return (
    <header className="header">
      <Link to={"/feed"}>
        <img className="header__logo" src={Logo} alt="LinkSphere logo" />
      </Link>
      <div className="header__user">
        <Link to={`/profile/${user?.user_metadata.fullName.toLowerCase()}`}>
          <Avatar avatar={userAvatar} />
        </Link>
        <LogOut />
      </div>
    </header>
  );
};

export default Header;

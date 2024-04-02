import { useEffect, useState } from "react";
import Logo from "../../assets/linksphere-logo.svg";
import { getCurrentUser } from "../../services/apiAuth";
import Avatar from "../Avatar/Avatar";
import Unknown from "../../assets/unknown.jpg";

import LogOut from "../Logout/LogOut";

const Header = () => {
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        console.log(user);
        setCurUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="LinkSphere logo" />
      <div className="header__user">
        <Avatar image={Unknown} />
        <LogOut />
      </div>
    </header>
  );
};

export default Header;

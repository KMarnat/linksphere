import { useLogout } from "../../services/useLogout";
import Button from "../Button/Button";
import LogoutIcon from "../../assets/logout-icon.svg?react";

const LogOut = () => {
  const { logout, isLoading } = useLogout();

  return (
    <Button type="stats" onClick={logout} isLoading={isLoading}>
      <LogoutIcon className="logout-icon" />
    </Button>
  );
};

export default LogOut;

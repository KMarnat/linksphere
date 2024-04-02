import { useLogout } from "../../services/useLogout";
import Button from "../Button/Button";
import LogoutIcon from "../LogoutIcon/LogoutIcon";

const LogOut = () => {
  const { logout, isLoading } = useLogout();

  return (
    <Button
      label={<LogoutIcon color="#FFF" />}
      type="stats"
      onClick={logout}
      isLoading={isLoading}
    />
  );
};

export default LogOut;

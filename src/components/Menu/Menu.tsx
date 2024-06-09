import { useState } from "react";
import MenuIcon from "../../assets/dotted-menu-icon.svg?react";
import Button from "../Button/Button";

interface MenuProps {
  postAuthor: boolean;
}

const Menu: React.FC<MenuProps> = ({ postAuthor }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <div className="menu">
      <Button type="stats" onClick={() => setActiveMenu(!activeMenu)}>
        <MenuIcon className={`btn__icon ${activeMenu && "menu__icon--active"}`} />
      </Button>
      {activeMenu && (
        <ul className="options-list">
          <li>Hide</li>
          <li>Report</li>
          {postAuthor && <li className="options-list__delete">Delete</li>}
        </ul>
      )}
    </div>
  );
};

export default Menu;

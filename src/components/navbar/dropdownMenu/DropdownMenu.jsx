import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function DropdownMenu({ children }) {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="nav-dropdown">
      <CSSTransition
        in={activeMenu == "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem setMenu={setActiveMenu}>My Profile</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu == "Settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

import React from "react";

export default function DropDownItem({ children, goToMenu, setActiveMenu }) {
  return (
    <a
      href="#"
      className="nav-menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">1</span>
      {children}
      <span className="icon-right">2</span>
    </a>
  );
}

import React, { useState } from "react";
import DropdownMenu from "./dropdownMenu/DropdownMenu";

export default function UserWidget({ icon }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <span className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </span>
      {open && <DropdownMenu />}
    </li>
  );
}

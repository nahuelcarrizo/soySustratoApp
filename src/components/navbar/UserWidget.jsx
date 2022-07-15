import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import DropdownMenu from "./dropdownMenues/DropdownMenu";

export default function UserWidget({ icon }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <span className="text-light" onClick={() => setOpen(!open)}>
        <FaUserAlt className="h4" />
      </span>
      {open && <DropdownMenu />}
    </li>
  );
}

import React from "react";
import { useState } from "react";

export default function UserWidget({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" href="#" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

import React from "react";
import "../css/CartWidget.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function CartWidget({ cantidad }) {
  return (
    <div>
      <button className="nav-icon icon-bag">
        <HiOutlineShoppingBag />
      </button>
    </div>
  );
}

CartWidget.defaultProps = { cantidad: 0 };

import { useContext, useState } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { MiContexto } from "../../../context/CartContext";

export default function CartWidget({ icon, children }) {
  const { cart } = useContext(MiContexto);
  const totalQuant = cart.reduce((prev, curr) => prev + curr.cantidad, 0);

  return (
    <>
      <li className="nav-item">
        <Link className="icon-button" href="#" to={"/Cart"}>
          {icon}
        </Link>
        <span id="carritoNumero" className="badge rounded-circle">
          {totalQuant}
        </span>
      </li>
    </>
  );
}

CartWidget.defaultProps = { totalQuant: 0 };

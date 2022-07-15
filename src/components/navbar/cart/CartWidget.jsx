import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../../../context/CartContext";
import { FaShoppingBag } from "react-icons/fa";

export default function CartWidget({ children }) {
  const { cart } = useContext(MiContexto);
  const totalQuant = cart.reduce((prev, curr) => prev + curr.cantidad, 0);

  return (
    <>
      <li className="nav-item">
        <Link className="icon-button" href="#" to={"/Cart"}>
          <FaShoppingBag className="text-dark h3 m-0" />
        </Link>
        <span id="carritoNumero" className="badge rounded-circle">
          {totalQuant}
        </span>
      </li>
    </>
  );
}

CartWidget.defaultProps = { totalQuant: 0 };

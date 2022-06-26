import { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function CartWidget() {
  const { cart } = useContext(MiContexto);

  const totalQuant = cart.reduce((prev, curr) => prev + curr.cantidad, 0);
  console.log(totalQuant);
  return (
    <div>
      <Link className="text-white me-4" to={"/Cart"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
        </svg>
        <span id="carritoNumero" className="badge rounded-circle">
          {totalQuant}
        </span>
      </Link>
    </div>
  );
}

CartWidget.defaultProps = { totalQuant: 0 };

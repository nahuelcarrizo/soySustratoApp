import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu({ handleOpen }) {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div className="nav-dropdown">
      <div className="d-flex flex-column">
        <h1>Log In</h1>
        <div className="dropdown-line w-100"></div>
        <form className="d-flex flex-column h-100">
          <div className="d-flex flex-column">
            <label>e-mail</label>
            <input
              className="w-100 rounded border mt-1"
              type="email"
              size="20"
            />
            <label>contraseña</label>
            <input
              className="w-100 rounded border mt-1"
              type="password"
              size="20"
            />
            <div className="d-flex flex-lg-row flex-column pt-4 justify-content-between">
              <Link to={"/UserLogin"}>Olvidaste tu contraseña?</Link>
              <Link to={"#"}>Registrarse</Link>
            </div>
          </div>
          <div className="d-flex align-items-end mt-2 h-100">
            <input
              type="submit"
              value="Iniciar sesión"
              className="h-75 w-100 btn btn-success rounded-0"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

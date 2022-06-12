import CartWidget from "./CartWidget";
import logo from "../imgs/logos/logo-transparente.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import "../css/Navbar.css";
import MenuMobile from "./MenuMobile/MenuMobile";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="position-absolute w-100 pt-2">
      <nav className="navbar navbar-expand-sm navbar-dark position-relative justify-content-around">
        <div>
          <button
            className="nav-icon icon-close"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <HiOutlineMenuAlt4 />
          </button>
          <div>
            {navbarOpen && (
              <MenuMobile handle={() => setNavbarOpen(!navbarOpen)} />
            )}
          </div>
        </div>

        <a className="navbar-brand" href="#">
          <img src={logo} width="142" height="39" alt="logo de soy sustrato" />
        </a>
        <CartWidget />
      </nav>
    </header>
  );
}

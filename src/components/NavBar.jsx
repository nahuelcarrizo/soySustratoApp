import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "./soysustrato-logoblanco.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand ms-4" to={`/ItemListContainer`}>
        <img src={logo} width="110" height="35" alt="logo de soy sustrato" />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to={`/ItemListContainer`}>
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/ItemListContainer`}>
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/ItemListContainer`}>
              FAQS
            </Link>
          </li>
        </ul>
      </div>
      <form className="form-inline me-4">
        <button className="btn btn-light" type="button">
          Login
        </button>
      </form>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

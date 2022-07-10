import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../icons/cart.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import logo from "../soysustrato-logonegro.png";
import CartWidget from "./cart/CartWidget";
import UserWidget from "./UserWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light d-flex ">
      <Link className="navbar-brand ms-4" to={`/ItemListContainer`}>
        <img src={logo} width="110" height="35" alt="logo de soy sustrato" />
      </Link>
      <div className="collapse navbar-collapse">
        <form>
          <input type="text" name="search" />
        </form>
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
      <UserWidget icon={<UserIcon />} />
      <CartWidget icon={<CartIcon />} />
    </nav>
  );
}

export default NavBar;

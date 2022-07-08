import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import logo from "../soysustrato-logonegro.png";
import NavItem from "./NavItem";
import { ReactComponent as CartIcon } from "../../icons/cart.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import DropdownMenu from "./dropdownMenu/DropdownMenu";

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
      <UserWidget icon={<UserIcon />}>
        <DropdownMenu />
      </UserWidget>
      <CartWidget icon={<CartIcon />}>
        <DropdownMenu />
      </CartWidget>
    </nav>
  );
}

export default NavBar;

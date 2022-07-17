import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import logo from "../soysustrato-logoblanco.png";
import CartWidget from "./cart/CartWidget";
import DropdownCat from "./dropdownMenues/DropDownCat";
import UserWidget from "./UserWidget";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="position-absolute">
      <div className="position-relative bg-transparent">
        <div className="header-inner d-flex justify-content-between align-items-center">
          <Link className="navbar-brand ms-4" to={`/ItemListContainer`}>
            <img
              src={logo}
              width="210"
              height="52"
              alt="logo de soy sustrato"
              className="logo-ss"
            />
          </Link>
          <div className="d-flex flex-column">
            <div>
              <nav className="navbar-expand-lg navbar-dark d-flex navbar-up">
                <div className="collapse navbar-collapse d-flex justify-content-end">
                  <ul className="d-flex text-light">
                    <li className="nav-item me-4">
                      <Link to={`/ItemListContainer`}>Contacto</Link>
                    </li>
                    |
                    <li className="nav-item ms-4 me-4">
                      <Link to={`/ItemListContainer`}>Nosotros</Link>
                    </li>
                    |
                    <li className="nav-item text-center ms-4">
                      <Link to={`/ItemListContainer`}>FAQs</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div>
              <nav className="d-flex navbar-down position-relative">
                <ul className="d-flex align-items-center">
                  <li className="me-5">
                    <Link to={"/TestShop"}>PERSONALIZAR</Link>
                  </li>
                  <li
                    className="me-5 nav-categories"
                    onMouseOver={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <Link
                      className="position-relative pb-1 nav-underline"
                      to={"/TestShop"}
                    >
                      CATEGORIAS
                      <GoChevronDown className="ms-1 h3" />
                    </Link>
                    {/*   {open && <DropdownCat />} */}
                    <DropdownCat />
                  </li>
                  <FaSearch className="text-light h4 nav-item" />
                  <UserWidget icon={<UserIcon className="h1" />} />
                  <CartWidget />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

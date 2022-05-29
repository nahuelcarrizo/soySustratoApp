import CartWidget from './CartWidget';
import logo from './soysustrato-logoblanco.png';


function NavBar() {
    return  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand ms-4" href="#">
                <img src={logo} width="110" height="35" alt="logo de soy sustrato" />
              </a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className="nav-link">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">FAQS</a>
                  </li>
                </ul>
              </div>
              <form class="form-inline me-4">
                <button class="btn btn-light" type="button">Login</button>
              </form>
              <CartWidget />
            </nav>
  }
  
  export default NavBar;
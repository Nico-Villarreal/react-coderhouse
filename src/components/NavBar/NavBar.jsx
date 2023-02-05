import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import LogoApp from "../LogoApp/LogoApp";

function NavBar() {
  return (
    <div className="d-flex justify-content-between aling-items-center">
      <div className="me-5">
        <LogoApp />
      </div>
      <Nav variant="pills" className="fw-bolder">
        <div className="d-flex gap-3 mx-5">
          <Nav.Item>
            <NavLink className="mx-2 text-white border-white border-2" to="/">
              Home
            </NavLink>
          </Nav.Item>
          <NavDropdown title="Catalogo" id="nav-dropdown">
            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/catalogo"
              >
                Todo
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="catalogo/hombre"
              >
                Hombre
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="catalogo/mujer"
              >
                Mujer
              </NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="catalogo/joyas"
              >
                Joyas
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="catalogo/computacion"
              >
                Tecnologia
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            <NavLink
              className="mx-2 text-white border-white border-2"
              to="/contacto"
            >
              Contacto
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="mx-2 text-white border-white border-2"
              to="/ayuda"
            >
              Ayuda
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="mx-2 text-white border-white border-2"
              to="/encontranos"
            >
              Encontranos
            </NavLink>
          </Nav.Item>
        </div>
      </Nav>
      <div className="ms-5">
        <Link to={`/cart`}>
          <CartWidget />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

//className="mx-2 text-white border-white border-2"

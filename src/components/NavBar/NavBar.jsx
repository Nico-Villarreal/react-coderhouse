import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";
import LogoApp from "../LogoApp/LogoApp";

function NavBar() {
  return (
    <div className="d-flex justify-content-between aling-items-center">
      <div className="me-5">
        <LogoApp />
      </div>
      <Nav variant="pills" className=" ">
        <div className="d-flex gap-3 mx-5">
          <Nav.Item>
            <Nav.Link
              href="index.html"
              className="mx-2 text-white border-white border-2"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=" "
              className="mx-2 text-white border-white border-2"
            >
              Catalogo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=" "
              className="mx-2 text-white border-white border-2"
            >
              Contacto
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=" "
              className="mx-2 text-white border-white border-2"
            >
              Ayuda
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href=" "
              className="mx-2 text-white border-white border-2"
            >
              Encontranos
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
      <div className="ms-5">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;

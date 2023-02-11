import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const CarritoVacio = () => {
  return (
    <div className="d-flex row m-5">
      <div className="d-flex justify-content-center m-3">
        <img src="https://paisajesespanoles.es/images/emptycart.png" alt="carrito-vacio" className="w-25 "/>
      </div>
      <div>
        <h1 className="m-5 p-5 text-center">
          No hay productos seleccionados en el carrito
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <NavLink to="/catalogo">
          <Button variant="warning"  className="border-3 border-dark border" size="lg">
            Agregar Productos
          </Button>
        </NavLink>

      </div>
   </div>
  );
};

export default CarritoVacio;

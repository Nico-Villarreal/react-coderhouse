import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Counter from "../../../Counter/Counter";
import Swal from "sweetalert2";

const SingleProduct = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const [counter, setCounter] = useState(0);
  const stock = 10;

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return (
      <div className="d-flex justify-content-center p-5 m-3 w-75 border border-dark rounded">
        <Card style={{ width: "40%" }} className="p-5 border-dark">
          <Card.Img
            src={product.imageId}
            className="h-50 border border-dark rounded p-5"
          />
          <Card.Body className="text-center d-flex flex-column justify-content-center">
            <Card.Title className="fs-2">{product.title}</Card.Title>
            <Card.Text className="fw-bolder">{product.description}</Card.Text>
            <div className="border border-dark rounded py-2 fw-bolder">Productos en Stock: 
               {" "+ product.stock}
            </div>
            <div className="my-3 d-flex justify-content-center">
              <Counter
                counter={counter}
                setCounter={setCounter}
                stock={stock}
              />
            </div>
            <Button variant="secondary" className="mt-3 border border-dark border-3">
              ${product.price}
            </Button>
            <Button variant="success"  className="mt-3" onClick={() => 
              Toast.fire({
                icon: 'success',
                title: 'Producto agregado'
              }, addItem(product, counter))}>
              AGREGAR AL CARRITO
            </Button>
          </Card.Body>
        </Card>
      </div>
  );
};

export default SingleProduct;

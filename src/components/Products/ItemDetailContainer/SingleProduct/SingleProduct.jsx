import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Counter from "../../../Counter/Counter";

const SingleProduct = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const [counter, setCounter] = useState(0);
  const stock = 10;

  return (
    <>
      <div className="d-flex justify-content-center p-5 m-3 border border-dark rounded">
        <Card style={{ width: "40%" }} className="p-3 border-dark">
          <Card.Img
            src={product.image}
            className="h-50 border border-dark rounded p-1"
          />
          <Card.Body className="text-center d-flex flex-column justify-content-center">
            <Card.Title className="fs-2">{product.title}</Card.Title>
            <Card.Text className="fw-bolder">{product.description}</Card.Text>
            <div className="my-3">
              <Counter
                counter={counter}
                setCounter={setCounter}
                stock={stock}
              />
            </div>
            <Button variant="primary" className="mt-3">
              ${product.price}
            </Button>
            <Button className="mt-3" onClick={() => addItem(product, counter)}>
              AGREGAR AL CARRITO
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;

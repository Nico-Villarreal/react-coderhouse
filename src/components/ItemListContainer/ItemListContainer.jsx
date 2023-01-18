import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Counter from "../Counter/Counter";
import "./ItemListContainer.css";

const ItemListContainer = ({ producto }) => {
  return (
    <div className="detail dflex">
      <div className="d-flex m-3 border border-dark rounded">
        <Card style={{ width: "100%" }} className="p-3">
          <Card.Img
            src={producto.image}
            className="h-50 border border-dark rounded p-1"
          />
          <Card.Body className="text-center d-flex flex-column justify-content-center">
            <Card.Title>{producto.title}</Card.Title>
            <div className="my-3">
              <Counter />
            </div>
            <div>
              <Button className="mt-2">Add to Cart</Button>
            </div>
            <Button variant="primary" className="mt-3">
              ${producto.price}
            </Button>
            <Button className="mt-3">CLICK AQUI - Mas Info</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemListContainer;

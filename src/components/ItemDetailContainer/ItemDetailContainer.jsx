import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Counter from "../Counter/Counter";

function ItemDetailContainer({ productos }) {
  return (
    <div className="d-flex m-3 border border-dark rounded">
      <Card style={{ width: "100%" }} className="p-3">
        <Card.Img
          src={productos.image}
          className="h-50 border border-dark rounded p-1"
        />
        <Card.Body className="text-center d-flex flex-column justify-content-center">
          <Card.Title>{productos.title}</Card.Title>
          <div className="my-3">
            <Counter />
          </div>
          <div>
            <Button className="mt-2">Add to Cart</Button>
          </div>
          <Button variant="primary" className="mt-3">
            ${productos.price}
          </Button>
          <Button className="mt-3">CLICK AQUI - Mas Info</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ItemDetailContainer;

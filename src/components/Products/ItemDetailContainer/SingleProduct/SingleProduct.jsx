import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Counter from "../../../Counter/Counter";

const SingleProduct = ({product}) => {
  return (
    <>
    <div className="d-flex justify-content-center p-5 m-3 border border-dark rounded">
      <Card style={{ width: "40%" }} className="p-3">
        <Card.Img
          src={product.image}
          className="h-50 border border-dark rounded p-1"
        />
        <Card.Body className="text-center d-flex flex-column justify-content-center">
          <Card.Title className="fs-2">{product.title}</Card.Title>
          <Card.Text className="fw-bolder">{product.description}</Card.Text>
          <div className="my-3">
            <Counter />
          </div>
          <Button variant="primary" className="mt-3">
            ${product.price}
          </Button>
          <Button className="mt-3">AGREGAR AL CARRITO</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default SingleProduct
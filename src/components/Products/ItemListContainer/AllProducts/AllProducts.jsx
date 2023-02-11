import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProducts = ({ allProducts }) => {
  return (
    <div className="d-flex m-3 border border-dark border-3 rounded">
      <Card style={{ width: "100%" }} className="p-3">
        <Card.Img
          src={allProducts.imageId}
          className="h-50 border border-dark rounded p-1"
        />
        <Card.Body className="text-center d-flex flex-column justify-content-center border-top border-dark mt-4">
          <Card.Title>{allProducts.title}</Card.Title>
          <Button variant="primary" className="mt-3">
            ${allProducts.price}
          </Button>
          <Link to={`item/${allProducts.id}`}>
            <Button className="mt-3">CLICK AQUI - Mas Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllProducts;

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem({arma, precio, imagen, description}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className='text-center'>
        <Card.Title>{arma}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">${precio}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';

function CardItem({arma, precio, imagen, description}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className='text-center'>
        <Card.Title>{arma}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <div>
          <Counter/>
        </div>
        <div>
          <Button className='mt-2'>Add to Cart</Button>
        </div>
        <Button variant="primary" className='mt-3'>${precio}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;


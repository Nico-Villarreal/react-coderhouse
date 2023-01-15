import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';

function CardItem({productItem}) {

  return (
    <Card style={{ width: '75%'}} className="p-3">
      <Card.Img src={productItem.image} className='h-25 border border-dark rounded p-1'  />
      <Card.Body className='text-center d-flex flex-column justify-content-center'>
        <Card.Title>{productItem.title}</Card.Title>
        <div className='my-3'>
          <Counter/>
        </div>
        <div>
          <Button className='mt-2'>Add to Cart</Button>
        </div>
        <Button variant="primary" className='mt-3'>${productItem.price}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;


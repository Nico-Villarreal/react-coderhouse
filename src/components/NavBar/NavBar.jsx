import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import LogoApp from '../LogoApp/LogoApp';

function NavBar() {
  return (

    <Nav variant="pills" className='d-flex '>  
      <div className='me-5'>
        <LogoApp/>
      </div>
      <div className='d-flex gap-3 mx-5 justify-content-center'> 
        <Nav.Item>
          <Nav.Link href="index.html" className='mx-2 active text-white bg-secondary'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=" " className='mx-2 text-white border-white border-2'>Catalogo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=" " className='mx-2 text-white border-white border-2'>Contacto</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=" " className='mx-2 text-white border-white border-2'>Ayuda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href=" " className='mx-2 text-white border-white border-2'>Encontranos</Nav.Link>
        </Nav.Item>
      </div>
      <div className='ms-5'>
        <CartWidget/>
      </div>
    </Nav>
  );
}

export default NavBar;


import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav variant="pills" >
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
    </Nav>
  );
}

export default NavBar;


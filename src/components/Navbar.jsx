import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <Link to='/' className='FunkoShop'>
                FunkoShop!
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link style={{color:'black',textDecoration:'none'}} to='/categoria/marvel'>
                    Marvel
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color:'black',textDecoration:'none'}} to='/categoria/starwars'>
                    Star Wars
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color:'black',textDecoration:'none'}} to='/categoria/games'>
                    Games
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link style={{color:'black',textDecoration:'none'}} to='/carrito/'>
                    <CartWidget />
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
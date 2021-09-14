import './header.styles.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../images/logo1.png';
const Header = () => {
    return (   
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="purple" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="link-container">
            <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/trending"><Nav.Link>Trending</Nav.Link></LinkContainer>
            <LinkContainer to="/offer"><Nav.Link>Offers</Nav.Link></LinkContainer>
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    
   );
}
 
export default Header;
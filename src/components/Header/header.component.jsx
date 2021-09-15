import './header.styles.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../images/logo1.png';
const Header = () => {
    return (   
    <div className='header'>
        <Navbar collapseOnSelect expand="lg" bg="purple" variant="dark">
        <Container>
        <LinkContainer to="/ITL_LAB1/home">
        <Navbar.Brand>
            <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="link-container">
            <LinkContainer to="/ITL_LAB1/home"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/ITL_LAB1/trending"><Nav.Link>Trending</Nav.Link></LinkContainer>
            <LinkContainer to="/ITL_LAB1/offer"><Nav.Link>Offers</Nav.Link></LinkContainer>
            <LinkContainer to="/ITL_LAB1/about"><Nav.Link>About</Nav.Link></LinkContainer>
            <LinkContainer to="/ITL_LAB1/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    
   );
}
 
export default Header;
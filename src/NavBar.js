import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BikeThrasher</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/music">Music</Nav.Link>
              <Nav.Link as={Link} to="/tour-dates">Tour Dates</Nav.Link>
              <Nav.Link as={Link} to="/merch">Merch</Nav.Link>
              <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/music">Music</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tour-dates">Tour Dates</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/merch">Merch</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/videos">Videos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.scss';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar navigation navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link href="#home">Tasks</Nav.Link>
            <Nav.Link href="#link">Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
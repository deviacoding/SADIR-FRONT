import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


const NavbarBootstrap = () => {
    const expand = "sm"
  return (
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    <Container fluid>
      <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">


            <NavDropdown
              title="UseState"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >

              <NavDropdown.Item as={Link}  to="/FirstState">
                Lu/Non Lu
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Toggle
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Simple Counter
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                List Map
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Object Prevstate
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link}  to="/website">Website</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}

export default NavbarBootstrap
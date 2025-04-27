import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const NavbarB = () => {
  const { t, i18n} = useTranslation();
  const expand = "md";
  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Webschool Project</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Webschool
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  {t("home")}
                </Nav.Link>

                <Nav.Link as={Link} to="/articles">
                  Blog
                </Nav.Link>

                <Nav.Link as={Link} to="/Website">
                  Website
                </Nav.Link>

                <NavDropdown
                  title="UseState"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to="/SimpleCounter">
                    Compteur
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ListComponent">
                    {" "}
                    Array Map
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/ObjComponent">
                    Object (prevState){" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/DarkMode">
                    DarkMode
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Toogle">
                    Reveal pwd
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="UseEffect"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as={Link} to="/CounterClassic">
                    UseEffect
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/FetchJsonPlaceHolder">
                    Fetch JsonPlaceHolder
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/MouseTracker">
                    MouseTracker
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/TimerInterval">
                    TimerInterval
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/FetchUsers">
                    FetchUsers
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Components"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="/website">
                    Form website
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/website">Modal</NavDropdown.Item>
                  <NavDropdown.Item href="/table">Table</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/Signin">
                  Signin
                </Nav.Link>

                <NavDropdown
                  title= {t("language")}
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item  onClick={() => i18n.changeLanguage("en")}>English</NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => i18n.changeLanguage("fr")}>Français</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarB;

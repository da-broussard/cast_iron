import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../style/navbar.css";

function NavigationBar() {
  return (
    <div className="nav_bar">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} variant="dark" className="navBar">
          <Container fluid>
            <Navbar.Brand href="/">C.I.G</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  C.I.G
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="about">About</Nav.Link>
                  <Nav.Link href="contact">Contact</Nav.Link>
                  <NavDropdown
                    title="Brands"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="birmingham">
                      Birmingham
                    </NavDropdown.Item>
                    <NavDropdown.Item href="foundry">
                      Chicago Foundry
                    </NavDropdown.Item>

                    <NavDropdown.Item href="griswold">
                      Griswold
                    </NavDropdown.Item>
                    <NavDropdown.Item href="lodge">
                      Lodge
                    </NavDropdown.Item>
                    <NavDropdown.Item href="wagner">
                      Wagner
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavigationBar;

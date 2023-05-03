import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faUserPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm bg-white">
      <Container className="container">
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Pearsons
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mb-2 mb-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav>
            <a href="" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faSignIn} className="me-1" />
              Login
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <FontAwesomeIcon icon={faUserPlus} className="me-1" />
              Register
            </a>
            <a href="" className="btn btn-outline-dark ms-2">
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
              Cart (0)
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

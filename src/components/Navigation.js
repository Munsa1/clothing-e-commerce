import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
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
            <a href="" className="btn btn-outline-dark">Login</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

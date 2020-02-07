import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const AppBar = ({ children }) => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Acumen</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/image">Image</Nav.Link>
        <Nav.Link href="/stock">Stock</Nav.Link>
      </Nav>
    </Navbar>
    <Container fluid style={{ paddingTop: 20 }}>
      {children}
    </Container>
  </>
);

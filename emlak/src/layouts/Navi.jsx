import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navi() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-3">
              <Link to="/ilan">İlan İşlemleri</Link>
            </Nav>
            <Nav className="me-3">
              <Link to="/user">Kullanıcı İşlemleri</Link>
            </Nav>
            <Nav className="me-3">
              <Link to="/userlist">Kullanıcı Listesi</Link>
            </Nav>
            <Nav className="me-3">
              <Link to="/ilanlist">İlan Listesi</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

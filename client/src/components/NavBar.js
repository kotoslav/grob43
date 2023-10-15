import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {

    return (
      <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container>
          <NavLink class="badge badge-dark" to={SHOP_ROUTE}>GROB43</NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;

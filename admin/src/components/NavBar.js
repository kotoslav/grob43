import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const NavBar = () => {

    return (
      <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container>
          <NavLink class="badge badge-dark" to={LOGIN_ROUTE}>GROB43</NavLink>
          <Nav className="ml-auto">
            <Button variant='outline-light'>Выйти</Button>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;

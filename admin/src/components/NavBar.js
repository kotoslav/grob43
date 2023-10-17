import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useHistory} from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()
    return (
      <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container>
          <NavLink className={"badge badge-dark"} to={LOGIN_ROUTE}>GROB43</NavLink>
          <Nav className="ml-auto">
            <Button
            variant='outline-light'
            onClick={() => history.push(LOGIN_ROUTE)}
            >Выйти</Button>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;

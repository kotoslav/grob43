import React, {useContext} from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useHistory} from 'react-router-dom'
import { Context } from '../index';

const NavBar = () => {
  const history = useHistory()
  const {user} = useContext(Context);
    return (
      <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container>
          <NavLink className={"badge badge-dark"} to={LOGIN_ROUTE}>GROB43</NavLink>
          <Nav className="ml-auto">
            <Button
            variant='outline-light'
            onClick={() => {history.push(LOGIN_ROUTE); user.setIsAuth(false)}}
            >Выйти</Button>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;

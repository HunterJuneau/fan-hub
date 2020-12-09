import React from 'react';
import {
  Navbar, Nav, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <Link to='/'>Fan Hub</Link>
        <Nav navbar>
          <NavItem>
            <Link className='nav-link' to='/'>All Leagues</Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link' to='/your-leagues'>Your Leagues</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

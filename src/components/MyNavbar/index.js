import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import LogOut from '../Auth/logOut';
import Auth from '../Auth';

export default function MyNavbar({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user === null) {
      component = '';
    } else if (user) {
      component = <LogOut />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
      <Navbar color='dark' dark expand='md' className='justify-content-between'>
        <Link className='navbar-brand' to='/'>
          Fan Hub
        </Link>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link className='nav-link' to='/'>
              All Leagues
            </Link>
          </NavItem>
          <NavItem>
            <Link className='nav-link' to='/your-leagues'>
              Your Leagues
            </Link>
          </NavItem>
        </Nav>
        {loadComponent()}
      </Navbar>
    </div>
  );
}

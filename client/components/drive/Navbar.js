import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavbarComponent() {
  return (
    <Navbar className='d-flex justify-items-sb' bg="dark" variant="dark" expand="xxl">
      <Navbar.Brand>
        Parents Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link>
          Log Out
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Row>
      <Col xs={12} className='px-5'>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand> Employee management system</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                <li className='nav-item'><Link className='nav-link' to={'/'}>Employee List</Link></li>
              </Nav.Item>
              <Nav.Item>
                <li className='nav-item'><Link className='nav-link' to={'/createEmployee/_add'}>Add Employee</Link></li>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
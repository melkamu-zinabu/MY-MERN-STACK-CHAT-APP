import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap"
import Melkamu from '../asset/melkamu.JPG';
// import { Router } from 'react-router-dom';

const navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to={'/'}>
                <Navbar.Brand ><img src={Melkamu} style={{width:50,height:50,radius:50}}/></Navbar.Brand>
           </LinkContainer>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to={"/login"}>
                    <Nav.Link>login</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/chat"}>
                    <Nav.Link >chat</Nav.Link>
                </LinkContainer>
               
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )

}

export default navigation

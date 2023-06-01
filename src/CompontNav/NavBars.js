import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import logo from "../image/logo.png";

const NavBars = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            <Nav className="me-auto" >
              <Nav.Link className="active"  href="#home">Home</Nav.Link>

              <NavDropdown  title="pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1"> Login / Register</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services " id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Service Detail</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Blog " id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#home">CONTACT US</Nav.Link>
              {/* <Nav.Link href="#home">search</Nav.Link>
              <Nav.Link href="#home">icon + (01018724012)</Nav.Link> */}
              <Nav.Link href="#home">
                <button>CONTACT US <span> > </span> </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;

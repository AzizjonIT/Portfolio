import React from 'react'
import "./Navbars.css"

import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from "../Contact.jsx"
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="Navbar">
        <Container fluid id="container">
          <Navbar.Brand  id="nav_collor">
            <Link className="Link_navbars" to={"/"}>
              <h4 className="footer_h4">Coder</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="navbar_Toggle" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              id="nav_collor"
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "120px" }}
              navbarScroll
            >
              <Nav.Link id="nav_collor" >
                <Link className="Link_navbars" to={"/"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link id="nav_collor" >
                <Link className="Link_navbars" to={"/About/"}>
                  About US
                </Link>
              </Nav.Link>
              <Nav.Link id="nav_collor" >
                <Link className="Link_navbars" to={"/Projects/"}>
                  Projects
                </Link>
              </Nav.Link>
            </Nav>
            <div className="nav_contact4">
              <Contact />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Navbars

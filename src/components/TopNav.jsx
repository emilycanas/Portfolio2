import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {Col} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./topnav.css";
//import purplelogo from '../assets/purplelogotransparent.png'
import World from '../assets/world.png'
function TopNav(){
    return(
        <>
          <div className="">
            <img
            src = {World}
            alt = "worldimg"
            width = '100%'
            // height='100%'
            className="worldimg"
            loading = 'lazy'
            >
            </img>
            <Navbar  width = '100%' className="navbar-custom" >
              
            {/* <Col>
                <a className="navbar-brand" href="/">
                  <img
                    src={purplelogo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                    alt="Emily"
                  />
                </a>
              </Col> */}

              <Col className="navlink">
              
                <Navbar.Brand href="#home" ></Navbar.Brand>
              
                <Nav className="me-auto navlink">
                  <Nav.Link href="/">
                    <p> home |</p>
                  </Nav.Link>
                  <Nav.Link href="/about">
                    <p> about |</p>
                  </Nav.Link>
                  {/* <Nav.Link href = "/resume">
                    Resume
                  </Nav.Link> */}
                  <Nav.Link href="/contact">
                   <p> contact </p>
                  </Nav.Link>
                </Nav>
              </Col>
            </Navbar>
            </div>
        
        </>
    )

}
export default TopNav;
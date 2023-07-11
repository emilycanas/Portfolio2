import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {Col} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "./topnav.css";
//import purplelogo from '../assets/purplelogotransparent.png'
import World from '../assets/world.png'
import { useLocation } from "react-router-dom";
function TopNav(){
  const location = useLocation()

    return(
        <>
          <div className="bg_color">
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

                    {location.pathname === '/' ? 
                    <div>
                      <p className="white-color float-start"> home </p>
                      <p className="float-end ms-3"> | </p>
                    </div>
                    
                     :  <p> home | </p>}
                  </Nav.Link>
                  <Nav.Link href="/about">

                  {location.pathname === '/about' ? 
                  <div>
                    <p className="white-color float-start"> about </p>
                    <p className="float-end ms-3"> | </p>
                  </div>
                  
                   :  <p>about | </p>}
                    
                  </Nav.Link>
             
                  {/* <Nav.Link href = "/resume">
                    Resume
                  </Nav.Link> */}
                  <Nav.Link href="/contact">
                  {location.pathname === '/contact' ? <p className="white-color "> contact </p> :  <p>contact</p>}

                   {/* <p> contact </p> */}
                  </Nav.Link>
                </Nav>
              </Col>
            </Navbar>
            </div>
        
        </>
    )

}
export default TopNav;
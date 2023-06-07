import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Boat from "../assets/boat.png";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Back from "../components/Back";
import TopNav from "../components/TopNav";

function Contact() {
  return (
    <>
    <TopNav></TopNav>
      <div className="brown_bgcolor pt-5 mt-5 pb-5">
        <Container>
          <Row className="center2">
            <Col>
              <Row>
                <Col className="col-10 ">
                  <p id="title-font" className="footertext">
                    {" "}
                    GET IN TOUCH!
                  </p>
                </Col>
              </Row>

              <p id = "heading">
              Please feel free to reach out if you: have any questions, would like to discuss a project, or would like to grab a coffee.                </p>

              <Row>
            
                <Col>
                  <a href="mailto:emilycanasdev@gmail.com" className="white-color">
                    <p id = "subheading">
                      <AiFillMail /> emilycanasdev@gmail.com
                    </p>
                  </a>
                  
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/emily-canas/"
                    className="white-color"
                  >
                    <p id = 'subheading'>
                      <AiFillLinkedin /> /in/emily-canas/
                    </p>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col>
              <img src={Boat} alt="GetInTouch" height="100%" width="100%" />
            </Col>
          </Row>
        </Container>
        
      </div>
     
      <div className="green-bk invisible-text mt-5">
        <p>
        this is a square
        </p>
      </div>


      <Back></Back>
    </>
  );
}

export default Contact;

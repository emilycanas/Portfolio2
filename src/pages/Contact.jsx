import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Boat from "../assets/boat_compressed.jpg";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
//import Back from "../components/Back";

function Contact() {
  return (
    <>
  
      <div className="brown_bgcolor pt-5 mt-5 pb-5">
       
        <Container>
          <Row className=" ">
            <Col className="col-12 col-sm-6 align-self-center" >
              <p id="secondary-title-font">
                    {" "}
                    Let's connect!
              </p>

              <p >
                Please feel free to reach out if you: have any questions, would like to discuss a project, or would like to grab a coffee :) 
              </p>

              <a href="mailto:emilycanasdev@gmail.com" className="white-color mt-5">
                    <p >
                      <AiFillMail /> emilycanasdev@gmail.com
                    </p>
                  </a>
                  
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/emily-canas/"
                    className="white-color"
                  >
                    <p >
                      <AiFillLinkedin /> /in/emily-canas/
                    </p>
                  </a>
            </Col>

            <Col>
              <img src={Boat} alt="GetInTouch" height="100%" width="100%" loading = 'lazy' id = 'sm-screen'/>
            </Col>
          </Row>
        </Container>
        
      </div>

    </>
  );
}

export default Contact;

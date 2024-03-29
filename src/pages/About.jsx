import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Headshot from "../assets/headshot_compressed.jpg";
import CodingImg from '../assets/coding_bg_compressed.jpg'
import { MdWavingHand } from "react-icons/md";
import LosAngeles from '../assets/LosAngeles_compressed.jpg'
import MarathonImage from '../assets/marathon_compressed.jpg'

function About() {
  return (
    <>
      <div className="bg_color width = 100%">

        <div className="center pt-5">
          <p id="title-font"> Emily Canas</p>
        </div>

        <Container>
          <Row className=" max-width  center-in-page">
            <Col className="p-5 col-8">
              <p>{" "}<b>Hi there! <MdWavingHand /></b>{" "}</p>
              <p>I'm <b> Emily</b>, a adept <b> front-end developer </b>
                 who derives immense joy from blendling the realms of creativity and problem solving. My <b>innate drive </b>lies in the gratifying process of transforming abstract concepts into tangible realities.{" "}
              </p>
            </Col>
            <Col className="center">
            <img
                src={Headshot}
                alt="headshot"
                width="70%"
                height="100%"
                loading = 'lazy'
              ></img>
            </Col>
          </Row>
        </Container>


        <Container>
          <Row className="center center-in-page max-width ">
            <Col className="col-3">
              <p className = 'fw-bold'> fun facts:</p>
            </Col>
            <Col className="m-5">
                <img
                    src = {LosAngeles}
                    alt = "los Angeles"
                    height="200"
                    width="200"
                    className="center blue-bk"
                    loading = 'lazy'
                ></img>
                <p>I am a Los Angeles native</p> 
            </Col>
            <Col>
            <img
                src = {MarathonImage}
                alt = "los Angeles"
                height="200"
                width="200"
                className="center blue-bk"
                loading = 'lazy'
                ></img>
              <p>I ran a marathon at 13-years-old</p>
            </Col>
            {/* <Col className="blue-bk m-5">
              <p id="text">This will be the last fact!</p>
            </Col> */}
          </Row>
        </Container>

        <Container className="pt-5">
          <Row className="center  max-width">
            <Col className="pt-1" >
              <p className = 'fw-bold'> when not coding: </p>
            </Col>
          </Row>

          <Row>
            <Col
              className="green-bk white-color center m-3 p-5 rounded"
              id="text"
            >
              <p> I delight in </p>
              <hr />
              <p id="bolded-subheading"> creating, cardio, & coffee</p>
              <hr />
              <p id="">
                {" "}
                I spend my free time exploring mediums for creating art,
                running/hiking, and sipping on a cappuccino or iced coffee{" "}
              </p>
            </Col>
            </Row>
          
        </Container>

        


          {/* Resume */}
          <Container className=" pb-5 pt-5 " width = '100%'>
            <Row>
              <Col className="col-6">
                <img
                  src={CodingImg}
                  alt="codingimg"
                  width="100%"
                  height="100%"
                  className="resumeimg"
                  loading = 'lazy'
                />
              </Col>
              <Col className="col-6 max-width">
         
                  <p id="fourth-title-font"> EXPERIENCE</p>

      
                
                <hr/>
                <div>
                  <a href="/carte" className="black-color">
                    <p> Carte </p>
                  </a>
                
                <p id = 'text' className="ms-3 mt-n1 fst-italic"> Front-End Developer</p>
                <p id = "text" className="ms-5"> 2021 - 6 months</p>
                </div>
               <hr/>
               <a href = '/gems' className="black-color">
                  <p> Walter Reed Army Institute of Research </p>
               </a>
                <p id = 'text' className="ms-3 fst-italic"> Data Analytics Intern</p>
                <p id = "text" className="ms-5"> 2021 - 6 months</p>
                <hr/>
                <p id = ''> Teacre </p>
                <p id = 'text' className="ms-3 fst-italic"> Web Developer</p>
                <p id = "text" className="ms-5"> 2023 - Present</p>

              </Col>
             
            </Row>
          </Container>

      </div>
    </>
  );
}

export default About;

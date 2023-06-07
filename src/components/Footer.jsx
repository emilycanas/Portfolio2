import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Boat from '../assets/boat.png'
import {AiFillLinkedin, AiFillMail} from 'react-icons/ai'



function Footer(){
    return(
        <>
         <div className='brown_bgcolor'>
        <Container>
            <Row className='center2'>
                <Col>
                    <Row>
                        <Col className='col-10 '>
                            <p id='secondary-title-font' className='footertext'> GET IN TOUCH</p>
                        </Col>
                    </Row>

                    <Row className='padding footertext '>
                        <Col>
              
                        </Col>
                        <Col>
                            <a 
                                href = "mailto:emilycanasdev@gmail.com"> 
                                <h2><AiFillMail/> </h2> 
                            </a>
                            <p> emilycanasdev@gmail.com</p> 
                            <a
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.linkedin.com/in/emily-canas/"
                            >
                                <h2><AiFillLinkedin/></h2>
                            </a>
                            <p>linkedin.com/in/emily-canas/</p>                         
                        </Col>
                    </Row>   
                </Col>
                <Col>
                    <img
                    src = {Boat}
                    alt = 'GetInTouch'
                    height= '100%'
                    width = '100%'/>
                </Col>
            </Row>
        </Container>
    </div> 
        </>
    )
}

export default Footer;
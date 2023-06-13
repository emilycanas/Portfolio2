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

                    <Row className=' white-color '>
                  
                        <Col>
                            <div className="grid-container">
                                <a 
                                    href = "mailto:emilycanasdev@gmail.com"> 
                                    <p className="black-color"><AiFillMail/> </p> 
                                </a>
                                <p>emilycanasdev@gmail.com</p> 
                            </div>
                            <div className="grid-container">
                            <a
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.linkedin.com/in/emily-canas/"
                            >
                                <p className="black-color"><AiFillLinkedin/></p>
                            </a>
                            <p>linkedin.com/in/emily-canas/</p>     
                            </div>                    
                        </Col>
                    </Row>   
                </Col>
                <Col>
                    <img
                    src = {Boat}
                    alt = 'GetInTouch'
                    height= '100%'
                    width = '100%'
                    loading = 'lazy'
                    />
                </Col>
            </Row>
        </Container>
    </div> 
        </>
    )
}

export default Footer;
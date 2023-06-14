import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {AiFillLinkedin, AiFillMail} from 'react-icons/ai'


// This will be a smaller version of the Footer already in place
    //-- This can be used in pages other than the main page. 


function SmallFooter(){

    return(

        <div className='brown_bgcolor'>
        <Container>
            <Row className='center'>
                <Col className='col-8'>
                    <p id='secondary-title-font' className='footertext'> GET IN TOUCH</p>
                </Col>
                <Col className='goright grid-container'>
                    <a 
                        href = "mailto:emilycanasdev@gmail.com"
                    > 
                        
                        <p id='tertiary-title-font'><AiFillMail className='black-color'/></p> 
                    </a>
                    <a
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/emily-canas/"
                    >
                        <p id='tertiary-title-font'><AiFillLinkedin className='black-color'/></p>
                    </a>

                </Col>
               
                </Row>       
        </Container>
    </div> 


    )
}
export default SmallFooter
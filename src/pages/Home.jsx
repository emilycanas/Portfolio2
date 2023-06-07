import React from 'react'
import './home.css'
import {Row, Col, Container, Button} from 'react-bootstrap'
import Bird from '../assets/bird.jpg'
import Dots from '../assets/dots.png'
import TopNav from '../components/TopNav'
import Headshot from '../assets/color_headshot.png'
import CarteLogo from '../assets/carte_logo_bk.png'
import CarteFood from '../assets/carte_food.png'
import Gems from '../assets/gems_logo.png'
//import CodingImg from '../assets/coding_bg.png'

import "@fontsource/belleza"
import '@fontsource/italiana'
import SkillsAnimation from '../components/animations/SkillsAnimation'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home(){
    return(
    <>
    <div className = "bg_color">
    <TopNav></TopNav>
        
        {/* First Page */}

        <div className='custom-container'>
      
        <Row className='max-height max-width pb-2 mb-3'>
            <Col className='col-6 col-sm-5'>
                <img
                    src = {Bird}
                    alt = "bird"
                    height = "100%"
                    width = "100%"
                    className='birdimg'

                ></img>
            </Col>
            <Col className='bottom-container col-6 col-sm-5'>
                <Row>
                <p  id='title-font'>Emily Canas</p> 
                <div >
                    <p > Frontend Developer</p>
                    <p>Rotterdam, Netherlands</p>
                </div> 
                </Row>
 
            </Col>
            <Col className='col-2' id = 'sm-screen'>
                <img
                    src = {Dots}
                    alt = "dots"
                    height = "100%"
                    width = "100%"
                    className='birdimg'
                   
                ></img>
            </Col>
        </Row>
        </div>
        <hr id='add-sm-screen'/>
       
     

        {/* About Me */}
        <div className='center pt-2 pb-5 mt-3 container'>
            <Row className= ' center max-height max-width row'>
                <Col className='col-lg-8 col-sm-12 col-md-6 col-12 order-sm-2 order-lg-1 order-md-1 order-2'>
                <div className='p-3'>
                    <p id='secondary-title-font'>ABOUT ME</p>
                    <p> Hello! I'm Emily, a frontend developer based in the Netherlands. I specialize in bringing ideas to life. I am committed to creating intuitive and responsive websites that engage users from the moment they land on a page. </p>
                    <Link
                    to = '/about' className='custom-link'>
                        <p id = 'bolded-subheading'> get to know me →</p>

                    </Link>
                </div>
                </Col>
                <Col className='col-lg-4 col-sm-5 col-md-6 col-5 order-sm-1 order-lg-2 order-md-2 order-1'>
                    <img
                        src = {Headshot}
                        alt = "headshot"
                        width= '75%'
                        height = '100%'

                    ></img>
                </Col>
            </Row>
        </div>

        <SkillsAnimation></SkillsAnimation>

        {/* Carte */}
        <Container >
            <Row>
            <Col className='col-3 pt-5'>
                    <p id='secondary-title-font'>SELECTED WORKS</p>
                </Col>

            </Row>
            <Row>
                <Col>
                </Col>
                
                <Col className='col-8'>
                    <div className='card'>
                        <img
                            src = {CarteLogo}
                            alt = "Carte Front"
                            height = "100%"
                            width= '100%'
                            className='img-top bg_color'
                            
                        />
                         <img
                            src = {CarteFood}
                            alt = "Carte Back"
                            height = "100%"
                            width= '100%'
                            
                        />
                        
                    </div>
                    <div className='floatright'>
                            <p> 2022 - A digital menu and ordering platform</p>
                            
                            <Link
                                to = '/carte' className = 'floatright '> 
                                <Button className='floatright ecbutton'>Learn More</Button> 
                            </Link>
                        </div>
                </Col>   
            </Row>
        </Container>

        {/* Wrair */}
        <Container>
            <Row className='padding'>
                <Col className='col-8'>
                    <div>
                        <img
                            src = {Gems}
                            className = 'border_radius'
                            alt = "GemsImg"
                            width = '100%'
                            height = '100%'/>
                        <div className='floatright'>
                            <p> 2021 - Data Analysis</p>
                            <Link
                                to = '/gems' className = 'floatright '> 
                                <Button className='floatright ecbutton'>Learn More</Button> 
                            </Link>
                             
                        </div>
                    </div>
                </Col>
            </Row>
          
        </Container>
        {/* <hr/> */}

    {/* <div className = 'background_img'> */}
        {/* Resume */}
        {/* <Container className='padding'>
            <Row>
                <Col>
                <img
                src = {CodingImg}
                alt = 'codingimg'
                width = '100%'
                height = '100%'
                />
    
                </Col>
                <Col>
                    <p id='secondary-title-font'> EXPERIENCE</p>
                    <p className='medtitlefont'> Full Stack Developer </p>               
                </Col>
            </Row>
        </Container> */}
    {/* </div>   */}
   
   

    {/* Contact */}
    <Footer></Footer>
   
    </div>
    </>
    )
}

export default Home;
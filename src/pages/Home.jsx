import React from 'react'
import './home.css'
import {Row, Col, Container} from 'react-bootstrap'
import Bird from '../assets/bird.jpg'
import Dots from '../assets/dots.png'
import TopNav from '../components/TopNav'
import Headshot from '../assets/color_headshot.png'
//import CarteLogo from '../assets/carte_logo_bk.png'
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
                    loading = 'lazy'
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
                    loading = 'lazy'
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
                        loading = 'lazy'
                    ></img>
                </Col>
            </Row>
        </div>
        
        <div className='pt-5 pb-5'>
            <SkillsAnimation></SkillsAnimation>
        </div>
        

        {/* Carte */}
        <Container className='pt-5 pb-5' >
            <Row>
            <Col className='col-3'>
                    <p id='secondary-title-font'>SELECTED WORKS</p>
                </Col>

            </Row>
            <Row className='justify-content-end'>    
                <Col className='col-8'>
                    <img
                    src = {CarteFood}
                    alt = "Carte Back"
                    height = "100%"
                    width= '100%'
                    loading = 'lazy' 
                    /> 
                </Col>   
            </Row>
            <Row className='justify-content-end'>
                <Col className='col-8'>
                    <p> 2022 - A digital menu and ordering platform</p>

                    <div className='justify-content-end text-right align-self-start'>
                        
                       
                    </div>
                </Col>
            </Row>

            <div className='d-flex align-items-end flex-column'>          
                <a className='btn btn-lg floatright ecbutton' href = '/carte' role = 'button'> Learn More</a>
            </div>
        </Container>

        {/* Wrair */}
        <Container className='pb-5'>
            <Row>
                <Col className='col-9'>
                    <div>
                        <img
                            src = {Gems}
                            className = 'border_radius'
                            alt = "GemsImg"
                            width = '100%'
                            height = '100%'
                            loading = 'lazy'
                            />
                        <div className='floatright'>
                            <p> 2021 - Data Analysis</p>
                            <a className='btn btn-lg floatright ecbutton' href = '/gems' role = 'button'> Learn More</a>
                             
                        </div>
                    </div>
                </Col>
            </Row>
          
        </Container>
        {/* <hr/> */}

    {/* Contact */}
    <Footer></Footer>
   
    </div>
    </>
    )
}

export default Home;
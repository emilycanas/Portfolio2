import React from 'react'
import './home.css'
import {Row, Col, Container} from 'react-bootstrap'
import Bird from '../assets/birdcompressed.jpg'
import CarteFood from '../assets/carte_food_compressed.jpg'
import Gems from '../assets/gems_logo_compressed.jpg'
import SkillsAnimation from '../components/animations/SkillsAnimation'

//import Dots from '../assets/dots.png'
//import Headshot from '../assets/headshot_compressed.jpg'
//import { Link } from 'react-router-dom'
//import { MdOutlineComputer } from "react-icons/md";
//import { VscLocation } from "react-icons/vsc";

function Home(){
    return(
    <>
    
    <div className = "bg_color container pt-5">        
        {/* First Page */}

        <div>
            <Row className='max-height max-width pb-5' >
                <Col className='col-4.5 col-sm-6'>
                    <img
                        src = {Bird}
                        alt = "bird"
                        height = "100%"
                        width = "100%"
                        className='birdimg'
                        loading = 'lazy'
                    ></img>
                </Col>
                <Col className='col-7.5 col-sm-6 pt-5'>
                        <p  id='title-font' className=''>Emily Canas</p> 
                        <p className=' bd-highlight '> Front End Developer</p>
                        <p className='bd-highlight'>Rotterdam, Netherlands</p>   
                </Col>
                {/* <Col className='col-sm-1.5' id = 'sm-screen'>
                        <img
                            src = {Dots}
                            alt = "dots"
                            height = "100%"
                            width = "100%"
                            className='birdimg emilyrow'
                            loading = 'lazy'
                        ></img>   
                </Col> */}
            </Row>

            <hr/>
        </div>
       
        {/* About Me */}
        {/* <div className='container pt-5'>
          
            <Row className= ' center max-height max-width row'>
                <Col className='col-lg-8 col-sm-12 col-md-7 col-12 order-sm-2 order-lg-1 order-md-1 order-2'>
                <div className=''>
                    <p id='secondary-title-font'>ABOUT ME</p>
                    <p> Hello! I'm Emily, a Front End developer based in the Netherlands. I am committed to creating intuitive and responsive websites that engage users from the moment they land on a page. </p>
                    <Link
                    to = '/about' className='custom-link'>
                        <p id = 'bolded-subheading'> get to know me →</p>

                    </Link>
                </div>
                </Col>
                <Col className='col-lg-4 col-sm-5 col-md-5 col-5 order-sm-1 order-lg-2 order-md-2 order-1'>
                    <img
                        src = {Headshot}
                        alt = "headshot"
                        width= '75%'
                        height = '100%'
                        loading = 'lazy'
                    ></img>
                </Col>
            </Row>
        </div> */}
        
        <div className='pt-5 pb-5'>
            <SkillsAnimation></SkillsAnimation>
        </div>
        
        <hr/>

        {/* Carte */}
        <Container className='pt-5' >
            <Row>
            <Col className='col-12 center'>
                    <p id='secondary-title-font'>Selected Works</p>
                </Col>

            </Row>
            <Row className='justify-content-end pt-3'>    
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
                <a className='btn btn-primary btn-lg ecbutton' href = '/carte' role = 'button'> Learn More</a>
            </div>
        </Container>

        {/* Wrair */}
        <Container className='pt-5 pb-5'>
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
                            <a className='btn btn-primary btn-lg ecbutton floatright' href = '/gems' role = 'button'> Learn More</a>

                           
                             
                        </div>
                    </div>
                </Col>
            </Row>
          
        </Container>
        {/* <hr/> */}

    {/* Contact */}
   
    </div>
    </>
    )
}

export default Home;
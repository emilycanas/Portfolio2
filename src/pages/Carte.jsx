import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import WebBorder from '../assets/webbrowser_border.png'
import Graphic from '../assets/carte_graphic.png'
import Phone1 from '../assets/carte_phone1.svg'
import Phone2 from '../assets/carte_phone2.svg'
import Phone3 from '../assets/carte_phone3.svg'
import CarteAutocomplete from '../assets/carte_autocomplete.svg'
import Specials from '../assets/carte_specials.svg'
import CarteValidation from '../assets/carte_validation.svg'
import CarteToastr from '../assets/carte_toastr.svg'
import {
    SiMicrosoftsqlserver,
    SiReact,
    SiGithub,
    SiDotnet,
    SiHtml5,
    SiCss3,
    SiJavascript,
  } from "react-icons/si";


function Carte(){
    return(
        <>
        <div className="bg_color" width = '100%'>
        <TopNav/>

        <Container>
            <Row>
                <Col>
                    <p id = 'title-font'> Carte</p>
                    <p className="ms-5"> A digital menu and ordering platform</p>
                </Col>
                <Col className="align-self-end text-end pt-5 mt-5">
                    <img
                    src = {WebBorder}
                    alt = "Web Browser border"
                    height='80%'
                    width = '80%'
                    loading = 'lazy'
                    ></img>
                </Col>
            </Row>
        </Container>

        <Row className="center mt-5 max-width"> 
            <Col><p>Year</p></Col>
            <Col><p>Type</p></Col>
            {/* <Col><p>Location</p> </Col> */}
            <Col><p>Role</p> </Col>
        </Row>
        <Row className="blue-bk white-color center mb-5 pt-3 max-width">
            <Col>  <p> 2022</p> </Col>
            <Col><p>MVP Development</p></Col>
            {/* <Col>  <p>Remote, based in CA</p> </Col> */}
            <Col>  <p>FrontEnd Specialist</p> </Col>
        </Row>

        <Row className="justify-content-end max-width"> 
            <div className="col-4">
                <img
                src = {Graphic}
                alt = 'Cool Graphic'
                height = '100%'
                width= '100%'
                loading = 'lazy'
                ></img>
            </div>
        </Row>
        <Container>
            {/* <Row>
                <Col className="col-8">
                    <p id = 'tertiary-title-font'> The Challenge:</p>
                </Col>
                <p className="ms-1"> To spearhead the development of Carte's Minimum Viable Product(MVP) </p>

            </Row>
             */}
            <Row className="ms-5 mt-5">
                <p className="ms-5" id = 'secondary-title-font'> My Task: </p>
                
            </Row>
            <Row className="justify-content-end">
            <Col className=" col-8">
                    <p> Assumed responsibility for the seamless integration and management of location-based functionality.</p>
                </Col>
            </Row>
        </Container>
       
       {/* Add higher resoultion images to these */}
        {/* <Container className="mt-5 mb-5"> */}
            <Row className="center mt-5 mb-2 max-width">
                <Col className="col-4">
                <img
                src = {Phone1}
                height= '100%'
                width = '100%'
                alt = 'Carte Location 1'
                loading = 'lazy'
                >
                </img>
                
                </Col>
                <Col className="col-4">
                <img
                src = {Phone3}
                height= '100%'
                width = '100%'
                alt = 'Carte Location 2'
                loading = 'lazy'
                >
                </img>
                </Col>
                <Col className="col-4">
                <img
                src = {Phone2}
                height= '100%'
                width = '100%'
                alt = 'Carte Location 3'
                loading = 'lazy'
                >
                </img>
                </Col>
            </Row>
        {/* </Container> */}
        
        <Container>
            <Row className="center">
                <p id="secondary-title-font"> Front End</p>
            </Row>
            <Row className="center">
                <Col className="col-7">
                    <img
                        src={CarteAutocomplete}
                        alt = 'Carte Autocomplete'
                        height= '100%'
                        width='100%'
                        loading = 'lazy'
                    >
                    </img>
                </Col>
                <Col>
                    <p >Integrated Google Maps API to enhance the functionality of forms by incorporating 
                    <b> location autocomplete capabilities</b>. </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <p><b>advantages</b></p>
                <Col className="col-1 justify-content-end text-end" >
                    <p> · </p>
                    <p> · </p>
                    <p> · </p>
                </Col>
                <Col className="col-8" id = 'subheading'>           
                    <p >Captures user's exact coordinates</p>
                    <p >Coordinates used for restaurant discoverability</p>
                    <p > Allows for seamless integration of Google Maps functionality</p>
                </Col>
            </Row>

            <Row>
            <Col></Col>
            <Col className="col-8 text-end">
                <img
                        src={Specials}
                        alt = 'Carte Autocomplete'
                        height= '100%'
                        width='100%'
                        loading = 'lazy'
                    >
                    </img>
            </Col>
         </Row>
        </Container>
       
        <Container className="mt-5">
            <p className="center"><b>more implemented features:</b></p>
            <Row className=" mt-5">
                <Col className="col-6 align-self-end center ">
                        <p> Form data validation</p>
                </Col>
                <Col className=" align-self-end center ">
                    <p>Real-time feedback </p>
                </Col>
            </Row>

            <Row className="center">
            <Col className="col-6">
                    <img
                            src={CarteValidation}
                            alt = 'Carte Autocomplete'
                            height= '80%'
                            width='80%'
                            loading = 'lazy'
                        >
                        </img>
                    </Col>

                    <Col className="col-6">
                    <img
                            src={CarteToastr}
                            alt = 'Carte Autocomplete'
                            height= '80%'
                            width='80%'
                            loading = 'lazy'
                        >
                        </img>
                    </Col>

            </Row>
            
           
            <p id = 'secondary-title-font' className="text-center mt-5">Back End</p> 
            <p className="text-center p-5 m-5">
            Created tables, diagrams, and programmability in a relational database. Also created API endpoints which connected frontend functionality to the backend
            </p>
        </Container>

        <Container>
        <p id = 'secondary-title-font' className="text-center">Technologies</p>
  
            <Row className="p-5 text-center">
                <Col><p id = 'tertiary-title-font'><SiMicrosoftsqlserver/></p></Col>
                <Col><p id = 'tertiary-title-font'><SiReact/></p></Col>
                <Col><p id = 'tertiary-title-font'><SiDotnet/></p></Col>
                 
            </Row> 
            <Row className="p-5 text-center">
                <Col><p id = 'tertiary-title-font'><SiJavascript/></p></Col>
                <Col><p id = 'tertiary-title-font'><SiHtml5/></p></Col>
                <Col><p id = 'tertiary-title-font'><SiCss3/></p></Col>
                <Col><p id = 'tertiary-title-font'><SiGithub/></p></Col> 

            </Row>
            <p id = 'secondary-title-font' className="text-center mt-5">Libraries</p>
            
            <Row className="justify-content-center p-5">
                <p className="text-center col-6">
                    axios, formix, yup, bootstrap , proptypes, toastr, sweetalers, react-google-maps, rc-pagination, react-router-dom
                </p>

            </Row>
           


        </Container>

       

        
        <Footer/>
        </div>
        </>
    )

}

export default Carte;

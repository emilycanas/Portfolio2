import React, {useEffect} from "react";
import TopNav from "../components/TopNav";
import Back from "../components/Back";

import "./gems.css";
//import JSOarticle from '../assets/JSOarticle.png'
// import jsotitle from "../assets/jsotitle.png";
// import jsoabstract from "../assets/jsoabstract.png";
import { Container, Row, Col } from "react-bootstrap";
import { SiMicrosoftexcel, SiMicrosoftword, SiCanva } from "react-icons/si";
// import ds2 from '../assets/dieboldscholar2.png'
import Footer from "../components/Footer";
function Gems() {
  useEffect(() => {
    window.scrollTo({
        top: (0,0),
        behavior: "instant"
    });

  }, [])
   return (
    <React.Fragment>
    
      <TopNav/>
      <div className="bg_color">
        <div className="wrairbkimg">
            <Container>
            <p className="gemstitle" id = 'secondary-title-font'>
              G.E.M.S.
              {/* Gains in the Education of Mathematics and Science */}
            </p>
            </Container>
        </div>


   
      <Container >
        <hr />
        <Row className="center">
          <Col><h1><SiMicrosoftexcel /></h1></Col>
          <Col><h1><SiMicrosoftword /></h1></Col>
          <Col><h1><SiCanva /></h1></Col>
        </Row>
        <hr />
        <p className="" id = 'heading'>Gains in the Education of Mathematics and Science</p>

        <Row>
          <Col>

            {/* <p className="" id = 'heading'>Science Education Intern</p> */}
           
           
            <p className="tab bold oblique " id="subheading">Role: </p>
            <p className="tabtabtab " id="text">
               Collaborated with the Science Education Team at Walter Reed Army
              Institute of Research (WRAIR) to observe and analyze their 2020
              virtual Gains in the Education of Mathematics and Science (GEMS)
              program.
            </p>

            <p id='heading'>Data Analysis</p>


            <p className="tabtab oblique" id="text">
              * based on 337 post-participation surveys taken by students participating in WRAIR's GEMS
            </p>
        
            <p className="tabtab bold" id="subheading">Quantitative Research</p>
            <p className="tabtabtab oblique" id="text">
              analysis of closed-ended Likert Scale questions ( n = 337)
            </p>

            <p className="tabtabtab" id="text">
              &#8226; Paired t-test used to obtain p-value (graph-pad) 
            </p>
            <p className="tab4" id="text">
                - Purpose: identify if the difference in people who agreed and disagreed with questions on the Likert Scale were significant.
            </p>
            <p className="tabtab bold space" id = 'subheading'>Qualitative Research</p>
            <p className="tabtabtab oblique" id = 'text'> analysis of open-ended questions (n = 219)</p>
            <p className="tabtabtab oblique gogoleft" id = 'text'> (1) in vivo </p>
            <p className="tabtabtab " id = 'text'> coding approach </p>
            <p className="tabtabtab" id = 'text'>
              (2) data narrowed down using axial and thematic hierarchical  coding{" "}
            </p>
            {/* "Coding -- where you label and organize your qualitative data with codes" */}
            {/* Axial Coding -- you begin to draw connections between codes (grouping and ) */}
            <p className="tabtabtab" id = 'text'>
              (3) Two primary codes and nine secondary codes established that
              encompassed data
            </p>
            <hr />
          </Col>
        </Row>
      
      </Container>
      
      <Container>
          <Row className="paddingtop">
            <Col> 
              <div className = "bold medletter tab" id = 'subheading'>
                  Publication
              </div>
              <div className="tabtab" id = 'text'> 
                  Presented data analysis and research findings to WRAIR's Science Education Team
              </div>
              <div className="tabtabtab" id = 'text'>
                  - Findings used to create and publish "Conversion of Summer STEM Program from In-Person to Virtual Learning Offers Unexpected Positives and Pitfalls" in Journal of STEM Outreach (Morris and Brown 2020).
              </div>
            </Col>
           
           
          </Row>
          {/* <Row className="center2 paddingtop">
            <Col className="graycolor col-9 center">
              <img
                src={JSOarticle} 
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="Emily"
              />
            </Col>
          </Row> */}
          
          <Row>
            <Col>
            
            <a
                className="goright"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.jstemoutreach.org/article/28437-conversion-of-summer-stem-program-from-in-person-to-virtual-learning-offers-unexpected-positives-and-pitfalls"
              >
                <p id ='text'>Read publication</p>
              </a>
              
            </Col>
          </Row>
          <hr/>
          <Row>
            <div className = "center bold" id = 'heading'>
                Award
            </div>
          </Row>
          <Row>
            <Col>
                <div className="bold" id = 'subheading'>
                    Kalamazoo College
                </div>
                <div className="tab" id = 'text'>
                    The Diebold Scholar Award
                </div>
                <div className=" tabtabtab oblique" id = 'text'>
                in recognition of excellence in the oral presentation of my findings at the Diebold Symposium at Kalamazoo College
                </div>
            </Col>
            
            {/* IMAGE OF YOUTUBE AWARD CEREMONY
            <Col>
            <img
                src={ds2} 
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="Emily"
              />
            
            </Col> */}
          </Row>
        <hr/>
      </Container>
      <Back></Back>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Gems;

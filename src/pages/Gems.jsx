import React from "react";
import TopNav from "../components/TopNav";
import "./gems.css";
import { Container, Row, Col } from "react-bootstrap";
import { SiMicrosoftexcel, SiMicrosoftword, SiCanva } from "react-icons/si";
import SmallFooter from "../components/SmallFooter";

function Gems() { 
   return (
    <React.Fragment>
      <div className="bg_color">
      <TopNav/>
      <p className=" pt-5 m-3 center" id = 'secondary-title-font'>Gains in the Education of Mathematics & Science</p>
      
      <Container className="mt-3">
        <hr />
        <Row className="center">
          <Col><h1><SiMicrosoftexcel /></h1></Col>
          <Col><h1><SiMicrosoftword /></h1></Col>
          <Col><h1><SiCanva /></h1></Col>
        </Row>
        <hr />
      </Container>

      <Container>
        <Row >
          <Col className="col-10 ">   
            <p className="ms-3" id="fourth-title-font">
              Role:
               </p>
            <p className="ms-5 " id="text">
              Collaborated with the Science Education Team at the Walter Reed Army
              Institute of Research (WRAIR) to observe and methodically analyze their 2020
              virtual Gains in the Education of Mathematics and Science (GEMS)
              program.
            </p>
            </Col>
        </Row>

        

        <Row className="pt-5 max-width">
          <Col>
         
            <p id='fourth-title-font'>Data Analysis</p>


            <p className="ms-3 oblique" id="text">
              <i>
              * based on 337 post-participation surveys taken by students participating in WRAIR's GEMS
              </i>
            </p>
        
            <p className="ms-3" id="subheading">
              <b>Quantitative Research</b> </p>
            <p className="ms-5 " id="text">
              <i>Analysis of closed-ended Likert Scale questions ( n = 337)</i> </p>

            <p className="ms-5" id="text">
              &#8226; Paired t-test used to obtain p-value (graph-pad) 
            </p>
            <p className="tab4" id="text">
                - Purpose: identify if the difference in people who agreed and disagreed with questions on the Likert Scale were significant.
            </p>
            <p className="ms-3 bold" id = 'subheading'><b>Qualitative Research</b></p>
            <p className="ms-5" id = 'text'> <i>Analysis of open-ended questions (n = 219)</i></p>
            <p className="ms-5" id = 'text'> <i>(1) in vivo</i> coding approach  </p>
            <p className="ms-5" id = 'text'>
              (2) data narrowed down using axial and thematic hierarchical  coding{" "}
            </p>
            {/* "Coding -- where you label and organize your qualitative data with codes" */}
            {/* Axial Coding -- you begin to draw connections between codes (grouping and ) */}
            <p className="ms-5" id = 'text'>
              (3) Two primary codes and nine secondary codes established that
              encompassed data
            </p>
            <hr />
            </Col>
        </Row>
      
      </Container>
      
      <Container>
          <Row className="pt-5">
            <Col> 
              <p className = "bold medletter" id = 'fourth-title-font'>
                <b> Publication </b>  
              </p>
              <p className="ms-3" id = 'text'> 
                  Presented data analysis and research findings to WRAIR's Science Education Team
              </p>
              <p className="ms-5" id = 'text'>
              · Findings used to create and publish "Conversion of Summer STEM Program from In-Person to Virtual Learning Offers Unexpected Positives and Pitfalls" in Journal of STEM Outreach (Morris and Brown 2020).
              </p>
            </Col>         
          </Row>
    
          
          <Row className="justify-content-end">
            <Col className="align-self-end">
              <a
                
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
            <p className = "center" id = 'heading'>
              <b>Award</b>
            </p>
          </Row>
          <Row className="pb-5 ps-5 pe-5">
                <div id = 'subheading'>
                  <b> Kalamazoo College</b>
                </div>
                <div className="ms-2" id = 'text'>
                    The Diebold Scholar Award
                </div>
                <div className=" ms-5" id = 'text'>
                In recognition of excellence in the oral presentation of my findings at the Diebold Symposium at Kalamazoo College
                </div>
  
          </Row>
      </Container>
      <SmallFooter/>
      </div>
    </React.Fragment>
  );
}

export default Gems;

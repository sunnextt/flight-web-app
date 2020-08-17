import React from "react";
import {
  Jumbotron as Jumbo,
  Col,
  Row,
  Container,
  // Button,
} from "react-bootstrap";

export const About = () => (
         <Jumbo fluid className="jumbo">
           <Container>
             <div className="jumbo_div">
               <Row>
                 <Col className="jumbo_div1">
                   <h1>
                     Free, Real-time Flight Status and Global Aviation Data API
                   </h1>
                 </Col>
               </Row>
             </div>
           </Container>
         </Jumbo>
       );

import React from 'react';
import {
    Col,
    Row,
   Button, 
   Container
} from "react-bootstrap"
import Details from "./components/Details"
import RapidApi from "./RapidApi"
import Features from "./components/Features"
import FooterSec from './components/FooterSec';

 function Home() {
   return (
     <div>
       <div className="header-div">
         <Container>
           <Row>
             <Col sm={6}>
               <div className="header-col">
                 <h1>
                   Free, Real-time Flight Status and Global Aviation Data API
                 </h1>
                 <h3>
                   light tracker & airport timetable data web service trusted by
                   5.000+ of the smartest companies
                 </h3>
                 <p>250+ countries and 13.000+ airlines</p>
                 <p>The lord is your shepherd</p>
                 <div className="mb">
                   <Button variant="secondary">Find Route</Button>
                 </div>
               </div>
             </Col>
           </Row>
         </Container>
       </div>

       <Details />
       <RapidApi />
       <Features />
       <FooterSec />
     </div>
   );
 }
 export default Home
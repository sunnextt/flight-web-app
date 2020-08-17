import React from 'react';
import {
    Jumbotron as Jumbo,
    Col,
    Row,
    Container, Button 
} from "react-bootstrap"


export const Home = () =>(
            <Jumbo fluid className="jumbo">
            <Container>
                <Row>
                    <Col>
                      <h1>Free, Real-time Flight Status & Global Aviation Data API</h1>
                      <h3>light tracker & airport timetable data web service trusted by 5.000+ of the smartest companies</h3>
                      <p>250+ countries and 13.000+ airlines</p>
                      <p>The lord is your shepherd</p>
                      <div className="mb">
                          <Button variant="secondary">Find Route</Button>
                      </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Jumbo>
)

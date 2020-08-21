import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Features() {
    return (
      <section className="section-features">
        <Container>
          <div className="features-header">
            <Row>
              <Col className="featcol">
                <h3>Features at a glance</h3>
                <h5>
                  Whether it's building booking platforms, visualizing and
                  monitoring global flights or creating popular flight tracking
                  applications — our flight data API is used by thousands every
                  day.
                </h5>
              </Col>
            </Row>
          </div>

          <div>
            <Container className="sub_feat">
              <Row>
                <Col className="sub_features">
                  <h4>Features</h4>
                </Col>
              </Row>
            </Container>
            <Container className="sub-min-feat">
              <Row>
                <Col className="sub-min-feature">
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                </Col>
                <Col className="sub-min-feature">
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                </Col>
                <Col className="sub-min-feature">
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                  <h6>Live Flight Tracking</h6>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container className="aviate-data">
              <Row>
                <Col>
                  <h4>Aviation Data</h4>
                </Col>
              </Row>
            </Container>
            <Container className="aviate-div">
              <Row>
                <Col>
                  <h3>10.000+</h3>
                  <p>Airports</p>
                </Col>
                <Col>
                  <h3>19.000+</h3>
                  <p>Airplanes</p>
                </Col>
                <Col>
                  <h3>300+</h3>
                  <p>Airplane Types</p>
                </Col>
                <Col>
                  <h3>13.000+</h3>
                  <p>Airlines</p>
                </Col>
                <Col>
                  <h3>9.000+</h3>
                  <p>250+</p>
                </Col>
                <Col>
                  <h3>250+</h3>
                  <p>Countries</p>
                </Col>
                <Col>
                  <h3>500+</h3>
                  <p>Aviation Taxes</p>
                </Col>
              </Row>
            </Container>
            <Container className="start-tracking">
              <Row>
                <h5>
                  Trusted by more than than 5,000 companies worldwide — get free
                  access today
                </h5>
                <Button variant="dark">START TRACKING FLIGHTS</Button>
              </Row>
            </Container>
          </div>
        </Container>
      </section>
    );
}





export default Features
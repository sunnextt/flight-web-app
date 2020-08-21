import React from "react";
import { Row, Col, Container } from "react-bootstrap";


function Details() {
  return (
    <section className="section_details" id="details">
      <Container fluid> 
        <div className="con_detail">
          <Row>
            <Col lg={3} md={6}>
              <div className="detail_col">
                <h3>Extensive Flight Data</h3>
                <p>
                  Tap into an extensive set of aviation data, including real -
                  time flight status, historical flights, schedules, airline
                  routes, airports, aircrafts, and more.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="detail_col">
                <h3>Worldwide Coverage</h3>
                <p>
                  Powered by a strong backbone of aviation data sources, our API
                  delivers accurate details about any global flight at any
                  stage, even down to the minute
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="detail_col">
                <h3>Powerful Infrastructure</h3>
                <p>
                  Our API is built on top of scalable cloud infrastructure,
                  capable of handling any volume— from thousands of requests per
                  month to millions per minute.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="detail_col">
                <h3> Easy, Fast and Reliable</h3>
                <p>
                  for the Free Plan jdjdjjdolPOFFFFNF requests per month, or
                  choose a premium data subscription starting at just $49 .99
                  monthly, cancel anytime.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Details
import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Titles = () => (
  <Container>
    <div className="title_div">
      <Row>
        <Col>
            <h2 className="title-container">Flight Finder</h2>
            <h4 className="title-container">
              Check out your flight Details here...
            </h4>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Titles;

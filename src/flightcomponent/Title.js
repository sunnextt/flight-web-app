import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Titles = () => (
  <Container>
    <div className="title_div">
      <Row>
        <Col>
            <h1 className="title-container">Flight Finder</h1>
            <h3 className="title-container">
              Check out your flight Details here...
            </h3>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Titles;

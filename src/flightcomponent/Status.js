import React from "react";

import { Col, Row, Container} from  "react-bootstrap"

class Status extends React.Component {
  render() {
    return (
      <Container>
        <div className="status_div">
          <div className="status_head">
            <Row>
              <Col>
                <h5>AIRLINE</h5>
                <p>{this.props.airline}</p>
              </Col>
              <Col>
                <h5>AIRCRAFT-MODEL</h5>
                <p>{this.props.model}</p>
              </Col>
              <Col>
                <h5>FLIGHT-STATUS</h5>
                <p>{this.props.status}</p>
              </Col>
            </Row>
          </div>
          <div className="status_body">
            <Row>
              <Col className="departure">
                <div className="departure_div">
                  <h6>Departure Country-Code</h6>
                  <p>{this.props.departureCountryCode}</p>
                </div>
                <div className="departure_div">
                  <h6>iata: {this.props.departureIata}</h6>
                  <h6>icao: {this.props.departureIcao}</h6>
                </div>
                <div className="departure_div">
                  <h6>Departure Scheduled-Time-Local</h6>
                  <p>{this.props.departureScheduledTimeLocal}</p>
                </div>
                <div className="departure_div">
                  <h6>Airport Municipality-Name</h6>
                  <p>{this.props.airportMunicipalityName}</p>
                </div>
              </Col>
              <Col className="departure">
                <div className="departure_div">
                  <h6>Arrival CountryCode</h6>
                  <p>{this.props.airportCountryCode}</p>
                </div>
                <div className="departure_div">
                  <h6>iata: {this.props.arrivalIata}</h6>
                  <h6>icao: {this.props.arrivalIcao}</h6>
                </div>
                <div className="departure_div">
                  {" "}
                  <h6>Arrival Scheduled-Time-Local</h6>
                  <p>{this.props.arrivalScheduledTimeLocal}</p>
                </div>
                <div className="departure_div">
                  <h6>Arrival Municipality Name</h6>
                  <p>{this.props.arrivalaMunicipalityName}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Status;

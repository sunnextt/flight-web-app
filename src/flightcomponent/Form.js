import React from "react";
import { Col,  Container, Form, } from "react-bootstrap";


class Forming extends React.Component {
  render() {
    return (
      <Container>
       <div className="form_div">
         <Form onSubmit={this.props.getFlight} className="align-items-center">
          <Form.Row >
            <Col>
              <input className="form_input"
                type="text"
                name="airline"
                placeholder="Airline (e.g. United Airlines)"
              />
              <input className="form_input"
                type="text"
                name="flight_number"
                placeholder="Flight Number (e.g. UA2402)"
              />
              <input className="form_input"
                type="text"
                name="date"
                placeholder="Date (e.g. 2020-08-16)"
              />
              <button className="mybutton">Search Flight</button>
            </Col>
          </Form.Row>
        </Form>
        </div>
      </Container>
    );
  }
}

export default Forming;

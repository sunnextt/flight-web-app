import React from 'react';
import { Col, Row,  Container } from 'react-bootstrap';
import logo from  "../assets/logo-dark.png"


function FooterSec() {
    return (
      <section className="footer-section">
        <Container>
          <div className="footer_thing">
            <Row>
              <Col className="footer_nav">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#status">Flight-Status</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                  <li>
                    <a href="#doc">Documentation</a>
                  </li>
                </ul>
              </Col>
              <Col className="footer_con">
                <ul>
                  <li>
                    <a href="tweeter.com">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="github.com">
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="wwww.facebook.com">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="www.linkedin.com">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="https://euidem.com/learn/home">
                      <img src={logo} alt="euidem" height="20" width="20" />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <span classname="footer_span">
                    © 2020 aviationstack, skillUpAfrica product. All rights
                    reserved.
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </section>
    );
}

export default FooterSec
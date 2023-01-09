import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "./About/AboutCard";
import laptopImg from "../Assets/about.png";
// import  Payment from "./Payment/Payment"

const Contact = () => {
  return (
    <Container className="contact-section" id="contact">
      <Row style={{ justifyContent: "center" }}>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "2px",  }}>
            Connect with ME
          </h1>
          <AboutCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../Assets/Niraj.jpg";
          
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={photo} className="img-fluid myphoto" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT  ME
            </h1>
            <p className="home-about-body">
              Aspiring 
              <i>
                <b className="purple">Full Stack WEB Developer </b>
              </i>
              Capable of writing production ready code using React.JS, Redux and HTML for Front End,
               NodeJS and Express.js on the Back End.Possess a strong creative and analytical skills.
              Team player with an eye for detail.
             </p>
          </Col>
        </Row>
       
        <Row >
          <Col md={12} className="home-about-social">
            <p>
              <span className="purple">Connect </span>with me
            </p>
            <p className="contact-font">
              Mobile : <span className="purple">+91 9852163062 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/niraj-kumar-b66841206/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/nirajraj98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:nirajraj00.nk@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

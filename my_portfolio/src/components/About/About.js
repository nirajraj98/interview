import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import GitStat from "./GitStat"
// import Toolstack from "./Toolstack";

function About() {

  return (
    <Container id="about" fluid className="about-section">
      <Particle />
      <Container>

        <Row
          style={{ justifyContent: "center", margin: "-50px" }}
          id="skills"
        ></Row>
        <h1 className="project-heading skills-section">
          Skills <strong className="purple"></strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
        </h1>
         {/* <Toolstack /> */}

        <Github />

        <GitStat/>
      </Container>
    </Container>
  );
}

export default About;

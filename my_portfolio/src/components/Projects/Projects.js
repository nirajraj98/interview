import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expedia from "../../Assets/Projects/expedia.PNG";
import shine from "../../Assets/Projects/shine.PNG";
import bluefly from "../../Assets/Projects/bluefly.PNG";
import shop1 from "../../Assets/Projects/shop1.PNG";
import shepora from "../../Assets/Projects/shepora.PNG";


function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
           Recent Works 
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expedia}
              isBlog={false}
              title="Expedia.com Clone"
              description="Full stack web application clone of a Travelling and Hotel Booking Website."
              stacks="Tech Stack : React,  Javascript, Chakra-UI"
              ghLink="https://github.com/nirajraj98/Expedia"
              demoLink="https://project-1-six-khaki.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluefly}
              isBlog={false}
              title="bluefly.com Clone"
              description="A cloned web application of bluefly.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets."
              stacks="Tech Stack :  HTML5, Javascript, CSS3"
              ghLink="https://github.com/nirajraj98/Bluefly_project"
              demoLink="https://thunderous-sawine-55d692.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shine}
              isBlog={false}
              title="shine.com Clone"
              description="Asos is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with cart updation feature"
              stacks="Tech Stack : HTML5, Javascript, CSS3"
              ghLink="https://github.com/rituraj6/-slim-pen-3767/tree/fp03_205_Day-2"
              demoLink="https://thunderous-sawine-55d692.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shepora}
              isBlog={false}
              title="Shepora App"
              description="A cloned web application of shepora.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances and electronic gadgets."
              stacks="Tech Stack : HTML5, Javascript, CSS3"
              ghLink="https://github.com/Yashhh08/SEPHORA-Clone"
              demoLink="https://thunderous-sawine-55d692.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop1}
              isBlog={false}
              title="shop.com Clone"
              description="A cloned web application of shop.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/tamilarasanr27/MasaiGroupProject"
              demoLink="https://starlit-cocada-deb0f7.netlify.app/"              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

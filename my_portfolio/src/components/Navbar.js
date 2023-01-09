import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import pdff from "../Assets/Niraj_Kumar_ Resume.pdf"
import { useNavigate,Link } from "react-router-dom";


import { CgFileDocument } from "react-icons/cg";
import { BsFilePdfFill } from "react-icons/bs";

// let pdf="https://drive.google.com/file/d/1YmXFj-FBfejdyMFNhGhfYz_I6wY8d_Uj/view?usp=sharing"
function NavBar() {
  const navigate = useNavigate();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const col={
   "color":"White"
  }
   
  const update=()=>{
    setTimeout(function(){
      //code goes here
      window.open(pdff,'_blank').focus();
   }, 2000);
    // window.location.href=pdff
    
  }


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="purple namelogo">Niraj <span style={col}> Kumar</span> </strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                  Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#skills"
                onClick={() => updateExpanded(false)}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#project"
                onClick={() => updateExpanded(false)}
              >
                {" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href={pdff}
                download={true}
                target="_blank"
                onClick={() => update()}
                
              >Resume
               
              </Nav.Link>
            

            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={() => updateExpanded(false)}
              >
                {" "}
                Contact
              </Nav.Link>
            </Nav.Item>


          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

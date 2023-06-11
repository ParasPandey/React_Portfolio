import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../CssFiles/About.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// import Profile from "../images/Profile/my.png";
import Profile from "../images/Profile/my_pic.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-2 mr-2 ">
              <Image
                className="profile justify-content-end"
                alt="profile"
                src={Profile}
                thumbnail
                fluid
              />
            </Row>
          </Col>
          <Col xs={12} md={6} className="my-details">
            <Row className=" align-items-start p-2 rounded details-row">
              <p>
                Hi there! I am <strong>&nbsp;Paras Pandey</strong>
              </p>
              <p>
                A passionate programmer, born and brought up in India. I am an
                ordinary man working as an Associate Engineer at <strong>Nagarro.</strong>
              </p>
              <p>
                In 2022, I completed my Engineering with specialization in
                'Computer Science'.
              </p>
              <p>
                While working, my goal is always driven towards providing
                amazing experience with the best level of quality and service to
                them.
              </p>
              <p>
                I love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
              </p>
            </Row>
            <Row className=" d-flex justify-content-center flex-wrap p-2 details-row">
              <div className="talk">
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's Talk
                  </Button>
                </a>
              </div>
              <div className="resume">
                <a
                  href="https://drive.google.com/file/d/1AlvvDsFIo7IWUNnZFdgDOYFszDeprBey/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="m-2" variant="outline-success">
                    My Resume
                  </Button>
                </a>
              </div>
              <div className="github">
                <a
                  href="https://github.com/ParasPandey"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="m-2" variant="outline-dark">
                    Github
                  </Button>
                </a>
              </div>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/paras-pandey-b938b3183/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="m-2" variant="outline-info">
                    Linkedin
                  </Button>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

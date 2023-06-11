import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./../CssFiles/ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap align-content-center contact_container">
            <div className="m-2">
              <a
                href="mailto:pparas923@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="pparas923@gmail.com">
                  <EmailIcon />
                  Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/paras-pandey-b938b3183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info">
                  <LinkedInIcon />
                  LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/ParasPandey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark">
                  <GitHubIcon />
                  GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://instagram.com/ig_paras_31/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button id="insta-btn" variant="outline-info">
                  <InstagramIcon />
                  Instagram
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/ParasPa23438968?s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info">
                  <TwitterIcon />
                  Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.facebook.com/paraspandey3108"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary">
                  <FacebookIcon />
                  FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMe;

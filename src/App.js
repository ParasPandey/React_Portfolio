import React from "react";
import MyNavbar from "./Components/MyNavbar";
import MyCarousel from "./Components/MyCarousel";
import Titlemsg from "./Components/Titlemsg";
import About from "./Components/About";
import Experience from "./Components/Experience";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "./Components/Skills";
import ProjectTimeline from "./Components/ProjectTimeline";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <MyNavbar />
      <MyCarousel />
      <Titlemsg />
      <div className="color__div"></div>
      <div className="about_section">
        <Parallax
          blur={{ min: -10, max: 10 }}
          bgImage={require("./images/partical/about3.jpg").default}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <Container fluid className="skillSection">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container fluid className="experienceSection">
        <Fade bottom duration={500}>
          <hr />
          <Experience />
        </Fade>
      </Container>
      <Container fluid className="projectSection">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>
      <Container fluid className="contactSection">
        <Fade bottom duration={500}>
          <hr />
          <ContactMe />
        </Fade>
      </Container>
      <hr />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "../CssFiles/Experience.css";
import Tilt from "react-tilt";
import { dataBase } from "../Database/Data";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1 className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
      {/* jumbotron */}
      <div className="outerdiv jumbotron">
        {dataBase.experiences.map((experience, index) => {
          return (
            <Container key={index}>
              <Tilt options={{ max: 15, scale: 1.03 }}>
                <Card>
                  <hr />
                  <div className="img-exp">
                    <a
                      href={experience.link}
                      alt={experience.imgAltText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={experience.imgSrc}
                        alt={experience.imgAltText}
                        variant="top"
                      />
                    </a>
                  </div>
                  <hr />
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <Card.Title className="text-center">
                      {experience.title}
                    </Card.Title>

                    <div className="text-center style">
                      <strong>Technology:</strong> {experience.technologies}
                      <br />
                      <strong>Duration:</strong> {experience.duration}
                      <br />
                      <div className="description">
                        <strong> Description </strong>
                        <ul className="text-left">
                          <li>{experience.description[0]}</li>
                          <li>{experience.description[1]}</li>
                          {experience.certificates && (
                            <li>
                              <a
                                href={experience.certificates}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Certificates:
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Tilt>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./../CssFiles/Project.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
import Button from "react-bootstrap/Button";

const Projects = ({ data }) => {
  return (
    <div className="project">
      <Card className=" mt-2 mb-2">
        <Card.Body>
          <Card.Title className="text-center project_title">
            {data.project_name}
          </Card.Title>
          <div className="project_details">
            <Image
              src={data.imgSrc}
              alt={data.imgAltText}
              rounded
              className="focus project_image"
            ></Image>
            <div className="about_project">
              <div className="project_content">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="accordian"
                  >
                    PROJECT DETAILS
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <Typography> */}
                      <div className="main_content show">
                        <div className="description">
                          <p>
                            <strong>Description: </strong> {data.description}
                          </p>
                        </div>
                        <hr />
                        <div className="features">
                          <strong>Features:</strong>
                          <ul>
                            {data.features.map((feature, index) => {
                              return <li key={index}>{feature.feature}</li>;
                            })}
                          </ul>
                        </div>
                        <hr />
                        <div className="tech_used">
                          <strong>Tech Used:</strong>
                          <ul className="p-2">
                            {data.technologies.map((tech, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    className="text-dark text-decoration-none"
                                    href="/"
                                  >
                                    <Image
                                      src={tech.imgSrc}
                                      alt={tech.imgAltText}
                                      rounded
                                      className="image-style m-1"
                                    ></Image>
                                    {tech.name}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    {/* </Typography> */}
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="project_btns">
                <a href={data?.live} rel="noopener noreferrer" target="_blank">
                  <Button
                    className={`m-2 ${!data.live && "disable"}`}
                    variant="info"
                  >
                    SEE LIVE
                  </Button>
                </a>
                <a
                  href={data?.source_code}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    className={`m-2 ${!data.source_code && "disable"}`}
                    variant="info"
                  >
                    SOURCE CODE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;

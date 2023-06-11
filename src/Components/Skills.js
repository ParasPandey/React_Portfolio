import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import ReactCard from "./ReactCard";
import { dataBase } from "../Database/Data";
import "../CssFiles/Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="pt-3 text-center font-details pb-3">TECH SKILLS</h1>
      {/* card-deck */}
      <div>
        <Row className="d-flex justify-content-around">
          <Col md={4} xs={12}>
            <ReactCard data={dataBase.frontend} title="Frontend" />
          </Col>
          <Col md={4} xs={12}>
            <Row className="d-flex justify-content-around">
              <ReactCard data={dataBase.backend} title="Backend" />
            </Row>
            <Row className="d-flex justify-content-around">
              <ReactCard data={dataBase.hosting} title="Hosting Plateform" />
            </Row>
          </Col>
          <Col md={4} xs={12}>
            <Row className="d-flex justify-content-around">
              <ReactCard
                data={dataBase.languages}
                title="Programming languages"
              />
            </Row>
            <Row className="d-flex justify-content-around">
              <ReactCard data={dataBase?.databases} title="Database" />
            </Row>
            <Row className="d-flex justify-content-around">
              <ReactCard
                data={dataBase.version_conrol}
                title="Version Control"
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Skills;

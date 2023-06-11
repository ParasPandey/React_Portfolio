import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const ReactCard = ({ data, title }) => {
  return (
    <Card className="focus mt-2 mb-2">
      <Card.Body>
        <Card.Title className="text-center  card-title">{title}</Card.Title>
        <hr />
        <Card.Text className="card-text d-flex justify-content-start flex-column">
          {data?.map((skill, index) => {
            return (
              <span key={index} className="p-2">
                <a
                  className="text-dark text-decoration-none"
                  href={skill.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src={skill.imgSrc}
                    alt={skill.imgAltText}
                    rounded
                    className="image-style m-1"
                  ></Image>
                  {skill.skillName}
                </a>
              </span>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactCard;

import Carousel from "react-bootstrap/Carousel";
import React from "react";
import img1 from "../images/courasel/img1.jpg";
import img2 from "../images/courasel/img2.jpg";
import img3 from "../images/courasel/img3.jpg";
import "../CssFiles/MyCarousel.css";
const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} interval={2500} slide={false} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={img2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};

export default MyCarousal;

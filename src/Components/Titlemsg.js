import React from "react";
import Typewriter from "typewriter-effect";
import "../CssFiles/Titlemsg.css";

const Titlemsg = () => {
  return (
    <div className="titlemsg">
      <div className="heading">
        <h1 className="name"> Hi, I am</h1>
        <h1 className="name2"> Paras Pandey</h1>
      </div>
      <Typewriter
        className="looptext"
        options={{
          strings: ["Web Developer", "Programmer"],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </div>
  );
};

export default Titlemsg;

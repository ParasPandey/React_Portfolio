import React from "react";
import "./../CssFiles/Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div>
        © Paras Pandey <span>{date.getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;

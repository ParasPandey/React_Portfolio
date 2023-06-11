import React from "react";
import logo from "../images/avatar/myAvatar.png";
import logo1 from "../images/avatar/avatar2.png";
import me from "../images/avatar/P.png";
import "../CssFiles/MyNavbar.css";

const MyNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark animate-navbar"
      id="navbar"
    >
      <img className="avatar" src={logo1} alt="logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navlinks" id="navbarsExample04">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;

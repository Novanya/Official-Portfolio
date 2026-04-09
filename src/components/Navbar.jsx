import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#home">
      <div className="nav-logo">Novanya Mendis</div></a>
      <div className="nav-items">
        <a href="#home">
          <button className="nav-btn">Home</button>
        </a>
        <a href="#experience">
          <button className="nav-btn">Experience</button>
        </a>
        <a href="#education">
          <button className="nav-btn">Education</button>
        </a>
        <a href="#projects">
          <button className="nav-btn">Projects</button>
        </a>
        <a href="#skills">
          <button className="nav-btn">Skills</button>
        </a>

        <a href="#contact">
          <button className="nav-cta">Contact</button>
        </a>
      </div>
    </nav>
  );
}

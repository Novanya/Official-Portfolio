import React from "react";
import TypeWriter from "./TypeWriter";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-mesh" />
      <div className="hero-rings">
        <div className="hero-ring" />
        <div className="hero-ring" />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" /> Hi, I am
        </div>
        <h1 className="hero-headline">
          Novanya <em>Mendis</em>
        </h1>
        <div className="hero-sub">
          <TypeWriter
            texts={["Full-Stack Developer", "AI & Data Science Enthusiast"]}
          />
        </div>
        <p className="hero-bio">
          I design and build modern web applications with React, Node.js, and
          Python, focusing on clean UI and scalable architecture.
        </p>
        <div className="hero-actions">
          <a href="#projects">
            <button className="btn-glow">View Projects</button>
          </a>
          <a href="#contact">
            <button className="btn-outline">Contact Me</button>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        Scroll
        <div className="scroll-line" />
      </div>
    </section>
  );
}

import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
     
      {
      name: "Cyber Shield",
      desc: "Built full CRUD system with authentication using Next.js, React, Python, MongoDB, Express.js, and Bcrypt.",
      tags: ["Next.js", "React", "Python", "MongoDB", "Express.js", "Bcrypt"],
      link: "https://cyber-security-site-jhzkhuuz2-novanyas-projects.vercel.app/",
      },
      {
      name: "Positivus Landing Page",
      desc: "Built a landing page using WordPress and Hosted using Infinityfree hosting platfoam.",
      tags: ["WordPress", "LocalWP", "InfinityFree", "CMS"],
      link: "https://wordpress-landing-page.free.nf/",
    },               
    {
      name: "Salon Kech",
      desc: "Built frontend of a salon called salon kech using HTML,CSS and JavaScript.",
     tags: ["HTML", "CSS", "JavaScript"],
      link: "https://novanya.github.io/Salon-kech/",
    },
    {
      name: "Ava Chen's Portfolio",
      desc: "Developed an interactive portfolio site using HTML, CSS and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://novanya.github.io/Ava-Chen-Portfolio/",
    },
    {
      name: "Real Estate Selling Site",
      desc: "Responsive real estate platform built with React, Vite.",
      tags: ["React", "Vite", "JavaScript", "HTML", "CSS"],
      link: "https://real-estate-phi-dun.vercel.app/",
    },
  ];

  return (
    <section className="projects-bg wrap" id="projects">
      <div className="s-label">Work</div>
      <h2 className="s-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card"
          >
            <div className="proj-cover">{proj.name[0]}</div>

            <div className="proj-overlay">
              <span className="proj-btn">View Project</span>
            </div>

            <div className="proj-body">
              <div className="proj-tags">
                {proj.tags.map((tag, i) => (
                  <span className="proj-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="proj-name">{proj.name}</div>
              <div className="proj-desc">{proj.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

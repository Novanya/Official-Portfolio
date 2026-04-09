import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
   {
      name: "Cyber Shield",
      desc: "Built full CRUD system with authentication using Next.js, React, Python, MongoDB, Express.js, and Bcrypt.",
      tags: ["Next.js", "React", "Python", "MongoDB", "Express.js", "Bcrypt"],
      // link: "https://novanya.github.io/Cyber-Security-Site/",
     link:"https://vercel.com/novanyas-projects/cyber-security-site/ACmMjHPeHZhTqcteSYQCTUPycrdv",
    },
     {
      name: "Real Estate Selling Site",
      desc: "Developed a responsive real estate platform allowing users to view and search properties with React, Vite, and JavaScript.",
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
          <div
            className="proj-card"
            key={idx}
            onClick={() => window.open(proj.link, "_blank")}
          >
            <div className="proj-cover">{proj.name[0]}</div>
            <div className="proj-overlay">
              <button className="proj-btn">View Project</button>
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
          </div>
        ))}
      </div>
    </section>
  );
}

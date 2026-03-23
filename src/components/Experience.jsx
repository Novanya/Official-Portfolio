import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      period: "Nov 2026 - Present",
      role: "Web Development Intern",
      org: "INXCODE",
      desc: "Completed a hands-on internship focusing on modern web development using React.js, Node.js, Express.js, and WordPress. Built multiple small projects showcasing front-end and backend integration.",
      badges: [
        "React.js",
        "Wordpress",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vite",
      ],
    },
  ];

  return (
    <section className="timeline-bg wrap" id="experience">
      <div className="s-label">Experience</div>
      <h2 className="s-title">Professional Journey</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="t-item" key={idx}>
            <div className="t-dot" />
            <div className="t-period">{exp.period}</div>
            <div className="t-role">{exp.role}</div>
            <div className="t-org">{exp.org}</div>
            <div className="t-desc">{exp.desc}</div>
            <div className="t-badges">
              {exp.badges.map((badge, i) => (
                <span className="t-badge" key={i}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", pct: 95 },
        { name: "CSS", pct: 95 },
        { name: "JavaScript", pct: 90 },
        { name: "React", pct: 85 },
        { name: "Next.js", pct: 80 },
        { name: "Vite", pct: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", pct: 90 },
        { name: "Java", pct: 80 },
        { name: "Flask", pct: 80 },
        { name: "Express.js", pct: 75 },
        { name: "Node.js", pct: 75 },
        { name: "MongoDB", pct: 70 },
      ],
    },
    {
      category: "Other Tech",
      skills: [
        { name: "Git & GitHub", pct: 80 },
        { name: "SQL", pct: 70 },
        { name: "WordPress", pct: 75 },
      ],
    },
  ];

  const techChips = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Vite",
    "Flask",
    "Express.js",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "SQL",
    "WordPress",
    "GCP",
  ];

  return (
    <section className="skills-bg wrap" id="skills">
      <div className="s-label">Skills</div>
      <h2 className="s-title">Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div
              className="skill-card-top"
              style={{
                background: "linear-gradient(135deg,var(--purple),var(--pink))",
              }}
            ></div>
            <div className="skill-cat">{cat.category}</div>
            {cat.skills.map((skill, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-meta">
                  <span>{skill.name}</span>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.pct}%`,
                      background:
                        "linear-gradient(135deg,var(--purple2),var(--pink))",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="tech-cloud">
        {techChips.map((tech, idx) => (
          <span className="tech-chip" key={idx}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

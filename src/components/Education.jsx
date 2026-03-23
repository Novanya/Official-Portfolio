import React from "react";
import "./Education.css";

export default function Education() {
  const education = [
    {
      period: "2024 - 2025",
      degree: "Bachelor of AI & Data Science",
      institution: "Robert Gordon University, Aberdeen, UK",
      desc: "Currently pursuing the Bachelor's degree in AI and Data Science, covering programming, machine learning basics, and web development projects.",
      badges: [
        "R",
        "Python",
        "Java",
        "Data Science",
        "Data Structures & Algorithms",
        "Web Technology",
        "Data Base(SQL & NoSQL)",
      ],
    },
    {
      period: "2024 - 2025",
      degree: "Foundation in Computing",
      institution: "University of Westminster",
      desc: "Completed foundational computing courses including programming logic, data structures, and basic web development.",
      badges: ["Python", "Data Base(SQL)", "Maths for Computing", "SDLC"],
    },
  ];

  return (
    <section className="timeline-bg wrap" id="education">
      <div className="s-label">Education</div>
      <h2 className="s-title">Academic Background</h2>
      <div className="timeline">
        {education.map((edu, idx) => (
          <div className="t-item" key={idx}>
            <div className="t-dot" />
            <div className="t-period">{edu.period}</div>
            <div className="t-role">{edu.degree}</div>
            <div className="t-org">{edu.institution}</div>
            <div className="t-desc">{edu.desc}</div>
            <div className="t-badges">
              {edu.badges.map((badge, i) => (
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

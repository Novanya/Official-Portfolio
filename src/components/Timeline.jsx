import "./Timeline.css";

export default function Timeline() {
  return (
    <section className="timeline" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline-list">
        <div className="timeline-item">
          <h3>WordPress, Express.js, Node.js, React.js Internship</h3>
          <span>2025</span>
          <p>
            Worked on multiple projects including front-end development with
            React.js and backend APIs using Node.js and Express.js.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Self-Learning Full-Stack Projects</h3>
          <span>2024-2025</span>
          <p>
            Developed personal projects including Student Management System and
            To-Do App to strengthen full-stack skills.
          </p>
        </div>
      </div>
    </section>
  );
}

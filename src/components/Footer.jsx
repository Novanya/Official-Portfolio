import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 <span>Novanya Mendis</span>. All rights reserved.
      </p>
      <p>Built with React, Node.js, Flask, and modern web technologies.</p>
      <p>
        Connect with me on{" "}
        <a
          href="https://github.com/Novanya"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/novanya-mendis-aa589231a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

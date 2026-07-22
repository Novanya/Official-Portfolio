import { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xreowkal", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", msg: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="wrap">
      <div className="s-label">CONTACT</div>
      <h2 className="s-title">Get in Touch</h2>
      <div className="contact-grid">
        <div>
          <div className="c-card">
            <div className="c-icon">📧</div>
            <div>
              <div className="c-lbl">Email</div>
              <div className="c-val">novamendis@gmail.com</div>
            </div>
          </div>
          <div className="c-card">
            <div className="c-icon">📍</div>
            <div>
              <div className="c-lbl">Location</div>
              <div className="c-val">Wellawatte, Sri Lanka</div>
            </div>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit} action="https://formspree.io/f/xreowkal" method="post">
          <div className="f-row">
            <div className="f-group">
              <label className="f-label">Name</label>
              <input
                type="text"
                name="name"
                className="f-input"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="f-group">
              <label className="f-label">Email</label>
              <input
                type="email"
                name="email"
                className="f-input"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="f-group">
            <label className="f-label">Subject</label>
            <input
              type="text"
              name="subject"
              className="f-input"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </div>
          <div className="f-group">
            <label className="f-label">Message</label>
            <textarea
              name="msg"
              className="f-ta"
              value={form.msg}
              onChange={handleChange}
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="btn-glow" disabled={status === "sending"}>
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent!"
              : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="f-status f-status-success">
              Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="f-status f-status-error">
              Something went wrong. Please try again, or email me directly at{" "}
              <a href="mailto:novamendis@gmail.com">novamendis@gmail.com</a>.
            </p>
          )}

          <div className="social-row">
            <div className="social-row">
              <a
                href="https://www.linkedin.com/in/novanya-mendis-aa589231a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Novanya"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/novanya/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

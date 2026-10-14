import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "Sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong.");

      setStatus({ type: "success", text: "Message sent. Thank you!" });
      setForm(EMPTY);
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    }
  };

  return (
    <section id="contact">
      <div className="section-title">
        <p className="label">CONTACT</p>

        <h2>
          Let's build something <span>useful.</span>
        </h2>

        <p>Have an opportunity, project or idea? Let's connect.</p>
      </div>

      <div className="contact-grid">
        <div className="card contact-card">
          <div className="icon">
            <IoPaperPlaneOutline />
          </div>

          <h3>Start a conversation</h3>

          <p>
            I'm interested in graduate roles, software engineering
            opportunities and AI/ML projects.
          </p>

          <a href="mailto:pmithushh@gmail.com">pmithushh@gmail.com</a>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn primary"
            type="submit"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Sending..." : "Send Message"}
            <IoPaperPlaneOutline />
          </button>

          {status.text && status.type !== "loading" && (
            <p className={`form-status ${status.type}`}>{status.text}</p>
          )}
        </form>
      </div>
    </section>
  );
}

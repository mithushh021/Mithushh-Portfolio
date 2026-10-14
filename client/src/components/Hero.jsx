import { IoArrowForwardOutline } from "react-icons/io5";

const stats = [
  { value: "4+", label: "Technical Areas" },
  { value: "6 months", label: "Internships" },
  { value: "10+", label: "Projects" },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="degree">
          <span></span>
          BSc (Hons) in Information Technology
        </div>

        <p className="label">HELLO, I'M MITHUSHH</p>

        <h2>
          Building <span>software</span>
          <br />
          with <span>intelligence.</span>
        </h2>

        <p className="hero-text">
          IT graduate with practical experience in full-stack development,
          quality engineering, machine learning and AI-powered applications. I
          enjoy transforming real-world problems into useful digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            Explore Projects
            <IoArrowForwardOutline />
          </a>

          <a href="#contact" className="btn secondary">
            Get In Touch
          </a>
        </div>

        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="avatar-container1">
          <img
            src="/assets/images/profile-Pic.jpeg"
            alt="Mithushh Pushparagavan"
          />
          <span className="online"></span>
        </div>
      </div>
    </section>
  );
}

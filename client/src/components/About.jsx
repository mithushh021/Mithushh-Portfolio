import { IoPersonOutline } from "react-icons/io5";
import { focusAreas, techStack } from "../data/about.js";

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <p className="label">ABOUT ME</p>

        <h2>
          More than just <span>code.</span>
        </h2>

        <p>
          My background combines software engineering, quality engineering,
          AI/ML and practical problem solving.
        </p>
      </div>

      <div className="about-grid">
        <article className="card about-main">
          <div className="icon">
            <IoPersonOutline />
          </div>

          <h3>Who I Am</h3>

          <p>
            I completed the academic requirements for a BSc (Hons) in
            Information Technology at SLIIT and am currently awaiting
            graduation.
          </p>

          <p>
            My main interests are software engineering, artificial
            intelligence, machine learning, cloud technologies and enterprise
            applications.
          </p>

          <p>
            I enjoy learning by building real applications and solving
            practical problems with technology.
          </p>
        </article>

        <div className="about-small">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <div className="icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="technology">
        <h3>Technology Stack</h3>

        <div className="tech-list">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

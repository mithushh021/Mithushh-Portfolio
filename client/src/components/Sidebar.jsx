import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLocationOutline,
  IoDownloadOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <p className="label">PORTFOLIO</p>

        <h1>
          Mithushh
          <br />
          <span>Pushparagavan</span>
        </h1>

        <p className="role">
          Software Engineer
          <br />
          AI / ML Enthusiast
        </p>
      </div>

      <div className="contact-info">
        <a href="mailto:pmithushh@gmail.com">
          <IoMailOutline />
          <div>
            <small>Email</small>
            <strong>pmithushh@gmail.com</strong>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/mithushh-pushparagavan/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
          <div>
            <small>LinkedIn</small>
            <strong>Connect with me</strong>
          </div>
        </a>

        <a href="https://github.com/mithushh021" target="_blank" rel="noreferrer">
          <IoLogoGithub />
          <div>
            <small>GitHub</small>
            <strong>View my code</strong>
          </div>
        </a>

        <div>
          <IoLocationOutline />
          <div>
            <small>Location</small>
            <strong>Colombo, Sri Lanka</strong>
          </div>
        </div>
      </div>

      <div className="sidebar-buttons">
        <a
          href="/assets/Mithushh-Pushparagavan-CV.pdf"
          download
          className="btn primary"
        >
          <IoDownloadOutline />
          Download CV
        </a>

        <a href="#contact" className="btn secondary">
          <IoChatbubbleOutline />
          Let's Talk
        </a>
      </div>

      <div className="socials">
        <a href="https://github.com/mithushh021" target="_blank" rel="noreferrer">
          <IoLogoGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mithushh-pushparagavan/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>
    </aside>
  );
}

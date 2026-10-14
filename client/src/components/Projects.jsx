import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-title">
        <p className="label">SELECTED WORK</p>

        <h2>
          Projects that <span>solve problems.</span>
        </h2>

        <p>A selection of my software engineering and AI/ML work.</p>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article
            key={p.id}
            className={p.featured ? "project featured" : "project"}
          >
            <div className="project-image">
              <img src={p.image} alt={p.alt} />
              <span>{p.label}</span>
            </div>

            <div className="project-info">
              <small>{p.id}</small>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

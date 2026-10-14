import experience from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-title">
        <p className="label">CAREER</p>

        <h2>
          Experience & <span>education.</span>
        </h2>

        <p>My professional and academic journey.</p>
      </div>

      <div className="timeline">
        {experience.map(({ icon: Icon, period, tag, title, org, description, tags }) => (
          <article className="experience" key={title}>
            <div className="timeline-icon">
              <Icon />
            </div>

            <div className="timeline-content">
              <small>{period}</small>
              <span className="tag">{tag}</span>
              <h3>{title}</h3>
              <h4>{org}</h4>
              <p>{description}</p>

              <div className="tags">
                {tags.map((t) => (
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

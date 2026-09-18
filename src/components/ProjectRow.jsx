export default function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;
  const accentVar = `var(--accent-${project.accent})`;

  return (
    <article className={`project-row ${reversed ? "project-row--reversed" : ""}`}>
      <div className="project-row__text">
        <p className="mono-tag" style={{ color: accentVar }}>
          {project.tag}
        </p>
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__subtitle">{project.subtitle}</p>
        <p className="project-row__desc">{project.description}</p>

        {project.facts?.length > 0 && (
          <dl className="project-row__facts">
            {project.facts.map((f) => (
              <div key={f.label} className="project-row__fact">
                <dt className="mono-tag">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.formula && (
          <p className="project-row__formula mono-tag">{project.formula}</p>
        )}

        <div className="project-row__stack">
          {project.stack.map((s) => (
            <span key={s} className="chip" style={{ borderColor: accentVar }}>
              {s}
            </span>
          ))}
        </div>

        <div className="project-row__actions">
          {project.liveUrl && (
            <a className="project-row__link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Открыть проект
            </a>
          )}
          {project.repoUrl && (
            <a className="project-row__link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Открыть репозиторий
            </a>
          )}
        </div>
      </div>

      <div className="project-row__demo" style={{ "--accent": accentVar }}>
        {project.image ? (
          <a className="project-row__image-link" href={project.liveUrl || project.repoUrl || undefined}
            target={project.liveUrl || project.repoUrl ? "_blank" : undefined}
            rel={project.liveUrl || project.repoUrl ? "noopener noreferrer" : undefined}>
            <img src={project.image} alt={project.title} className="project-row__image" />
          </a>
        ) : (
          <div className="project-row__placeholder">
            <span className="mono-tag">{project.demoNote}</span>
          </div>
        )}
      </div>
    </article>
  );
}

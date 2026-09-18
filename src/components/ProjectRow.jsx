import { Link } from "react-router-dom";
import { uiText } from "../data/projects";

export default function ProjectRow({ project, index, lang }) {
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

        <div className="project-row__stack">
          {project.stack.map((s) => (
            <span key={s} className="chip" style={{ borderColor: accentVar }}>
              {s}
            </span>
          ))}
        </div>

        <div className="project-row__actions">
          <Link
            className="project-row__link"
            to={`/projects/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {uiText[lang].detailsLabel}
          </Link>
          {project.liveUrl && (
            <a
              className="project-row__link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {uiText[lang].liveLabel}
            </a>
          )}
          {project.repoUrl && (
            <a
              className="project-row__link"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {uiText[lang].repoLabel}
            </a>
          )}
        </div>
      </div>

      <div className="project-row__demo" style={{ "--accent": accentVar }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-row__image"
            loading="lazy"
            draggable="false"
          />
        ) : (
          <div className="project-row__placeholder">
            <span className="mono-tag">{project.demoNote}</span>
          </div>
        )}
      </div>
    </article>
  );
}

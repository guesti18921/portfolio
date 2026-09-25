import { useParams, Link } from "react-router-dom";
import { projectsData, uiText } from "../data/projects";
import { useLanguage } from "../context/languageContext";
import ProjectGallery from "../components/ProjectGallery";

export default function ProjectDetail() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const project = projectsData[lang].find((p) => p.id === id);

  if (!project) {
    return (
      <main className="wrap project-detail">
        <p>{uiText[lang].notFoundLabel}</p>
        <Link to="/">← {uiText[lang].backLabel}</Link>
      </main>
    );
  }

  const accentVar = `var(--accent-${project.accent})`;
  const shots = project.screenshots ?? [];
  const projectUrl = project.liveUrl;
  const repositories = project.repositories ?? (
    project.repoUrl ? [{ label: uiText[lang].repoLabel, url: project.repoUrl }] : []
  );

  return (
    <main className="wrap project-detail">
      <Link to="/" className="project-detail__back">
        ← {uiText[lang].backLabel}
      </Link>

      <p className="mono-tag" style={{ color: accentVar }}>{project.tag}</p>
      <h1 className="project-detail__title">{project.title}</h1>
      <p className="project-row__subtitle">{project.subtitle}</p>
      <p className="project-detail__desc">{project.description}</p>

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

      <ProjectGallery
        shots={shots}
        projectTitle={project.title}
        lang={lang}
        accent={accentVar}
      />

      <div className="project-detail__actions">
        {projectUrl ? (
          <a
            className="project-detail__cta"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "ru" ? "Открыть проект ↗" : "Open project ↗"}
          </a>
        ) : (
          <p className="project-detail__note">{project.demoNote}</p>
        )}

        {repositories.map((repository) => (
          <a key={repository.url} className="project-row__link" href={repository.url} target="_blank" rel="noopener noreferrer">
            {repository.label}
          </a>
        ))}
      </div>
    </main>
  );
}

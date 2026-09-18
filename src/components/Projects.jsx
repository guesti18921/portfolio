import { projectsData, uiText } from "../data/projects";
import { useLanguage } from "../context/languageContext";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const { lang } = useLanguage();
  const projects = projectsData[lang];

  return (
    <section className="wrap projects" id="projects">
      <h2 className="section-title">{uiText[lang].worksTitle}</h2>
      <hr className="rule" />
      {projects.map((p, i) => (
        <div key={p.id}>
          <ProjectRow project={p} index={i} lang={lang} />
          <hr className="rule" />
        </div>
      ))}
    </section>
  );
}

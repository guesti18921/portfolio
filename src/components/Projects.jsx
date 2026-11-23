import { projectsData, uiText } from "../data/projects";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section className="wrap projects" id="projects">
      <h2 className="section-title">{uiText.worksTitle}</h2>
      <hr className="rule" />
      {projectsData.map((p, i) => (
        <div key={p.id}>
          <ProjectRow project={p} index={i} />
          <hr className="rule" />
        </div>
      ))}
    </section>
  );
}

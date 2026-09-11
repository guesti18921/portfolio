import { projects } from "../data/projects";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section className="wrap projects" id="projects">
      <h2 className="section-title">Работы</h2>
      <hr className="rule" />
      {projects.map((p, i) => (
        <div key={p.id}>
          <ProjectRow project={p} index={i} />
          <hr className="rule" />
        </div>
      ))}
    </section>
  );
}
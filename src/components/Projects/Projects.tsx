import { useMemo, useState } from "react";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const revealRef = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lede">
            Each project spans problem, solution and architecture — not just a
            name and a screenshot.
          </p>
        </div>

        <div
          className="projects__filters"
          role="group"
          aria-label="Filter projects by platform"
        >
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={`projects__filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid reveal" ref={revealRef}>
          {filtered.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

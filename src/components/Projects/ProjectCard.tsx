import type { Project } from '../../data/projects';

const categoryGlyph: Record<Project['category'], string> = {
  iOS: 'iOS',
  'React Native': 'RN',
  'React.js': 'JS',
};

/** Tasteful abstract mockup — deliberately not a fake screenshot. */
function ProjectVisual({ category }: { category: Project['category'] }) {
  return (
    <div className={`project-card__visual project-card__visual--${category.replace(/[^a-z]/gi, '').toLowerCase()}`} aria-hidden="true">
      <svg viewBox="0 0 320 180" width="100%" height="100%" preserveAspectRatio="none">
        <rect width="320" height="180" fill="none" />
        <rect x="24" y="24" width="120" height="10" rx="2" className="pv-bar" />
        <rect x="24" y="48" width="80" height="10" rx="2" className="pv-bar pv-bar--dim" />
        <rect x="24" y="82" width="272" height="52" rx="8" className="pv-panel" />
        <rect x="24" y="146" width="60" height="18" rx="4" className="pv-chip" />
        <rect x="92" y="146" width="60" height="18" rx="4" className="pv-chip pv-chip--dim" />
      </svg>
      <span className="project-card__glyph mono">{categoryGlyph[category]}</span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual category={project.category} />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="badge">{project.category}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__problem">{project.problem}</p>

        <dl className="project-card__facts">
          <div>
            <dt>Solution</dt>
            <dd>{project.solution}</dd>
          </div>
          <div>
            <dt>Architecture</dt>
            <dd>{project.architecture}</dd>
          </div>
        </dl>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech} className="badge">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={`#project-${project.id}`} className="project-card__link">
            View Case Study →
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} className="project-card__link project-card__link--muted">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

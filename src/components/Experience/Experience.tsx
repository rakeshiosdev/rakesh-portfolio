import { experience } from "../../data/experience";
import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const revealRef = useReveal<HTMLOListElement>();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Career timeline</h2>
        </div>

        <ol className="experience__timeline reveal" ref={revealRef}>
          {experience.map((role) => (
            <li key={role.id} className="experience__entry">
              <div className="experience__marker">
                <span
                  className={`experience__dot ${role.current ? "is-current" : ""}`}
                />
                <span className="experience__line" aria-hidden="true" />
              </div>

              <div className="experience__card">
                <div className="experience__card-head">
                  <span className="experience__dates mono">{role.dates}</span>
                  {role.current && (
                    <span className="badge experience__current-badge">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="experience__role">{role.role}</h3>
                <p className="experience__company">{role.company}</p>

                <ul className="experience__responsibilities">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <ul className="experience__tech">
                  {role.technologies.map((tech) => (
                    <li key={tech} className="badge">
                      {tech}
                    </li>
                  ))}
                </ul>

                {role.training && (
                  <div className="training__container">
                    <p>Additional Training</p>
                    <ul className="training__tech">
                      {role.training.map((tech) => (
                        <li key={tech} className="badge">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

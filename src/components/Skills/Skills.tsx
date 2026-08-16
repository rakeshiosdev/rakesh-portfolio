import { skillGroups } from '../../data/skills';
import { useReveal } from '../../hooks/useReveal';
import './Skills.css';

export default function Skills() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technical toolbox</h2>
          <p className="section-lede">Grouped by where each tool actually earns its place — not one long list.</p>
        </div>

        <div className="skills__grid reveal" ref={revealRef}>
          {skillGroups.map((group) => (
            <div className="skills__card" key={group.id}>
              <div className="skills__card-head">
                <h3>{group.label}</h3>
                <span className="skills__card-hint mono">{group.hint}</span>
              </div>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={item} className="badge">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

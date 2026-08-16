import { siteConfig } from '../../data/siteConfig';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container resume__inner">
        <div>
          <p className="eyebrow">Resume</p>
          <h2 className="resume__headline">Want to know more about my experience?</h2>
        </div>
        <div className="resume__actions">
          <a href={siteConfig.links.resume} className="btn btn-primary" download>
            Download Resume
          </a>
          <a href={siteConfig.links.linkedin} className="btn btn-secondary">
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

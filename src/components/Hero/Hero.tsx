import { siteConfig } from "../../data/siteConfig";
import "./Hero.css";

const heroBadges = [
  "Swift",
  "SwiftUI",
  "React Native",
  "React",
  "TypeScript",
  "JavaScript",
];

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <p className="eyebrow">Software Engineer</p>

            <span className="eyebrow-separator" aria-hidden="true">
              •
            </span>

            <p className="eyebrow eyebrow--location">
              <span className="location-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              {siteConfig.location}
            </p>
          </div>
          <h1 className="hero__headline">
            Building scalable{" "}
            <span className="hero__headline-accent">mobile &amp; web</span>{" "}
            experiences.
          </h1>
          <p className="hero__lede">
            I&rsquo;m {siteConfig.name}, a software engineer with{" "}
            {siteConfig.yearsExperience} years of experience building modern
            iOS, React Native, and React.js applications.
          </p>

          <ul className="hero__badges" aria-label="Core technologies">
            {heroBadges.map((tech) => (
              <li key={tech} className="badge">
                {tech}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a
              href={siteConfig.links.resume}
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="hero__social">
            <a href={siteConfig.links.github} className="hero__social-link">
              GitHub
            </a>
            <span className="hero__social-sep" aria-hidden="true">
              /
            </span>
            <a href={siteConfig.links.linkedin} className="hero__social-link">
              LinkedIn
            </a>
            <span className="hero__social-sep" aria-hidden="true">
              /
            </span>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              Email
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__profile">
            <div className="hero__profile-ring">
              <img
                src="/profile.webp"
                alt={`${siteConfig.name} profile`}
                className="hero__profile-image"
              />
            </div>

            <span className="hero__profile-status">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

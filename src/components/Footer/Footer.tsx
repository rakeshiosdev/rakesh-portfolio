import { siteConfig } from "../../data/siteConfig";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono footer__brand">
          {siteConfig.name} <span className="footer__dot">·</span>{" "}
          {siteConfig.tagline}
        </p>
        <div className="footer__links">
          <a href={siteConfig.links.github}>GitHub</a>
          <a href={siteConfig.links.linkedin}>LinkedIn</a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
          >
            Email
          </a>
        </div>
        <p className="footer__copyright mono">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}

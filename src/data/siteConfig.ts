/**
 * Central place for identity, links and placeholders.
 * Anything wrapped in [ADD ...] is a placeholder — replace before shipping.
 */
export const siteConfig = {
  name: "Rakesh Kumar",
  title: "Software Engineer",
  tagline: "iOS · React Native · React.js",
  yearsExperience: "9+",
  location: "Pune, India",
  email: "rakeshiosdev28@gmail.com",
  links: {
    github: "https://github.com/rakeshiosdev",
    linkedin: "https://www.linkedin.com/in/rakesh-kumar-b64b6011b/",
    resume: "/resume.pdf", // placeholder file — replace with the real resume
  },
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
  ],
};

export type SiteConfig = typeof siteConfig;

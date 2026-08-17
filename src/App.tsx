import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollProgress from "./components/UI/ScrollProgress";
import BackToTop from "./components/UI/BackToTop";

import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  useActiveSection();
  return (
    <>
      <Analytics />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

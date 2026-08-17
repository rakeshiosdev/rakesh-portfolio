import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollProgress from "./components/UI/ScrollProgress";
import BackToTop from "./components/UI/BackToTop";
import SectionFallback from "./components/UI/SectionFallback";
import LazySection from "./components/UI/LazySection";

// const Skills = lazy(() => import("./components/Skills/Skills"));
// const Projects = lazy(() => import("./components/Projects/Projects"));
// const Experience = lazy(() => import("./components/Experience/Experience"));
// const Resume = lazy(() => import("./components/Resume/Resume"));
// const Footer = lazy(() => import("./components/Footer/Footer"));

import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />

        {/* <LazySection> */}
        <Skills />
        {/* </LazySection> */}

        {/* <LazySection> */}
        <Projects />
        {/* </LazySection> */}

        {/* <LazySection> */}
        <Experience />
        {/* </LazySection> */}

        {/* <LazySection> */}
        <Resume />
        {/* </LazySection> */}
      </main>

      {/* <LazySection> */}
      <Footer />
      {/* </LazySection> */}

      <BackToTop />
    </>
  );
}

export default App;

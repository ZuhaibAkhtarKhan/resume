import BackgroundGrid from "./components/BackgroundGrid";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import SectionNav from "./components/SectionNav";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundGrid />
      <CustomCursor />
      <ScrollProgress />
      <SectionNav />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-800 focus:px-3 focus:py-2 focus:text-xs focus:text-ink-100 focus:ring-1 focus:ring-accent-blue"
      >
        skip to content
      </a>

      <main
        id="main"
        className="mx-auto w-full max-w-2xl px-5 pt-10 sm:px-6 sm:pt-14"
      >
        <Header />
        <Hero />

        <div className="mt-12">
          <Section id="education" title="education">
            <Education />
          </Section>

          <Section id="experience" title="experience">
            <Experience />
          </Section>

          <Section id="projects" title="projects">
            <Projects />
          </Section>

          <Section id="skills" title="technical skills">
            <Skills />
          </Section>
        </div>

        <Footer />
      </main>
    </>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PillarProvider, usePillar } from "./context/PillarContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PillarSelector } from "./components/PillarSelector";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { SectionDivider } from "./components/SectionDivider";
import "./index.css";

function App() {
  const { activePillar } = usePillar();

  return (
    <div data-pillar={activePillar ?? undefined}>
      <Nav />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <PillarSelector />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <PillarProvider>
        <App />
      </PillarProvider>
    </ThemeProvider>
  </StrictMode>,
);

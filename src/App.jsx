import { cvData } from './data/cvData';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import FloatingGrid from './components/FloatingGrid';
import PrintCV from './components/PrintCV';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="app-shell">
      <FloatingGrid />
      <Header data={cvData} theme={theme} onToggleTheme={toggleTheme} />
      <Hero data={cvData} />
      <About data={cvData} />
      <Skills data={cvData.skills} />
      <Experience data={cvData.experience} />
      <Projects data={cvData.projects} />
      <Education data={cvData.education} />
      <Contact data={cvData} />
      <PrintCV data={cvData} />
    </main>
  );
}

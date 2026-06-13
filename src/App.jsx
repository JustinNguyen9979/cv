import { useEffect } from 'react';
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30px 0px -50px 0px', // Tạo biên an toàn ở mép trên và mép dưới màn hình
      threshold: 0.05,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll(
      '.reveal-deep-space, .reveal-card-flip, .reveal-wing-left, .reveal-wing-right'
    );
    
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

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

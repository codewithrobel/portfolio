import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ResumeView from './components/ResumeView';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './index.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xOffset = (e.clientX / window.innerWidth - 0.5) * -30;
      const yOffset = (e.clientY / window.innerHeight - 0.5) * -30;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} currentPath={currentPath} />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <ParticlesBackground theme={theme} />
      </div>

      {currentPath === '#resume' ? (
          <ResumeView />
      ) : (
          <motion.main
            style={{ x: smoothX, y: smoothY }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Achievements />
            <Projects />
            <Certificates />
            <Contact />
          </motion.main>
      )}
      <Footer />
    </>
  );
}

export default App;

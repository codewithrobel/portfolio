import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme, currentPath }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="glass-nav" style={{ 
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            zIndex: 100, 
            padding: scrolled ? '1rem 0' : '1.5rem 0',
            transition: 'padding 0.3s ease',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(20px)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}>
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ position: 'absolute', left: '1.5rem', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}
                >
                    P. Singh
                </motion.div>

                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        margin: 0, 
                        padding: '0', 
                        alignItems: 'center',
                    }}
                >
                    {['Home', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Contact'].map((item) => {
                        const hrefTarget = item === 'Home' ? '#home' : `#${item.toLowerCase()}`;
                        return (
                        <li key={item}>
                            <a 
                              href={currentPath === '#resume' ? `/${hrefTarget}` : hrefTarget} 
                              style={{ 
                                  fontWeight: 400, 
                                  fontSize: '0.95rem', 
                                  color: 'var(--text-primary)',
                                  transition: 'color 0.3s ease'
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.color = 'var(--accent-color)';
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.color = 'var(--text-primary)';
                              }}
                            >
                                {item}
                            </a>
                        </li>
                    )})}
                    <li>
                        <a 
                            href="#resume" 
                            style={{ 
                                fontWeight: 400, 
                                fontSize: '0.95rem', 
                                color: currentPath === '#resume' ? 'var(--accent-color)' : 'var(--text-primary)',
                                transition: 'color 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.color = 'var(--accent-color)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.color = currentPath === '#resume' ? 'var(--accent-color)' : 'var(--text-primary)';
                            }}
                        >
                            Resume
                        </a>
                    </li>
                </motion.ul>
            </div>
        </nav>
    );
};

export default Navbar;

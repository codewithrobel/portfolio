import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
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
            transition: 'padding 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ position: 'absolute', left: '1.5rem', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}
                >
                    PS.
                </motion.div>

                {/* Centered nav links */}
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                        display: 'flex', 
                        gap: '1rem', 
                        margin: 0, 
                        padding: '0.4rem 1rem', 
                        alignItems: 'center',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '999px',
                        backdropFilter: 'blur(16px)'
                    }}
                >
                    {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <li key={item}>
                            <a 
                              href={`#${item.toLowerCase()}`} 
                              style={{ 
                                  fontWeight: 500, 
                                  fontSize: '0.9rem', 
                                  color: 'var(--text-secondary)',
                                  padding: '0.5rem 1rem',
                                  borderRadius: '999px',
                                  display: 'block'
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.color = 'var(--text-primary)';
                                e.currentTarget.style.background = 'rgba(56,189,248,0.1)';
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.color = 'var(--text-secondary)';
                                e.currentTarget.style.background = 'transparent';
                              }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ position: 'absolute', right: '1.5rem' }}
                >
                    <button onClick={toggleTheme} style={{ 
                        background: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)', 
                        cursor: 'pointer', 
                        color: 'var(--text-primary)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: '0.6rem',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;

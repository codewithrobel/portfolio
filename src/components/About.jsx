import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                    <p className="section-subtitle">Get to know more about my background and approach</p>
                </motion.div>

                <div className="grid-responsive about-grid">
                    {/* Left: Quick Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <Code size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Development</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Building robust architectures & scalable backend solutions.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '1.5rem' }}>
                            <Lightbulb size={24} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Problem Solving</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tackling complex challenges with structured, efficient logic.</p>
                        </div>
                    </motion.div>

                    {/* Right: Detailed Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card"
                    >
                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                            Crafting Digital Experiences
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            I am a passionate software developer and data analyst, crafting digital realms where lines of code dance in intricate patterns to create innovative designs. Navigating the modern-day architectural landscapes of both frontend applications and data-driven backends, my goal is to weave the fabric of scalable solutions.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Each keystroke is a brushstroke, confronting bugs and glitches to turn complex data and ideas into beautiful, intuitive models. Whether exploring environmental metrics, uncovering data patterns, or building dynamic responsive web interfaces, I strive for perfection.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

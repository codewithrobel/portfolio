import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Environmental Dashboard',
        description: 'Interactive web dashboard to visualize district-wise environmental metrics using maps and modular analytics components.',
        tech: ['React', 'Leaflet', 'Vite'],
        github: 'https://github.com/codewithrobel',
        live: '#',
        image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=800&auto=format&fit=crop'
    },
    {
        title: 'Border Crossing Data',
        description: 'Exploratory analysis and visualization on U.S. border-crossing datasets to uncover trends using heatmaps.',
        tech: ['Python', 'Pandas', 'Seaborn'],
        github: 'https://github.com/codewithrobel',
        live: '#',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    },
    {
        title: 'Shopping E-Commerce',
        description: 'Responsive multi-page eyewear e-commerce website incorporating modern UI/UX principles and interactive displays.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/codewithrobel',
        live: '#',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
    },
    {
        title: 'IoT Home Automation',
        description: 'A smart home solution integrating IoT sensors to control lighting and monitor temperature efficiently.',
        tech: ['C++', 'Arduino', 'IoT'],
        github: 'https://github.com/codewithrobel',
        live: '#',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">Real-world applications I've built from the ground up</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Card Image Cover */}
                            <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)', position: 'relative' }}>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(3,7,18,0.8))', pointerEvents: 'none' }}></div>
                            </div>

                            {/* Card Body */}
                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 700 }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.95rem' }}>{project.description}</p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{ fontSize: '0.75rem', color: 'var(--accent-color)', background: 'var(--bg-secondary)', padding: '0.3rem 0.8rem', borderRadius: '999px', border: '1px solid var(--glass-border)' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>
                                        Preview <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

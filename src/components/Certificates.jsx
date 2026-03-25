import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
    {
        title: 'Java (Basic)',
        issuer: 'HackerRank',
        date: 'Nov - 2025',
    },
    {
        title: 'Introduction to Image Processing',
        issuer: 'Coursera',
        date: 'Aug - 2025',
    },
    {
        title: 'CodeSmart: Foundations and Data Structure in C, C++ and Java',
        issuer: 'Lovely Professional University',
        date: 'Aug - 2025',
    }
];

const Certificates = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">My <span className="text-gradient">Certifications</span></h2>
                    <p className="section-subtitle">Professional courses and skill validations</p>
                </motion.div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{ color: 'var(--accent-color)' }}>
                                <Award size={36} />
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{cert.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{cert.issuer}</span>
                                <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem' }}>{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

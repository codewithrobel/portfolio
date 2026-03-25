import { motion } from 'framer-motion';
import { Download, FileImage } from 'lucide-react';

const ResumeSection = () => {
    return (
        <section id="resume" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="section-title">My <span className="accent">Resume</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card"
                    style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                            <FileImage size={24} className="accent" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Priyanshu_Singh_Resume.pdf</h3>
                        </div>
                        <a href="/priyanshufinalcvfinalll.pdf" download="Priyanshu_Singh_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                            <Download size={16} /> Download
                        </a>
                    </div>
                    
                    <div style={{ width: '100%', height: '850px', background: '#050505', display: 'flex', justifyContent: 'center' }}>
                        <iframe 
                            src="/priyanshufinalcvfinalll.pdf" 
                            title="Resume Document" 
                            style={{ 
                                width: '100%', 
                                height: '100%',
                                border: 'none', 
                                borderBottomLeftRadius: '24px',
                                borderBottomRightRadius: '24px'
                            }} 
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeSection;

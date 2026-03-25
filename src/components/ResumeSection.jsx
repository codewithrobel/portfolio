import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

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
                    style={{ padding: '0', overflow: 'hidden', height: '800px', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)' }}>
                            <FileText size={24} className="accent" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Priyanshu_Singh_Resume.pdf</h3>
                        </div>
                        <a href="/Priyanshu_Singh_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                            <Download size={16} /> Download
                        </a>
                    </div>
                    <div style={{ flex: 1, background: '#111', position: 'relative' }}>
                        {/* Fallback Overlay to tell user to drop their PDF in the folder */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'var(--text-secondary)', zIndex: 0, padding: '2rem' }}>
                            <FileText size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                            <p style={{ fontSize: '1.1rem' }}>Resume PDF View</p>
                            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.7 }}>Aapki asli PDF file (Priyanshu_Singh_Resume.pdf) 'public' folder mein dalte hi yahan officially load ho jayegi.</p>
                        </div>
                        <iframe 
                            src="/Priyanshu_Singh_Resume.pdf" 
                            title="Resume Viewer"
                            width="100%" 
                            height="100%" 
                            style={{ border: 'none', position: 'relative', zIndex: 1, backgroundColor: 'transparent' }} 
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeSection;

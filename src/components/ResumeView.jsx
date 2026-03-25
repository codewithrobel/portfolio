import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';

const ResumeView = () => {
    return (
        <section style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', flexDirection: 'column' }} className="container">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '0 1rem' }}
            >
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <ArrowLeft size={18} /> Back to Portfolio
                </a>
                
                <a href="/priyanshufinalcvfinalll.pdf" download="Priyanshu_Singh_Resume.pdf" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: '999px', fontSize: '1rem', display: 'flex', gap: '0.5rem', border: 'none' }}>
                    <Download size={18} /> Download Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ flex: 1, width: '100%', background: '#1c1c1c', borderRadius: '16px', overflow: 'hidden', border: '1px solid #2a2a2a', marginBottom: '2rem' }}
            >
                <iframe 
                    src="/priyanshufinalcvfinalll.pdf" 
                    title="Resume Document" 
                    style={{ 
                        width: '100%', 
                        height: '80vh',
                        border: 'none',
                        background: '#1c1c1c'
                    }} 
                />
            </motion.div>
        </section>
    );
};

export default ResumeView;

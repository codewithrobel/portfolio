import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container grid-responsive hero-grid">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '999px', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
            👋 Welcome to my portfolio
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Hi, I'm <br/>
            <span className="accent">Priyanshu Singh.</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Creative Developer & Tech Enthusiast
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
            I build elegant, responsive, and user-friendly digital experiences. Passionate about solving complex problems through clean and efficient code.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Hit me up <Mail size={18} />
            </a>
            <a href="#resume" className="btn btn-outline">
              View Resume
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
             <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>2+</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Years Exp.</p>
             </div>
             <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>15+</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Projects</p>
             </div>
             <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Commitment</p>
             </div>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
           {/* Glowing background ring */}
           <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--accent-color)', filter: 'blur(50px)', opacity: 0.3, zIndex: -1 }}></div>

           <div style={{ width: '100%', maxWidth: '450px', aspectRatio: '1/1', borderRadius: '50%', background: 'var(--glass-bg)', overflow: 'hidden', border: '4px solid var(--bg-color)', boxShadow: '0 0 0 2px var(--accent-color)' }}>
              <img
                src="/profile.jpg"
                alt="Priyanshu Singh"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop';
                }}
              />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

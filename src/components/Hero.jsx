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
          <div style={{ display: 'inline-block', padding: '0', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
            Hello, I'm
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            <span style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Priyanshu Singh</span>
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Full Stack Developer | Machine Learning Enthusiast | Problem Solver
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>
            I build elegant, responsive, and user-friendly digital experiences. Passionate about solving complex problems through clean and efficient code.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ background: '#fff', color: '#000', padding: '0.8rem 2rem', borderRadius: '999px', fontWeight: 600, transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>
              View My Projects
            </a>
            <a href="#contact" style={{ background: 'transparent', color: '#fff', padding: '0.8rem 2rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600, transition: 'all 0.3s' }} onMouseOver={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e=>{e.currentTarget.style.background='transparent'; e.currentTarget.style.transform='scale(1)'}}>
              Contact Me
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

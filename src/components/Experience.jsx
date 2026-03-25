import { motion } from 'framer-motion';

const timeline = [
  {
    year: 'May 2025 - Present',
    role: 'Social Media Head',
    company: 'InnovXus',
    desc: 'Leading the social media and digital presence initiatives.',
  },
  {
    year: 'Aug 2024 - Present',
    role: 'B.Tech - Information Technology',
    company: 'Lovely Professional University (Phagwara, Punjab)',
    desc: 'Pursuing my Bachelor of Technology focused on core algorithms, software engineering, and modern development.',
  },
  {
    year: 'May 2024 - Mar 2025',
    role: 'Social Media Manager',
    company: 'VentureSpace',
    desc: 'Managed community engagement and social outreach campaigns.',
  },
  {
    year: 'Apr 2020 - Mar 2022',
    role: 'Diploma',
    company: 'Govt Polytechnic College (Sonbhadra, UP)',
    desc: 'Completed technical diploma with 72%.',
  },
  {
    year: 'Apr 2018 - Mar 2019',
    role: 'Matriculation',
    company: 'KBM Vidyalaya (Mirzapur, UP)',
    desc: 'Completed secondary education with 71%.',
  }
];

const Experience = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">Education & <span className="accent">Experience</span></h2>
          <div className="title-underline"></div>
        </motion.div>
          
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '26px', top: '10px', bottom: '0', width: '2px', background: 'var(--glass-border)' }}></div>

          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ position: 'relative', paddingLeft: '5rem', marginBottom: '3rem' }}
            >
              {/* Glowing Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '5px', 
                width: '14px', 
                height: '14px', 
                borderRadius: '50%', 
                background: 'var(--accent-color)', 
                boxShadow: '0 0 10px var(--accent-color)',
                border: '3px solid var(--bg-color)' 
              }}></div>
              
              <div className="glass-card" style={{ padding: '1.5rem 2rem' }}>
                <span style={{ display: 'inline-block', color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 600, padding: '0.3rem 0.8rem', background: 'var(--bg-secondary)', borderRadius: '999px', marginBottom: '1rem' }}>
                    {item.year}
                </span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{item.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>{item.company}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

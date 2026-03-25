import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu, Brain } from 'lucide-react';

const skills = [
  { name: 'Web Dev', level: 90, icon: <Layout size={28} /> },
  { name: 'Java', level: 85, icon: <Server size={28} /> },
  { name: 'Python', level: 80, icon: <Database size={28} /> },
  { name: 'IoT', level: 75, icon: <Cpu size={28} /> },
  { name: 'AI Basics', level: 70, icon: <Brain size={28} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">A quick look at my primary technical proficiencies</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            >
              <div style={{ color: 'var(--accent-color)', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}>
                  {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{skill.name}</h3>
              <div style={{ width: '100%', height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                    style={{ height: '100%', background: 'var(--text-gradient)', borderRadius: '3px' }}
                  />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

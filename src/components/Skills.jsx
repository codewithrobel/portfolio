import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu, Layers, Briefcase, FileText } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Server size={24} />,
    skills: ['Java', 'JavaScript', 'Python', 'C', 'C++', 'PL/SQL']
  },
  {
    title: 'Data & Analytics',
    icon: <Database size={24} />,
    skills: ['Data Cleaning', 'PowerBI', 'Excel', 'Descriptive Statistics', 'EDA']
  },
  {
    title: 'Libraries & Tools',
    icon: <Layers size={24} />,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'MySQL', 'Figma', 'VSCode']
  },
  {
    title: 'Soft Skills',
    icon: <Briefcase size={24} />,
    skills: ['Problem-Solving', 'Adaptability', 'Leadership']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
        >
          <h2 className="section-title">Technical <span className="accent">Skills</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                  {category.icon}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {category.skills.map((skill, i) => (
                      <span key={i} style={{ 
                          background: 'var(--bg-secondary)', 
                          color: 'var(--text-secondary)', 
                          padding: '0.5rem 1rem', 
                          borderRadius: '8px', 
                          fontSize: '0.9rem',
                          border: '1px solid var(--glass-border)'
                      }}>
                          {skill}
                      </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

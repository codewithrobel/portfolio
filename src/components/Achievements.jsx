import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Terminal, BookOpen } from 'lucide-react';

const achievements = [
    {
        title: 'LeetCode',
        desc: 'Solved 150+ coding problems on LeetCode.',
        icon: <Code2 size={40} color="#eab308" />, // Yellow
    },
    {
        title: 'HackerRank',
        desc: 'Solved 80+ coding problems on HackerRank.',
        icon: <Terminal size={40} color="#22c55e" />, // Green
    },
    {
        title: 'GeeksforGeeks',
        desc: 'Solved 50+ coding problems on GeeksforGeeks.',
        icon: <BookOpen size={40} color="#16a34a" />, // Dark Green
    }
];

const TiltCard = ({ item }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: '1000px', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="glass-card"
            >
                <div style={{ transform: 'translateZ(50px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                    <div style={{ 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        padding: '1.5rem', 
                        borderRadius: '20px', 
                        marginBottom: '1.5rem'
                    }}>
                        {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="section-title">My <span className="accent">Achievements</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {achievements.map((item, index) => (
                        <TiltCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

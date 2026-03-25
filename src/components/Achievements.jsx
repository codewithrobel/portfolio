import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Terminal, BookOpen } from 'lucide-react';

const achievements = [
    {
        title: 'LeetCode',
        desc: 'Solved 150+ coding problems on LeetCode.',
        icon: <Code2 size={32} color="#eab308" />, // Yellow for LeetCode
        bgColor: 'rgba(234, 179, 8, 0.1)'
    },
    {
        title: 'HackerRank',
        desc: 'Solved 50+ coding problems on HackerRank.',
        icon: <Terminal size={32} color="#22c55e" />, // Green for HackerRank
        bgColor: 'rgba(34, 197, 94, 0.1)'
    },
    {
        title: 'GeeksforGeeks',
        desc: 'Solved 50+ coding problems on GeeksforGeeks.',
        icon: <BookOpen size={32} color="#16a34a" />, // Dark Green for GFG
        bgColor: 'rgba(22, 163, 74, 0.1)'
    }
];

const TiltCard = ({ item }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Add spring for smooth rotation back to center
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

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
        <div style={{ perspective: '1000px', display: 'flex', justifyContent: 'center' }}>
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
                {/* TranslateZ adds 3D depth to the content inside the card */}
                <div style={{ transform: 'translateZ(50px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1rem' }}>
                    <div style={{ 
                        background: item.bgColor, 
                        padding: '1.2rem', 
                        borderRadius: '16px', 
                        marginBottom: '1.5rem',
                        boxShadow: `0 0 20px ${item.bgColor}` 
                    }}>
                        {item.icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
                    <p className="section-subtitle">Coding platforms where I consistently hone my skills</p>
                </motion.div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    {achievements.map((item, index) => (
                        <TiltCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

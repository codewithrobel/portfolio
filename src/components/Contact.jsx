import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="section-subtitle">Reach out if you want to collaborate or just say hi.</p>
                </motion.div>

                <div className="grid-responsive contact-grid">
                    {/* Left Info Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Get In Touch</h3>
                            
                            <a href="mailto:priyanshusingh.coder@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ background: 'var(--accent-color)', padding: '0.6rem', borderRadius: '50%', color: '#fff' }}>
                                    <Mail size={18} />
                                </div>
                                <span style={{ fontSize: '0.95rem' }}>priyanshusingh.coder@gmail.com</span>
                            </a>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ background: 'var(--accent-color)', padding: '0.6rem', borderRadius: '50%', color: '#fff' }}>
                                    <Phone size={18} />
                                </div>
                                <span style={{ fontSize: '0.95rem' }}>+91 8173981766</span>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://github.com/codewithrobel" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.8rem', flex: 1 }}>
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/in/priyanshusinghrobel" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.8rem', flex: 1 }}>
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="btn btn-outline" style={{ padding: '0.8rem', flex: 1 }}>
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2.5rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Send a Message</h3>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <input type="text" placeholder="Your Name" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1.2rem', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'inherit', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                                <input type="email" placeholder="Your Email" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1.2rem', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'inherit', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            </div>
                            <input type="text" placeholder="Subject" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1.2rem', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'inherit', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            <textarea placeholder="Your Message" rows="5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1.2rem', borderRadius: '10px', color: 'var(--text-primary)', outline: 'none', width: '100%', resize: 'vertical', fontFamily: 'inherit', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
                            
                            <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2rem', marginTop: '1rem' }}>
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

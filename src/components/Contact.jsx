import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram ,FaYoutube} from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ marginBottom: '50px' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: '100%', textAlign: 'center' }}
            >
                <h2>Get In Touch</h2>
                <p style={{ color: '#94a3b8', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                    I'm Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:kurriyuvaraj13@gmail.com" className="btn" style={{ fontSize: '1.2rem', padding: '15px 40px', marginBottom: '60px', textDecoration: 'none' }}>
                    Say Hello
                </a>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '2rem' }}>
                    <a href="https://github.com/Yuvaraj-kurri3" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yuvarajkurri" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:kurriyuvaraj13@gmail.com" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        <FaEnvelope />
                    </a>
                     <a href="https://www.instagram.com/yuvarajkurri/" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        <FaInstagram />
                    </a>
                      <a href="https://www.youtube.com/@YuvarajKurri" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}>
                        <FaYoutube />
                    </a>
                </div>

                <footer style={{ marginTop: '80px', color: '#64748b', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} Yuvaraj Kurri. All rights reserved.</p>
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;

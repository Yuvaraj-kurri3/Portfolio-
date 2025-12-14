import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import resume from '../assets/YuvarajKurri_Resume.pdf';

const Hero = () => {
    const roles = ['Fullstack Developer', 'Content Creator', 'Student', 'Founder of UndoBharat'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', filter: 'blur(80px)', zIndex: -1 }}></div>

            <div className="hero-container" style={{ zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>

                {/* Text Content */}
                <div className="hero-text" style={{ flex: 1 }}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '15px', fontWeight: '600' }}
                    >
                        Hello, I'm
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 'bold', marginBottom: '20px', lineHeight: 1.1, color: '#f8fafc' }}
                    >
                        Yuvaraj Kurri
                    </motion.h1>

                    <div style={{ height: '60px', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
                        <AnimatePresence mode='wait'>
                            <motion.h2
                                key={roles[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                    color: '#94a3b8',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    margin: 0,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {roles[index]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                    >
                        <a href={resume} download="YuvarajKurri_Resume.pdf" className="btn">
                            Download Resume
                        </a>
                        <Link to="contact" smooth={true} duration={500} className="btn btn-outline" style={{ cursor: 'pointer', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block' }}>
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            width: '350px',
                            height: '350px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid rgba(56, 189, 248, 0.3)',
                            boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)',
                            position: 'relative'
                        }}>
                        <img
                            src="https://res.cloudinary.com/dtozixle0/image/upload/v1765731810/preview2_cbt6qn.png"
                            alt="Yuvaraj Kurri"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.2) 100%)' }}></div>
                    </motion.div>
                </motion.div>

            </div>

            <style>{`
        @media (max-width: 968px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            justify-content: center;
          }
          .hero-text {
            align-items: center;
          }
          .hero-text div {
            justify-content: center;
          }
          .hero-image div {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ minHeight: 'auto', padding: '100px 20px' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2>About Me</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '20px' }}>
                        I am a passionate Fullstack Developer with a knack for building robust and scalable web applications.
                        With experience in both front-end and back-end technologies, I enjoy creating seamless user experiences
                        backed by powerful architecture.
                    </p>
                    <p>
                        I love solving complex problems and learning new technologies. Whether it's building a responsive
                        frontend with React or designing a RESTful API with Node.js, I am always eager to take on new challenges.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

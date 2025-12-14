import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaPython,FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiRedis } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express', icon: <SiExpress color="#fff" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'Github', icon: <FaGithub color="#3178C6" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
];

const Skills = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
            >
                <h2>Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.1, backgroundColor: '#334155' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            style={{
                                background: '#1e293b',
                                padding: '20px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                cursor: 'default'
                            }}
                        >
                            <div style={{ fontSize: '3rem' }}>{skill.icon}</div>
                            <p style={{ fontWeight: '600', color: '#cbd5e1' }}>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;

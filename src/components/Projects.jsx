import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'UndoBharat',
        description: 'Empowering citizens to report and resolve local village problems.',
        tech: ['EJS', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/Yuvaraj-kurri3/UndoBharat',
        demo: 'https://undobharat.org',
        image: 'https://res.cloudinary.com/dqz2hem3m/image/upload/v1750665330/logo_ep4az4.png'
    },
    {
        title: 'Text-Summarizer',
        description: 'AI Based Text Summarizer',
        tech: ['React', 'Node.js', 'MongoDB', 'Express','Redis'],
        github: 'https://github.com/Yuvaraj-kurri3/Text_Summerizer',
        demo: 'https://text-summerizer-iota.vercel.app/',
        image: 'https://res.cloudinary.com/dtozixle0/image/upload/v1765729432/Text_Summarizer_qe9ob9.jpg',
        height: '170%',
    },
    {
        title: 'Learnify',
        description: 'Only Diploma students under the C21 scheme can access all subjects',
        tech: ['Html', 'CSS', 'JavaScript'],
        github: 'https://github.com/Yuvaraj-kurri3/Learnify',
        demo: 'https://yuvaraj-kurri3.github.io/Learnify/',
        image: 'https://yuvaraj-kurri3.github.io/Learnify/images/logo9.png'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
            >
                <h2>Featured Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            style={{
                                background: '#1e293b',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: project.height || '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f8fafc' }}>{project.title}</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '20px', flex: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tech.map((t) => (
                                        <span key={t} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '5px 12px', borderRadius: '15px', fontSize: '0.85rem' }}>{t}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'} target="_blank">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'} target="_blank">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;

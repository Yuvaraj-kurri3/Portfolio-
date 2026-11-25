import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// import houseRentalImage from '../assets/HouseRental.jpg';

const projects = [
    {
        title: 'Hostel Management System',
        description: 'A Full-Stack Hostel Management System built with React, Node.js, MongoDB, and Express. It allows users to manage hostel operations efficiently, including room allocation, fee management, and student records.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/Yuvaraj-kurri3/srinidhihostels',
        demo: 'https://srinidhihostels.netlify.app/',
        image: 'https://res.cloudinary.com/dtozixle0/image/upload/v1767552750/Gemini_Generated_Image_remrasremrasremr_bjdwyy.png'
    },
    {
        title: 'Text-Summarizer',
        description: 'Built a MERN-based text summarizer with Redis caching and Hugging Face API integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express','Redis'],
        github: 'https://github.com/Yuvaraj-kurri3/Text_Summerizer',
        demo: 'https://text-summerizer-iota.vercel.app/',
        image: 'https://res.cloudinary.com/dtozixle0/image/upload/v1765729432/Text_Summarizer_qe9ob9.jpg',
        height: '170%',
    },
    {
        title: 'HouseRentals',
        description: 'Built HouseHunt, a MERN-based rental platform with property search and filtering, Cloudinary image uploads, admin moderation, JWT/bcrypt authentication, role-based access control, 25+ REST APIs, compound-indexed MongoDB queries, and MongoDB Atlas.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
        image:'https://res.cloudinary.com/dtozixle0/image/upload/v1795584137/Modern_House_Rental_Logo_scimnp.png',
        github: 'https://github.com/Yuvaraj-kurri3/HouseRental'

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
                            {project.image && (
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: project.height || '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                                </div>
                            )}
                            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#f8fafc' }}>{project.title}</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '20px', flex: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tech.map((t) => (
                                        <span key={t} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '5px 12px', borderRadius: '15px', fontSize: '0.85rem' }}>{t}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {project.github && (
                                        <a href={project.github} rel='noreferrer' style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'} target="_blank">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} rel='noreferrer' style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cbd5e1', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#38bdf8'} onMouseLeave={(e) => e.target.style.color = '#cbd5e1'} target="_blank">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
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

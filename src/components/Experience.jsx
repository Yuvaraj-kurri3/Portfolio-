import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaGithub } from 'react-icons/fa';

const experiences = [
    {
        role: 'MERN Stack Developer',
        company: 'Smart Bridge',
        period: 'May 2026 - June 2026',
        type: 'Remote',
        description: [
            'Designed and developed a full-stack House Rental web application using MERN Stack, enabling renters, landlords, and agents to discover and list properties on a unified platform.',
            'Developed 25+ RESTful APIs using Express.js following MVC architecture.',
            'Implemented JWT authentication, bcrypt password hashing, and role-based access control using custom middleware.'
        ],
        GitHub: 'https://github.com/Yuvaraj-kurri3/HouseRental'
    },
    {
        role: 'FullStack Developer',
        company: 'Suvidha Foundation',
        period: 'Oct 2025 - Nov 2025',
        type: 'Remote',
        description: [
            'Developed an end-to-end web application using the MERN stack, with Redis for caching and Docker for containerization.',
            'Integrated with huggingface API to Summerize the Article.'
        ],
        GitHub: 'https://github.com/Yuvaraj-kurri3/Text_Summerizer'
    }
];

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '50px 0', color: '#f8fafc' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}
            >
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>My Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            style={{
                                background: '#1e293b',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #334155'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '5px' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>{exp.company} <span style={{ fontSize: '0.9rem', background: '#334155', padding: '2px 8px', borderRadius: '4px', marginLeft: '10px' }}>{exp.type}</span></h4>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem', marginTop: '5px' }}>
                                    <FaCalendarAlt />
                                    <span>{exp.period}</span>
                                </div>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '10px', color: '#cbd5e1', lineHeight: '1.6' }}>
                                        <div style={{ marginTop: '6px', minWidth: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%' }}></div>
                                        {item} 
                                    </li>
                                ))}
                            </ul>
                            {exp.GitHub && (
                                <p><FaGithub /> - <a href={exp.GitHub} target='_blank' rel='noreferrer' style={{ color: '#38bdf8', textDecoration: 'none' }}>Repository</a></p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

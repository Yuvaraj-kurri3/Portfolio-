import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background 0.3s ease',
        padding: '20px 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="hero" smooth={true} duration={500} style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
          YuvarajKurri<span style={{ color: '#38bdf8' }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <ul style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: 'pointer', color: '#94a3b8', transition: 'color 0.3s' }}
                activeClass="active-link"
                spy={true}
                onMouseEnter={(e) => e.target.style.color = '#38bdf8'}
                onMouseLeave={(e) => !e.target.classList.contains('active-link') && (e.target.style.color = '#94a3b8')}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#1e293b',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              style={{ cursor: 'pointer', color: 'white', fontSize: '1.2rem' }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-icon { display: block !important; }
        }
        .active-link { color: #38bdf8 !important; }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';

const Navbar = () => {
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Vedant<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: background-color 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
          background-color: transparent;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          background-color: var(--glass-bg);
          padding: 1rem 0;
          border-bottom-color: var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .logo span {
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .contact-btn {
          padding: 0.5rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-primary) !important;
        }
        
        .contact-btn:hover {
          border-color: var(--accent);
          color: var(--accent) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

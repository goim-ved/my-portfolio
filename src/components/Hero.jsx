import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import pfp from '../../assets/pfp/sitepfp.jpeg';

const Hero = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set('.reveal-item', { 
        y: 30, 
        opacity: 0 
      });

      // Animate in
      gsap.to('.reveal-item', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      // Simple hover animation for pfp image wrapper
      gsap.fromTo('.pfp', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="greeting reveal-item">Hi, my name is Vedant Ajit Goim</p>
          <h1 className="name reveal-item">A Full-Stack <span>Developer.</span></h1>
          <p className="bio reveal-item">
            I craft scalable web solutions and digital experiences tailored for 
            ambitious startups, established agencies, and visionary solo founders.
            Bridging the gap between complex engineering and elegant design.
          </p>
          <div className="hero-actions reveal-item">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={pfp} alt="Profile" className="pfp" />
            <div className="image-backdrop"></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
        }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .greeting {
          color: var(--accent);
          font-family: var(--font-main);
          font-weight: 500;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .name {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .name span {
          color: var(--text-secondary);
        }

        .bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .hero-image-container {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 250px;
          height: 250px;
        }

        .pfp {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          border: 3px solid var(--border-color);
          transition: border-color 0.3s ease;
          filter: grayscale(20%);
          opacity: 0; /* Handled by GSAP */
        }

        .image-wrapper:hover .pfp {
          border-color: var(--accent);
          filter: grayscale(0%);
        }

        .image-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 105%;
          height: 105%;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--accent), transparent);
          z-index: 1;
          opacity: 0.2;
          filter: blur(20px);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .image-wrapper:hover .image-backdrop {
          opacity: 0.4;
          filter: blur(25px);
        }
        
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .bio {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

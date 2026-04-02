import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import aboutMePic from '../../assets/pfp/aboutmepic.jpeg';

const About = () => {
  const sectionRef = useRef(null);
  
  const skills = [
    { name: 'MERN', percentage: '95%' },
    { name: 'Python Backend Systems', percentage: '90%' },
    { name: 'Machine Learning', percentage: '75%' },
    { name: 'Rust Backend', percentage: '50%' },
    { name: 'Web3 & WebGL', percentage: '75%' },
    { name: 'PostgreSQL & Databases', percentage: '80%' },
    { name: 'Web Design & Figma', percentage: '80%' },
    { name: 'DevOps & CI/CD', percentage: '70%' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Title
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Reveal Text Paragraphs
      gsap.from('.about-text p', {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animate Skill Bars
      gsap.from('.skill-progress-fill', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 85%',
        },
        width: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power4.out'
      });

      // Reveal Image
      gsap.from('.about-image-wrapper', {
        scrollTrigger: {
          trigger: '.about-image-wrapper',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title"><span>01.</span> About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who enjoys creating things that live on the internet. 
              My interest in web development started back when I decided to try editing custom Tumblr 
              themes — turns out hacking together HTML & CSS taught me a lot about core concepts.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working independently and as a freelancer 
              building tailored experiences for clients. My main focus these days is building accessible, 
              inclusive products and engaging digital experiences.
            </p>
            <p>Here is my technical proficiency across various domains:</p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-bar-container">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div className="skill-progress-fill" style={{ width: skill.percentage }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-illustration">
             <div className="about-image-wrapper">
               <img src={aboutMePic} alt="About Me" className="about-img" />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          display: flex;
          gap: 4rem;
        }
        
        .about-text {
          flex: 3;
          color: var(--text-secondary);
        }
        
        .about-text p {
          margin-bottom: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem 2rem;
          margin-top: 2rem;
        }

        .skill-bar-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-family: var(--font-main);
          color: var(--text-primary);
        }

        .skill-name {
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .skill-progress-bg {
          width: 100%;
          height: 4px;
          background-color: var(--border-color);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          background-color: var(--accent);
          border-radius: 2px;
          /* Transition handled by GSAP */
        }
        
        .about-illustration {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 2rem;
        }
        
        .about-image-wrapper {
          width: 100%;
          max-width: 300px;
          position: relative;
          background-color: var(--accent);
          border-radius: 4px;
        }
        
        .about-img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          display: block;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .about-image-wrapper::after {
          content: '';
          position: absolute;
          top: 15px;
          left: 15px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent);
          border-radius: 4px;
          z-index: 0;
          transition: all 0.3s ease;
          border-color: var(--accent);
        }
        
        .about-image-wrapper:hover .about-img {
          transform: translate(-5px, -5px);
        }

        .about-image-wrapper:hover::after {
          transform: translate(5px, 5px);
        }
        
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .about-illustration {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

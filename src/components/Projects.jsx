import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import project1 from '../../assets/featured-work/1.png';
import project2 from '../../assets/featured-work/2.png';
import project3 from '../../assets/featured-work/3.png';

const Projects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'Enterprise AI Dashboard',
      description: 'A comprehensive full-stack solution featuring a custom-built intelligent recommendation engine and high-performance real-time data visualization.',
      tech: ['MERN', 'Python', 'Machine Learning'],
      links: { github: '#', external: '#' },
      image: project1
    },
    {
      title: 'Decentralized Exchange UI',
      description: 'A robust Web3 application allowing users to interact with smart contracts seamlessly while visualizing complex blockchain data metrics in real-time.',
      tech: ['React', 'Web3.js', 'Rust'],
      links: { github: '#', external: '#' },
      image: project2
    },
    {
      title: 'WebGL Interactive Studio',
      description: 'An immersive 3D digital experience redefining the traditional web interactions through advanced WebGL shaders and optimized asset loading.',
      tech: ['WebGL', 'Three.js', 'PostgreSQL'],
      links: { github: '#', external: '#' },
      image: project3
    }
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

      // Reveal Project Rows
      gsap.utils.toArray('.project-row').forEach((row) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // 3D Tilt Logic
      const containers = gsap.utils.toArray('.project-image-container');
      containers.forEach((container) => {
        const img = container.querySelector('.project-img');
        
        container.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = container.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          
          const centerX = width / 2;
          const centerY = height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
          const rotateY = ((x - centerX) / centerX) * 10;
          
          gsap.to(container, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000,
            overwrite: 'auto'
          });

          gsap.to(img, {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        });

        container.addEventListener('mouseleave', () => {
          gsap.to(container, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
            overwrite: 'auto'
          });

          gsap.to(img, {
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title"><span>03.</span> Featured Work</h2>
        
        <div className="projects-stack">
          {projects.map((project, index) => (
            <div className="project-row" key={index}>
              <div className="project-image-container glass-card">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-info">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-desc glass-card">
                  <p>{project.description}</p>
                </div>
                
                <ul className="project-tech">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                
                <div className="project-links">
                  <a href={project.links.github} className="btn-icon">GitHub</a>
                  <a href={project.links.external} className="btn-icon">Visit Live ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-stack {
          display: flex;
          flex-direction: column;
          gap: 8rem;
          margin-top: 4rem;
        }

        .project-row {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .project-image-container {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 0;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }

        .project-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
          border-radius: 8px;
        }

        .project-info {
          display: flex;
          flex-direction: column;
        }

        .project-overline {
          color: var(--accent);
          font-family: var(--mono);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.75rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .project-desc {
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          z-index: 2;
        }

        .project-desc p {
          color: var(--text-secondary);
          margin: 0;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .project-tech li {
          font-family: var(--mono);
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
        }

        .project-links a {
          color: var(--text-primary);
          font-weight: 500;
        }

        .project-links a:hover {
          color: var(--accent);
        }
        
        @media (min-width: 1024px) {
          .project-row {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            align-items: center;
          }
          
          .project-row:nth-of-type(even) .project-image-container {
            grid-column: 1 / 8;
            grid-row: 1 / -1;
          }
          .project-row:nth-of-type(even) .project-info {
            grid-column: 7 / -1;
            grid-row: 1 / -1;
            text-align: right;
            align-items: flex-end;
          }
          
          .project-row:nth-of-type(odd) .project-image-container {
            grid-column: 6 / -1;
            grid-row: 1 / -1;
          }
          .project-row:nth-of-type(odd) .project-info {
            grid-column: 1 / 7;
            grid-row: 1 / -1;
            text-align: left;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

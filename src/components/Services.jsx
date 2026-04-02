import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Services = () => {
  const sectionRef = useRef(null);

  const servicesList = [
    {
      title: 'Full-Stack Web Development',
      description: 'Building responsive, scalable, and highly interactive web applications tailored to your needs using the MERN stack.',
      icon: '</>',
    },
    {
      title: 'Systems & Backend Engineering',
      description: 'Architecting high-performance backend systems and databases utilized by heavy-traffic platforms with Python, Rust, and PostgreSQL.',
      icon: '⚙️',
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Integrating intelligent predictive models and data-driven algorithms to provide smart insights and automate modern workflows.',
      icon: '🧠',
    },
    {
      title: 'Web3 & Immersive Tech',
      description: 'Pioneering decentralized applications and breathtaking 3D browser experiences leveraging Web3 and WebGL technologies.',
      icon: '🌐',
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

      // Reveal Cards
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title"><span>02.</span> What I Do</h2>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card glass-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
        }

        .service-icon {
          font-size: 2.2rem;
          color: var(--accent);
          margin-bottom: 1.2rem;
          font-family: var(--mono);
        }

        .service-title {
          font-size: 1.25rem;
          margin-bottom: 0.8rem;
          color: var(--text-primary);
        }

        .service-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Services;

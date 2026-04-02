import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

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

      // Reveal Contact Info
      gsap.from('.contact-info > *', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Reveal Form
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 85%',
        },
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Reveal Form Groups
      gsap.from('.form-group', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title text-center"><span>04.</span> What's Next?</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-desc">
              Whether you have a question, a project idea, or just want to say hi, 
              my inbox is always open. I'll get back to you as soon as I can!
            </p>
            <div className="contact-email">
              <span>Email:</span>
              <a href="mailto:bruhdantfs@gmail.com">bruhdantfs@gmail.com</a>
            </div>
          </div>
          
          <form 
            action="https://formsubmit.co/bruhdantfs@gmail.com" 
            method="POST" 
            className="contact-form glass-card"
          >
            <input type="hidden" name="_subject" value="New contacting from Portfolio Website!" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Hello! I have a project..."></textarea>
            </div>
            
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-container">
          <p>Designed & Built by Vedant Ajit Goim</p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>

      <style>{`
        .contact-section {
          padding: 8rem 0 0 0;
        }

        .text-center {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto 6rem auto;
          align-items: start;
        }

        .contact-heading {
          font-size: clamp(2rem, 3vw, 2.5rem);
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .contact-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        
        .contact-email {
          color: var(--text-secondary);
        }
        
        .contact-email span {
          display: block;
          font-family: var(--mono);
          margin-bottom: 0.5rem;
          color: var(--accent);
          font-size: 0.9rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border-color);
          padding: 0.8rem 1rem;
          border-radius: 4px;
          color: var(--text-primary);
          font-family: var(--font-main);
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
        }

        .footer {
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid var(--border-color);
        }
        
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .footer p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .social-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-info {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

import { useEffect, useState } from 'react';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Chakra UI', icon: 'https://cdn.simpleicons.org/chakraui/14E0B7' },
  {
    name: 'Styled Components',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg',
    fallback: 'https://cdn.simpleicons.org/styledcomponents/DB7093'
  }
];

const timeline = [
  {
    role: 'Backend Developer',
    company: 'Spring Boot Projects',
    period: '2024 - Present',
    description:
      'Built secure APIs, authentication flows, and production-ready backend modules with clean layered architecture.'
  },
  {
    role: 'Java Developer',
    company: 'Personal + Practice Projects',
    period: '2023 - 2024',
    description:
      'Worked on SQL optimization, form workflows, validation, and robust exception handling for enterprise-style use cases.'
  },
  {
    role: 'React + API Integration',
    company: 'Frontend Collaboration',
    period: '2022 - 2023',
    description:
      'Integrated React frontends with Spring Boot services and delivered responsive dashboards for data-driven applications.'
  }
];

const projects = [
  {
    title: 'E-Commerce Backend API',
    desc: 'JWT security, product/order modules, and clean service-repository architecture.',
    tech: 'Java, Spring Boot, MySQL'
  },
  {
    title: 'Employee Management System',
    desc: 'CRUD APIs with validation, pagination, and frontend integration endpoints.',
    tech: 'Spring Boot, JPA, React'
  },
  {
    title: 'Portfolio + Contact Stack',
    desc: 'Modern React portfolio with sections, transitions, and downloadable resume flow.',
    tech: 'React, Vite, CSS'
  }
];

function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2800);
  };

  return (
    <div className="app-wrap">
      <header className="site-header">
        <a href="#home" className="logo">
          ASHU
        </a>

        <nav className="main-nav" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experiences</a>
          <a href="#projects">Projects</a>
        </nav>

        <a href="#contact" className="touch-btn">
          Get In Touch
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-motion" aria-hidden="true">
            <span className="blob blob-one" />
            <span className="blob blob-two" />
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />
          </div>
          <div className="hero-lines" aria-hidden="true">
            <span className="hero-line line-a" />
            <span className="hero-line line-b" />
            <span className="hero-line line-c" />
          </div>
          <p className="hero-name">Ashitosh Jadhav</p>
          <h1>Java Spring Boot Backend Developer</h1>
          <p className="hero-sub">
            I build scalable backend services and integrate them with clean React frontends.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="primary-btn">
              Projects
            </a>
            <a href="/Ashitosh_Jadhav_Resume.pdf" className="primary-btn" download>
              RESUME
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/Ashu-tna" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/ashitosh-jadhav/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
            </a>
          </div>
        </section>

        <section id="about" className="section about-grid reveal">
          <div className="about-photo float-in">
            <div className="photo-orb" />
            <div className="photo-content">
              <img src="/AshuImage.jpeg" alt="Ashitosh Jadhav" className="profile-image" />
            </div>
          </div>

          <div className="about-copy">
            <h2>About</h2>
            <p>
              I am a backend-focused Java developer based in Mumbai, India. My main strengths are
              Spring Boot APIs, relational database design, and writing maintainable production
              code.
            </p>
            <p>
              I also work with JavaScript and React to deliver complete solutions where frontend
              and backend integration stays reliable and fast.
            </p>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Technologies I Am Familiar With</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                  loading="lazy"
                  onError={(event) => {
                    if (skill.fallback && event.currentTarget.src !== skill.fallback) {
                      event.currentTarget.src = skill.fallback;
                      return;
                    }
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span className="skill-name">{skill.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <h2>Experiences</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className={`timeline-item ${index % 2 ? 'right' : 'left'}`} key={item.role}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects reveal">
          <h2>Projects</h2>
          <p className="project-sub">Selected projects I have worked on recently.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p className="tech">{project.tech}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div>
            <h2>Contact Ashu</h2>
            <p>Open for backend development roles, freelance work, and project collaboration.</p>
            <p className="contact-detail">
              Phone: <a href="tel:+919372119306">+91 9372119306</a>
            </p>
            <p className="contact-detail">
              Email: <a href="mailto:jadhavashu945@gmail.com">jadhavashu945@gmail.com</a>
            </p>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your message" />
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ashitosh Jadhav</p>
        <div className="footer-links">
          <a href="mailto:jadhavashu945@gmail.com" className="footer-link-pill">
            Gmail - jadhavashu945@gmail.com
          </a>
          <a href="tel:+919372119306" className="footer-link-pill">
            Mobile - 9372119306
          </a>
          <a href="https://github.com/Ashu-tna" target="_blank" rel="noreferrer" className="footer-link-pill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" aria-hidden="true" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ashitosh-jadhav/" target="_blank" rel="noreferrer" className="footer-link-pill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </footer>

      {showToast ? (
        <div className="toast-popup" role="status" aria-live="polite">
          Your feedback for contact has reached Ashu successfully.
        </div>
      ) : null}
    </div>
  );
}

export default App;

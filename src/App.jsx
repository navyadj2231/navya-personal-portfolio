

import { useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML", icon: "5", color: "#ff6848" },
  { name: "CSS", icon: "3", color: "#459cff" },
  { name: "JavaScript", icon: "JS", color: "#f6d64a" },
  { name: "React", icon: "⚛", color: "#52e5ff" },
  { name: "Python", icon: "Py", color: "#ffd166" },
  { name: "C", icon: "C", color: "#c49aff" },
  { name: "Git & GitHub", icon: "⌘", color: "#ff8b76" },
];

const projects = [
  {
    number: "01",
    title: "Student Portfolio",
    description:
      "A personal website showcasing my profile, technical skills, education and web development work.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "◈",
    link: "",
    image: "/student-portfolio.png",
  },
  {
    number: "02",
    title: "Digital Portfolio Manager",
    description:
      "A web application for organizing and presenting portfolio information through a modern interface. Currently in development.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "✳",
    link: "",
    image: "/digital-portfolio.png",
  },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sent, setSent] = useState(false);

  function handleContact(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:navyareddy238@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  }

  function goToSection(id) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  return (
    <div className={lightMode ? "app light-mode" : "app"}>
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={() => goToSection("home")}
        >
          <span className="brand-mark">N</span>
          Navya<span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "nav-active" : ""}
              onClick={() => goToSection(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button
            className="theme-toggle"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {lightMode ? "☾" : "☼"}
          </button>

          <a
            className="resume-button"
            href="/Navya-Resume.pdf"
            download="Navya-Resume.pdf"
          >
            ↓ <span>Download CV</span>
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <p className="handwritten">
              Hi, I'm Navya <span>✦</span>
            </p>

            <p className="eyebrow">
              <span className="status-dot" />
              AVAILABLE TO LEARN & COLLABORATE
            </p>

            <h1>
              Navya <span className="gradient-text">DJ</span>
            </h1>

            <h2>
              BCA Student <span className="muted">&</span> Aspiring Web Developer
            </h2>

            <p className="hero-description">
              I build beautiful, responsive websites and explore new
              technologies to turn ideas into meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="#projects"
                onClick={() => goToSection("projects")}
              >
                View My Projects <span>↗</span>
              </a>

              <a
                className="secondary-button"
                href="#contact"
                onClick={() => goToSection("contact")}
              >
                Contact Me <span>↗</span>
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/navyadj2231"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://www.linkedin.com/in/navya-dj-a239a8320/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:navyareddy238@gmail.com"
                aria-label="Email"
              >
                ✉
              </a>

              <span className="social-note">
                Curious mind. Creative work. Continuous growth.
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-shape shape-one" />
            <div className="visual-shape shape-two" />

            <div className="photo-frame">
              <img
                src="/profile.jpg"
                alt="Portrait of Navya DJ"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span className="photo-fallback">N</span>
            </div>

            <div className="floating-tag tag-top">
              <span className="tag-icon">✦</span>
              <span>
                <strong>Creative</strong>
                <small>with purpose</small>
              </span>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="tag-icon">⌘</span>
              <span>
                <strong>Code & Create</strong>
                <small>One project at a time</small>
              </span>
            </div>

            <span className="spark spark-one">✳</span>
            <span className="spark spark-two">✧</span>
          </div>
        </section>

        <section id="about" className="section-wrap content-section">
          <div className="section-heading">
            <p className="eyebrow">01 / GET TO KNOW ME</p>
            <h2>
              A little about <span className="gradient-text">my journey.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-copy glass-card">
              <p className="large-copy">
                I'm a computer applications student with a passion for
                creating useful and engaging digital experiences.
              </p>

              <p>
                I'm Navya DJ, currently pursuing my BCA at Nagarjuna College
                of Management Studies. I enjoy exploring web technologies,
                experimenting with UI design and building projects that help
                me turn classroom knowledge into practical skills.
              </p>

              <p>
                My goal is to grow as a developer, contribute to meaningful
                projects and begin a rewarding career in the IT industry.
              </p>

              <a className="text-link" href="#education">
                Explore my journey ↗
              </a>
            </div>

            <div className="about-facts">
              <article className="fact-card">
                <span className="fact-icon">⌂</span>
                <h3>Education</h3>
                <p>Bachelor of Computer Applications</p>
                <small>Nagarjuna College of Management Studies</small>
              </article>

              <article className="fact-card">
                <span className="fact-icon">♡</span>
                <h3>Interests</h3>
                <p>Web development, UI design and technology</p>
                <small>Always learning something new</small>
              </article>

              <article className="fact-card">
                <span className="fact-icon">↗</span>
                <h3>Career Goal</h3>
                <p>Become a skilled web developer</p>
                <small>Building experience through projects</small>
              </article>

              <article className="fact-card">
                <span className="fact-icon">&lt;/&gt;</span>
                <h3>Tech Focus</h3>
                <p>Frontend and programming fundamentals</p>
                <small>Expanding my developer toolkit</small>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap content-section">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>
              Technical <span className="gradient-text">skills.</span>
            </h2>
            <p className="section-intro">
              Technologies I've studied and use while building projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article
                className="skill-card"
                key={skill.name}
                style={{ "--delay": `${index * 70}ms` }}
              >
                <span
                  className="skill-symbol"
                  style={{ "--skill-color": skill.color }}
                >
                  {skill.icon}
                </span>
                <h3>{skill.name}</h3>
                <span className="skill-line" />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap content-section">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects with <span className="gradient-text">purpose.</span>
              </h2>
              <p className="section-intro">
                A selection of projects from my learning journey.
              </p>
            </div>
            <span className="project-count">02 PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-preview">
                  <div className="preview-toolbar">
                    <span />
                    <span />
                    <span />
                    <small>{project.number} — PROJECT PREVIEW</small>
                  </div>

                  <div className="preview-image">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="preview-fallback">{project.icon}</span>
                  </div>

                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-details">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="arrow-badge">↗</span>
                  </div>

                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      className="text-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project ↗
                    </a>
                  ) : (
                    <span className="project-pending">
                      Project link coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-wrap content-section">
          <div className="section-heading">
            <p className="eyebrow">04 / MY JOURNEY</p>
            <h2>
              Education & <span className="gradient-text">experience.</span>
            </h2>
          </div>

          <div className="timeline">
            <article className="timeline-card">
              <span className="timeline-icon">✧</span>
              <div>
                <span className="timeline-date">CURRENT · FINAL YEAR</span>
                <h3>Bachelor of Computer Applications</h3>
                <p>Nagarjuna College of Management Studies</p>
                <small>
                  Learning programming, software concepts and web development.
                </small>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-icon">⌘</span>
              <div>
                <span className="timeline-date">INTERNSHIP</span>
                <h3>Web Development Intern</h3>
                <p>Blunet IT Services · Bengaluru</p>
                <small>
                  Developing practical skills through coding tasks and project work.
                </small>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section-wrap content-section">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">05 / LET'S CONNECT</p>
              <h2>
                Have an idea?
                <br />
                <span className="gradient-text">Let's talk.</span>
              </h2>

              <p>
                I'm open to learning opportunities, collaboration and
                connecting with people who love building great things.
              </p>

              <div className="contact-detail">
                <span>✉</span>
                <div>
                  <small>EMAIL</small>
                  <a href="mailto:navyareddy238@gmail.com">
                    navyareddy238@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span>↗</span>
                <div>
                  <small>GITHUB</small>
                  <a
                    href="https://github.com/navyadj2231"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit my GitHub profile
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span>in</span>
                <div>
                  <small>LINKEDIN</small>
                  <a
                    href="https://www.linkedin.com/in/navya-dj-a239a8320/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <h3>Send me a message</h3>

              <label>
                Your name
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Your email
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your idea..."
                  required
                />
              </label>

              <button className="primary-button submit-button" type="submit">
                {sent ? "Open email again ↗" : "Send message ↗"}
              </button>

              <small className="form-note">
                Your email app will open with your message ready to send.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">N</span>
          Navya<span className="brand-dot">.</span>
        </a>
        <p>Designed & built with curiosity by Navya DJ.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
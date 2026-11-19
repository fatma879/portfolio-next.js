type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  meta: string;
  codeUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "BACKEND DEVELOPMENT",
    title: "Atelier Nord",
    description:
      "A multi-page business website built with Node.js and Express.js, focused on clean routing and server-side structure.",
    highlights: [
      "Custom middleware for request handling",
      "Static file serving and organised routes",
      "Responsive layout across all pages",
    ],
    technologies: ["Node.js", "Express.js", "HTML", "CSS"],
    meta: "2026 · Personal Project",
    codeUrl: "https://github.com/fatma879/express.js-checkpoint",
    // liveUrl: "https://your-demo-link.com",
  },
];

export default function Projects() {
  return (
    <main className="page-container">
      <header className="section-heading">
        <p className="eyebrow">MY WORK</p>
        <h1>Projects &amp; Experiments.</h1>
        <p>
          A selection of projects from my learning journey, each one a chance
          to explore new technologies and turn ideas into working applications.
        </p>
      </header>

      <section className="projects-grid" aria-label="Projects">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="project-symbol" aria-hidden="true">↗</span>
            </div>

            <p className="project-category">{project.category}</p>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-bottom">
              <span>{project.meta}</span>
              <div className="project-links">
                <a className="text-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  View Code ↗
                </a>
                {project.liveUrl && (
                  <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <article className="project-card project-card--placeholder">
          <div className="project-top">
            <span>02</span>
          </div>
          <p className="project-category">NEXT UP</p>
          <h2>More coming soon</h2>
          <p className="project-description">
            I'm always building. New projects will be added here as I learn.
          </p>
        </article>
      </section>

      <section className="projects-note">
        <h2>Have a project in mind?</h2>
        <p>I'd love to hear about it and see how I can help.</p>
        <a className="text-link" href="/contact">Let's work together →</a>
      </section>
    </main>
  );
}
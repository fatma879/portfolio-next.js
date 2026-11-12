
import Link from "next/link";

export default function Resume() {
  return (
    <section className="page-container">
      <div className="section-heading">
        <span className="eyebrow">MY BACKGROUND</span>
        <h1>My <span>Resume.</span></h1>
        <p>A closer look at my education, skills, and strengths.</p>
      </div>

      <div className="resume-layout">

        <div className="resume-main">
          <div className="resume-section">
            <h2>01. Education</h2>

            <div className="resume-item">
              <span className="resume-date">2026 — Present</span>
              <h3>Software Development with AI Skills</h3>
              <p>GoMyCode · Tunisia</p>
              <p>
                Currently developing technical skills in
                frontend development, programming, and
                modern web technologies.
              </p>
            </div>
          </div>

          <div className="resume-section">
            <h2>02. Technical Skills</h2>

            <div className="skills-list">
              {[
                ["HTML", "Foundation"],
                ["CSS", "Foundation"],
                ["Bootstrap", "Foundation"],
                ["JavaScript", "Learning"],
                ["React.js", "Learning"],
                ["Next.js", "Learning"],
                ["TypeScript", "Learning"],
                ["Redux Toolkit", "Learning"],
                ["Git & GitHub", "Learning"],
              ].map(([skill, level]) => (
                <div className="skill-item" key={skill}>
                  <span>{skill}</span>
                  <span className="skill-level">{level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2>03. Languages</h2>

            <div className="skills-list">
              {[
                ["Arabic", "Native"],
                ["English", "C1"],
                ["French", "B2"],
                ["Italian", "B1"],
                ["German", "B1"],
                ["Turkish","A2"],
              ].map(([language, level]) => (
                <div className="skill-item" key={language}>
                  <span>{language}</span>
                  <span className="skill-level">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="resume-sidebar">
          <div className="resume-section">
            <h2>04. Strengths</h2>
            <ul className="strength-list">
              <li>Creativity</li>
              <li>Communication</li>
              <li>Active listening</li>
              <li>Adaptability</li>
              <li>Problem solving</li>
              <li>Continuous learning</li>
            </ul>
          </div>

          <div className="resume-quote">
            "Great things are built one step at a time."
          </div>

          <Link href="/contact" className="primary-button">
            Let's Connect ↗
          </Link>
        </aside>

      </div>
    </section>
  );
}

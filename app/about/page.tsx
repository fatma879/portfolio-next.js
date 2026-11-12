
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="page-container">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h1>More than just <span>code.</span></h1>
        <p>A little introduction to the person behind the screen.</p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <Image
            src="/image1.jpg"
            alt="Fatma Zahra"
            width={400}
            height={480}
          />
        </div>

        <div className="about-content">
          <span className="badge">A curious mind ✦</span>

          <h2>Hi, I'm Fatma Zahra!</h2>

          <p>
            I'm an aspiring frontend developer with a passion
            for technology, creativity, and continuous learning.
          </p>

          <p>
            My journey into web development has introduced me
            to the exciting world of building websites and
            interactive applications.
          </p>

          <p>
            I enjoy exploring new ideas, solving problems,
            and improving my skills one project at a time.
            I believe that every small step is part of
            something bigger.
          </p>

          <div className="about-details">
            <div>
              <span>Currently</span>
              <strong>Learning & Building</strong>
            </div>

            <div>
              <span>Interested in</span>
              <strong>Frontend Development</strong>
            </div>

            <div>
              <span>My approach</span>
              <strong>Curiosity & Creativity</strong>
            </div>
          </div>

          <Link href="/projects" className="primary-button">
            Discover My Projects ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

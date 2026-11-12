import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="page-container">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h1>
          More than just <span>code.</span>
        </h1>
        <p>
          Get to know the person behind the projects, the ideas, and the
          curiosity that drives my learning journey.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <Image src="/image1.jpg" alt="Fatma Zahra" width={400} height={480} />
        </div>

        <div className="about-content">
          <span className="badge">A curious mind ✦</span>

          <h2>Hi, I'm Fatma Zahra!</h2>

          <p>
            I'm a Software Development student with a growing interest in
            front-end development and modern web technologies.
          </p>

          <p>
            I enjoy understanding how websites work, exploring new technologies,
            and creating interfaces that are both functional and visually
            appealing.
          </p>

          <p>
            My journey is driven by curiosity, consistency, and the motivation
            to keep improving. I'm always looking for opportunities to gain
            practical experience and develop my skills.
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

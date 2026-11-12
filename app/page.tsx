import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">✦ Aspiring Front-End Developer</span>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Fatma Zahra
          <span> Dalhoumi.</span>
        </h1>
        <p className="hero-description">
          I'm a Software Development student passionate about building
          user-friendly digital experiences. I enjoy combining creativity and
          technology to turn ideas into functional web applications. I'm
          constantly learning, experimenting, and improving my skills.
        </p>

        <div className="hero-buttons">
          <Link href="/projects" className="primary-button">
            Explore My Work ↗
          </Link>

          <Link href="/contact" className="secondary-button">
            Get In Touch
          </Link>
        </div>

        <p className="hero-note">
          Learning with purpose. Building with creativity.
        </p>
      </div>

      <div className="hero-image-wrapper">
        <div className="image-decoration"></div>

        <Image
          src="/image1.jpg"
          alt="Fatma Zahra Dalhoumi"
          width={420}
          height={500}
          priority
          className="hero-image"
        />

        <div className="image-caption">
          <span>01 / A little about me</span>
          <span>✿</span>
        </div>
      </div>
    </section>
  );
}

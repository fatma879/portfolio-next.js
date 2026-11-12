
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">
          ✦ Frontend Developer in Progress
        </span>

        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Fatma Zahra
          <span> Dalhoumi.</span>
        </h1>

        <p className="hero-description">
          Curious by nature, driven by purpose, and always
          creating something meaningful.
          I'm passionate about technology, design, and
          turning ideas into digital experiences.
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
          Always learning. Always creating. Always growing.
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

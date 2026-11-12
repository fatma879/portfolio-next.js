import Link from "next/link";

export default function Contact() {
  return (
    <section className="page-container contact-container">
      <div className="contact-card">
        <span className="eyebrow">HAVE A PROJECT OR AN IDEA?</span>

        <h1>
          Let's create something <span>meaningful.</span>
        </h1>

        <p>
          I'm always happy to connect with people, exchange ideas, and explore
          opportunities to learn and grow. Whether you have a question or would
          simply like to connect, feel free to reach out.
        </p>
        <a href="mailto:YOUR_EMAIL_ADDRESS" className="primary-button">
          Send Me an Email ↗
        </a>

        <div className="contact-links">
          <Link href="https://github.com/fatma879" target="_blank">
            GitHub ↗
          </Link>

          <Link
            href="https://www.linkedin.com/in/fatma-zahra-dalhoumi-6b24a642a/"
            target="_blank"
          >
            LinkedIn ↗
          </Link>
        </div>
      </div>
      <div className="contact-bottom">
        <span>GOOD THINGS START WITH A HELLO.</span>
        <span>✿</span>
      </div>
    </section>
  );
}

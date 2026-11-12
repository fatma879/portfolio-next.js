
import Link from "next/link";

export default function Contact() {
  return (
    <section className="page-container contact-container">
      <div className="contact-card">
        <span className="eyebrow">HAVE A PROJECT OR AN IDEA?</span>

        <h1>Let's create something <span>meaningful.</span></h1>

        <p>
          Whether it's an opportunity, a collaboration,
          or simply a conversation about technology,
          I'd love to hear from you.
        </p>

        <a
          href="mailto:YOUR_EMAIL_ADDRESS"
          className="primary-button"
        >
          Send Me an Email ↗
        </a>

        <div className="contact-links">
          <Link
            href="https://github.com/fatma879"
            target="_blank"
          >
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

import Link from "next/link";
const Navbar = () => {
return (
    <header className="navbar">
    <Link href="/" className="logo">
        FZ<span>.</span>
    </Link>

    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
    </nav>
    <Link href="/contact" className="nav-button">
        Let's talk ↗
    </Link>
</header>
);};
export default Navbar;
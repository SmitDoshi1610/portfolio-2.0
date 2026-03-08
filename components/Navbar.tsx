"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Profiles", path: "/profiles" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
            <div className="nav-container">
                <Link href="/" className="nav-logo">SD<span className="dot">.</span></Link>

                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`nav-link ${pathname === item.path ? "active" : ""}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ThemeToggle />
                    <a href="https://github.com/SmitDoshi1610" target="_blank" className="btn-hire">GitHub</a>
                    <button className="hamburger" id="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                        <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></span>
                        <span style={{ opacity: isMenuOpen ? '0' : '1' }}></span>
                        <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

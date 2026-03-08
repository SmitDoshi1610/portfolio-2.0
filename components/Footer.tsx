"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">SD<span className="dot">.</span></div>
                    <p className="footer-text">
                        Designed & Built with 💜 by <strong>Smit Doshi</strong>
                    </p>
                    <div className="footer-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div style={{
                    textAlign: 'center',
                    marginTop: '24px',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)'
                }}>
                    © {new Date().getFullYear()} Smit Doshi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

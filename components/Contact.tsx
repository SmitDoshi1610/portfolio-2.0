"use client";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setShowSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section className="contact section reveal-on-scroll" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Let's Talk</span>
                    <h2>Get In <span className="gradient-text">Touch</span></h2>
                    <p>Have a question or want to work together? Drop a message!</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>Email</h4>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <a href="mailto:smitdoshi1610@gmail.com">smitdoshi1610@gmail.com</a>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('smitdoshi1610@gmail.com');
                                            alert('Email copied to clipboard!');
                                        }}
                                        style={{
                                            background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.8rem'
                                        }}
                                        title="Copy Email"
                                    >
                                        📋
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h4>Location</h4>
                                <span>Gujarat, India</span>
                            </div>
                        </div>

                        <div className="social-links-container">
                            <h4>Social Profiles</h4>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/smit-doshi-1610/" target="_blank" className="social-btn" aria-label="LinkedIn">
                                    in
                                </a>
                                <a href="https://github.com/SmitDoshi1610" target="_blank" className="social-btn" aria-label="GitHub">
                                    gh
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className={`form-success ${showSuccess ? 'show' : ''}`}>
                            Message sent successfully! I'll get back to you soon.
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell me about your project..." rows={5} required></textarea>
                        </div>
                        <button type="submit" className="btn-primary btn-full" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

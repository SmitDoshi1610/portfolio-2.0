"use client";

export default function About() {
    return (
        <section className="about section reveal-on-scroll" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2>Driven by Curiosity, <span className="gradient-text">Guided by Performance</span></h2>
                    <p>A glimpse into my journey and what keeps me motivated.</p>
                </div>

                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-card-glow"></div>
                        <div className="about-avatar">
                            <div className="avatar-ring ring1"></div>
                            <div className="avatar-ring ring2"></div>
                            <div className="avatar-initials">SD</div>
                            <div className="avatar-badge">👨‍💻 3+ Years Coding</div>
                        </div>

                        <div className="floating-tags">
                            <span className="ftag ftag-1">TypeScript Expert</span>
                            <span className="ftag ftag-2">Angular Lover</span>
                            <span className="ftag ftag-3">MERN Stack</span>
                            <span className="ftag ftag-4">Problem Solver</span>
                        </div>
                    </div>

                    <div className="about-content">
                        <p className="about-lead">
                            Hi, I'm Smit Doshi, a Software Engineer at <strong>Zeus Learning</strong> and an IT graduate from <strong>VVP Engineering College</strong>.
                        </p>
                        <p className="about-text">
                            My core expertise lies in building scalable web applications using <strong>TypeScript, Angular, and Node.js</strong>.
                            I am passionate about creating clean, efficient code and optimizing user experiences.
                        </p>
                        <p className="about-text">
                            Beyond engineering, I led the <strong>CodeChef</strong> chapter at my college as President,
                            where I mentored peers in competitive programming and organized tech events.
                        </p>

                        <div className="about-hobbies">
                            <div className="hobby-card">
                                <span className="hobby-icon">🧩</span>
                                <div>
                                    <h4>DSA & Problem Solving</h4>
                                    <p>Consistently solving complex problems to refine logic and efficiency.</p>
                                </div>
                            </div>
                            <div className="hobby-card">
                                <span className="hobby-icon">🛠️</span>
                                <div>
                                    <h4>Learning New Tech</h4>
                                    <p>Always exploring the latest frameworks and development practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

const experiences = [
    {
        role: "Software Engineer",
        company: "Zeus Learning",
        logo: "https://media.licdn.com/dms/image/C4D0BAQG7t6zS7G9v7A/company-logo_200_200/0/1630571440621?e=2147483647&v=beta&t=7u_X6Gv6_Y6_Y_Y_Y", // Placeholder logo or standard icon
        duration: "Jul 2024 - Present",
        location: "Mumbai, Maharashtra, India · On-site",
        description: [
            "Specializing in full-stack development using TypeScript and Angular.",
            "Contributing to the development of robust educational technology solutions.",
            "Collaborating with cross-functional teams to deliver high-quality software features."
        ]
    },
    {
        role: "Campus President",
        company: "CodeChef Chapter",
        logo: "https://cdn.codechef.com/images/home/codechef_logo.svg",
        duration: "2021 - 2024",
        location: "VVP Engineering College, Rajkot",
        description: [
            "Led the college competitive programming chapter, mentoring 200+ students.",
            "Organized workshops, hackathons, and monthly coding contests.",
            "Promoted a culture of algorithmic problem-solving and collaboration."
        ]
    }
];

export default function Experience() {
    return (
        <section className="experience section reveal-on-scroll" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Journey</span>
                    <h2>Work <span className="gradient-text">Experience</span></h2>
                    <p>A professional timeline of my roles and contributions.</p>
                </div>

                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="exp-card">
                            <div className="exp-logo">
                                {/* Fallback to initials if logo is broken */}
                                <span className="logo-placeholder">{exp.company.substring(0, 1)}</span>
                            </div>
                            <div className="exp-content">
                                <div className="exp-header">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-company">{exp.company}</span>
                                    <div className="exp-meta">
                                        <span className="exp-duration">{exp.duration}</span>
                                        <span className="exp-dot">•</span>
                                        <span className="exp-location">{exp.location}</span>
                                    </div>
                                </div>
                                <ul className="exp-desc">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

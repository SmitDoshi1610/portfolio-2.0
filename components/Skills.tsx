"use client";

export default function Skills() {
    const skillGroups = [
        {
            title: "Languages",
            icon: "💻",
            skills: [
                { name: "TypeScript", class: "ts" },
                { name: "JavaScript", class: "js" },
                { name: "C++", class: "cpp" },
                { name: "Java", class: "java" },
                { name: "PHP", class: "php" }
            ]
        },
        {
            title: "Frontend",
            icon: "🎨",
            skills: [
                { name: "Angular", class: "ang" },
                { name: "React.js", class: "react" },
                { name: "HTML5", class: "html" },
                { name: "CSS3", class: "css" }
            ]
        },
        {
            title: "Backend & DB",
            icon: "⚙️",
            skills: [
                { name: "Node.js", class: "node" },
                { name: "Express.js", class: "node" },
                { name: "MongoDB", class: "mongo" },
                { name: "SQL", class: "sql" }
            ]
        },
        {
            title: "CS Fundamentals",
            icon: "🧠",
            skills: [
                { name: "Data Structures", class: "dsa" },
                { name: "Algorithms", class: "algo" },
                { name: "OOPs", class: "oop" },
                { name: "REST APIs", class: "api" }
            ]
        }
    ];

    return (
        <section className="skills section reveal-on-scroll" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Expertise</span>
                    <h2>Technical <span className="gradient-text">Skills</span></h2>
                    <p>Technologies I work with to bring ideas to life.</p>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group, idx) => (
                        <div key={idx} className="skill-category">
                            <h3 className="category-title">
                                <span className="cat-icon">{group.icon}</span> {group.title}
                            </h3>
                            <div className="skill-items">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-item">
                                        <div className={`skill-logo ${skill.class}`}>{skill.name.substring(0, 2)}</div>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

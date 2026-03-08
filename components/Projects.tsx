"use client";
import { useEffect, useRef } from "react";

const projects = [
    {
        title: "Real-time Chat App",
        desc: "A MERN stack application using Socket.io for instant messaging, featuring private rooms and real-time updates.",
        icon: "💬",
        tags: ["MERN", "Socket.io", "React"],
        github: "https://github.com/SmitDoshi1610/Realtime-Chat-Application"
    },
    {
        title: "Scientific Calculator",
        desc: "A feature-rich scientific calculator built with HTML, CSS, and JS, supporting complex operations and memory functions.",
        icon: "🧮",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/SmitDoshi1610/Scientific-Calculator"
    },
    {
        title: "Realtime Pizza App",
        desc: "Full-stack pizza ordering application with home delivery tracking and order management using Node.js and MongoDB.",
        icon: "🍕",
        tags: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/SmitDoshi1610/Realtime-Pizza-Application"
    },
    {
        title: "BookStore App",
        desc: "A modern bookstore web app where users can browse, search, and manage books effectively.",
        icon: "📚",
        tags: ["MERN", "Auth", "Tailwind"],
        github: "https://github.com/SmitDoshi1610/BookStore-App"
    },
    {
        title: "Movie Streaming Web",
        desc: "Integration with TMDB API to fetch and display trending movies, descriptions, and ratings in a sleek UI.",
        icon: "🎬",
        tags: ["TMDB API", "React", "CSS"],
        github: "https://github.com/SmitDoshi1610/Movie-Web-Application"
    },
    {
        title: "Weather App",
        desc: "Real-time weather data fetching based on user location or city input with dynamic background changes.",
        icon: "🌦️",
        tags: ["API", "JavaScript", "UI/UX"],
        github: "https://github.com/SmitDoshi1610/Weather-App"
    }
];

export default function Projects() {
    return (
        <section className="projects section reveal-on-scroll" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Showcase</span>
                    <h2>My Creative <span className="gradient-text">Projects</span></h2>
                    <p>A collection of applications that demonstrate my technical range.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((proj, idx) => {
                        const glowColors = ['#6c63ff', '#a855f7', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
                        const color = glowColors[idx % glowColors.length];
                        return (
                            <div key={idx} className="project-card" data-index={idx}>
                                <div className="project-glow" style={{ background: `radial-gradient(circle, ${color}11, transparent 70%)` }}></div>
                                <div className="project-header">
                                    <div className="project-icon">{proj.icon}</div>
                                    <div className="project-links">
                                        <a href={proj.github} target="_blank" className="proj-link" aria-label="GitHub Repo">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-desc">{proj.desc}</p>
                                <div className="project-tags">
                                    {proj.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="ptag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [roleText, setRoleText] = useState("");
    const [stats, setStats] = useState({ projects: 0, platforms: 0, coding: 0 });

    // Typewriter
    useEffect(() => {
        const roles = [
            'Software Engineer at Zeus Learning',
            'TypeScript & Angular Expert',
            'Full-Stack Developer',
            'DSA Enthusiast',
            'Competitive Programmer'
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const type = () => {
            const current = roles[roleIndex];
            if (isDeleting) {
                setRoleText(current.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    timeoutId = setTimeout(type, 400);
                } else {
                    timeoutId = setTimeout(type, 45);
                }
            } else {
                setRoleText(current.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(type, 2000);
                } else {
                    timeoutId = setTimeout(type, 70);
                }
            }
        };

        timeoutId = setTimeout(type, 800);
        return () => clearTimeout(timeoutId);
    }, []);

    // Stats Animation
    useEffect(() => {
        const targetStats = { projects: 9, platforms: 5, coding: 3 };
        const duration = 1500;
        let startTime: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setStats({
                projects: Math.floor(progress * targetStats.projects),
                platforms: Math.floor(progress * targetStats.platforms),
                coding: Math.floor(progress * targetStats.coding),
            });

            if (progress < 1) requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                requestAnimationFrame(step);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        const el = document.getElementById('home');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Canvas Particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particles: any[] = [];
        const PARTICLE_COUNT = 80;
        const CONNECTION_DIST = 140;

        class Particle {
            x: number = 0; y: number = 0; vx: number = 0; vy: number = 0; size: number = 0; color: string = ""; alpha: number = 0;
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.8 + 0.5;
                const hue = Math.random() > 0.5 ? 260 : 290;
                this.color = `hsl(${hue}, 80%, 70%)`;
                this.alpha = Math.random() * 0.6 + 0.2;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, i) => {
                p.update();
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                ctx.restore();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        ctx.save();
                        ctx.globalAlpha = (1 - dist / CONNECTION_DIST) * 0.25;
                        ctx.strokeStyle = '#6c63ff';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            });
            requestAnimationFrame(draw);
        };

        const animId = requestAnimationFrame(draw);
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} id="heroCanvas"></canvas>
            <div className="hero-content">
                <div className="hero-badge">👋 Available for opportunities</div>
                <h1 className="hero-title">
                    Hi, I'm <span className="gradient-text">Smit Doshi</span>
                </h1>
                <div className="hero-roles">
                    <span className="role-text">{roleText}</span><span className="cursor-blink">|</span>
                </div>
                <p className="hero-desc">
                    Software Engineer at <strong>Zeus Learning</strong> · TypeScript &amp; Angular Expert ·
                    Former President of <strong>CodeChef</strong> · Passionate about crafting scalable and innovative solutions.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">View My Work</a>
                    <a href="#contact" className="btn-secondary">Get In Touch</a>
                </div>
                <div className="hero-stats">
                    <div className="stat"><span className="stat-num">{stats.projects}+</span><span className="stat-label">Projects</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat"><span className="stat-num">{stats.platforms}+</span><span className="stat-label">Platforms</span></div>
                    <div className="stat-divider"></div>
                    <div className="stat"><span className="stat-num">{stats.coding}+</span><span className="stat-label">Years Coding</span></div>
                </div>
            </div>
            <div className="hero-scroll">
                <div className="scroll-indicator">
                    <span>Scroll</span>
                    <div className="scroll-line"></div>
                </div>
            </div>
        </section>
    );
}

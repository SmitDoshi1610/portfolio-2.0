"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        const refreshReveal = () => {
            const revealElements = document.querySelectorAll(".reveal-on-scroll");
            revealElements.forEach((el) => observer.observe(el));
        };

        refreshReveal();

        // Re-run on navigation
        const MutationObserver = window.MutationObserver;
        const observerNav = new MutationObserver(() => {
            refreshReveal();
        });

        observerNav.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            observerNav.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleMagnetic = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('.btn-primary, .btn-secondary, .btn-hire, .social-btn, .proj-link');
            if (!target) return;

            const btn = target as HTMLElement;
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        };

        const handleRelease = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('.btn-primary, .btn-secondary, .btn-hire, .social-btn, .proj-link');
            if (target) {
                (target as HTMLElement).style.transform = `translate(0px, 0px)`;
            }
        };

        window.addEventListener('mousemove', handleMagnetic);
        window.addEventListener('mouseout', handleRelease);

        return () => {
            window.removeEventListener('mousemove', handleMagnetic);
            window.removeEventListener('mouseout', handleRelease);
        };
    }, []);

    return null;
}

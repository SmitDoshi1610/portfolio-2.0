"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const mouseCoords = useRef({ x: 0, y: 0 });
    const followerCoords = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mouseCoords.current = { x: e.clientX, y: e.clientY };
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        const animateFollower = () => {
            const { x: targetX, y: targetY } = mouseCoords.current;
            const { x: currentX, y: currentY } = followerCoords.current;

            const nextX = currentX + (targetX - currentX) * 0.12;
            const nextY = currentY + (targetY - currentY) * 0.12;

            followerCoords.current = { x: nextX, y: nextY };

            if (followerRef.current) {
                followerRef.current.style.left = `${nextX}px`;
                followerRef.current.style.top = `${nextY}px`;
            }
            requestAnimationFrame(animateFollower);
        };

        window.addEventListener("mousemove", onMouseMove);
        const animId = requestAnimationFrame(animateFollower);

        const interactiveEls = document.querySelectorAll('a, button, .project-card, .profile-card, .skill-item, .hobby-card');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRef.current?.classList.add('active');
                followerRef.current?.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorRef.current?.classList.remove('active');
                followerRef.current?.classList.remove('active');
            });
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>
        </>
    );
}

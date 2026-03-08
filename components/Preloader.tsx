"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 30;
            if (p >= 100) {
                p = 100;
                clearInterval(interval);
                setTimeout(() => setFadeOut(true), 500);
            }
            setProgress(p);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    if (fadeOut && progress === 100) return null;

    return (
        <div className={`preloader ${fadeOut ? "fade-out" : ""}`} id="preloader">
            <div className="preloader-content">
                <div className="preloader-logo">SD<span className="dot">.</span></div>
                <div className="preloader-bar">
                    <div className="preloader-progress" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

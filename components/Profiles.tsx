"use client";
import Image from "next/image";
import { useState } from "react";

const profiles = [
    {
        name: "GeeksforGeeks",
        url: "https://auth.geeksforgeeks.org/user/smitdoshi1610/practice/",
        handle: "smitdoshi1610",
        desc: "300+ Problems Solved",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
        iconClass: "gfg-icon",
        color: "#2f8d46",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/SmitDoshi1610/",
        handle: "SmitDoshi1610",
        desc: "Consistent Solver",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
        iconClass: "lc-icon",
        color: "#ffa116",
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/users/smit_doshi16",
        handle: "smit_doshi16",
        desc: "Former Campus President",
        image: "https://cdn.codechef.com/images/home/codechef_logo.svg",
        iconClass: "cc-icon",
        color: "#6b4226",
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/profile/Smit_Doshi",
        handle: "Smit_Doshi",
        desc: "Competitive Programmer",
        image: "https://codeforces.org/s/0/images/codeforces-logo-with-telegram.png",
        iconClass: "cf-icon",
        color: "#1887f0",
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/smitdoshi1610",
        handle: "smitdoshi1610",
        desc: "Certified Developer",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Logo_2014.svg",
        iconClass: "hr-icon",
        color: "#32c766",
    },
];

function ProfileIcon({
    image,
    name,
    iconClass,
    color,
}: {
    image: string;
    name: string;
    iconClass: string;
    color: string;
}) {
    const [imgError, setImgError] = useState(false);

    if (!imgError) {
        return (
            <div className={`profile-icon-wrap ${iconClass}`}>
                <img
                    src={image}
                    alt={`${name} logo`}
                    className="profile-platform-img"
                    onError={() => setImgError(true)}
                    loading="lazy"
                />
            </div>
        );
    }

    // Fallback to initials if image fails to load
    return (
        <div
            className={`profile-icon-wrap ${iconClass}`}
            style={{ background: color, color: "#fff" }}
        >
            <span className="profile-initials">{name.substring(0, 2).toUpperCase()}</span>
        </div>
    );
}

export default function Profiles() {
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const { currentTarget: target, clientX, clientY } = e;
        const rect = target.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className="profiles section reveal-on-scroll" id="profiles">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Challenges</span>
                    <h2>Coding <span className="gradient-text">Profiles</span></h2>
                    <p>Where I sharpen my problem-solving skills and compete.</p>
                </div>

                <div className="profiles-grid">
                    {profiles.map((profile, idx) => (
                        <a 
                            key={idx} 
                            href={profile.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="profile-card"
                            onMouseMove={handleMouseMove}
                            style={{ "--brand-color": profile.color } as React.CSSProperties}
                        >
                            <div className="profile-hover-glow"></div>

                            {/* Platform Logo / Image */}
                            <ProfileIcon
                                image={profile.image}
                                name={profile.name}
                                iconClass={profile.iconClass}
                                color={profile.color}
                            />

                            {/* Info */}
                            <div className="profile-info">
                                <div className="profile-title-row">
                                    <h3>{profile.name}</h3>
                                    <span className="profile-arrow">↗</span>
                                </div>
                                <span className="profile-handle">@{profile.handle}</span>
                                <p className="profile-desc">{profile.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

import type { Metadata } from "next";
import Skills from "@/components/Skills";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Skills",
    description: `${siteConfig.name}'s technical skills — TypeScript, Angular, React, Next.js, Node.js, Data Structures & Algorithms, SQL, and competitive programming across 5+ coding platforms.`,
    keywords: [
        `${siteConfig.name} Skills`,
        "TypeScript Skills",
        "Angular Skills",
        "React Skills",
        "Next.js",
        "DSA",
        "Data Structures Algorithms",
        "Full-Stack Skills",
    ],
    alternates: { canonical: siteConfig.routes.skills },
    openGraph: {
        title: `Technical Skills | ${siteConfig.name}`,
        description: `Explore ${siteConfig.name}'s full skill set — TypeScript, Angular, React, Node.js, DSA, and more.`,
        url: siteConfig.routes.skills,
    },
};

export default function SkillsPage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <Skills />
        </main>
    );
}

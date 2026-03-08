import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Projects",
    description: `Browse ${siteConfig.name}'s portfolio of 9+ software projects including full-stack apps, TypeScript libraries, and competitive programming tools built with Angular, React, and Node.js.`,
    keywords: [
        `${siteConfig.name} Projects`,
        "Portfolio Projects",
        "TypeScript Projects",
        "Angular Projects",
        "React Projects",
        "Full-Stack Projects",
        "GitHub Projects",
    ],
    alternates: { canonical: siteConfig.routes.projects },
    openGraph: {
        title: `Projects by ${siteConfig.name} | ${siteConfig.author.jobTitle}`,
        description: `Explore 9+ projects by ${siteConfig.name} — full-stack apps, TypeScript libraries, and more.`,
        url: siteConfig.routes.projects,
    },
};

export default function ProjectsPage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <Projects />
        </main>
    );
}

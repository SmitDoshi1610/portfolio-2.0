import type { Metadata } from "next";
import Experience from "@/components/Experience";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Experience",
    description: `${siteConfig.name}'s professional experience — ${siteConfig.author.jobTitle} at ${siteConfig.author.employer}, working on TypeScript, Angular, and scalable web applications.`,
    keywords: [
        `${siteConfig.name} Experience`,
        `${siteConfig.author.employer} ${siteConfig.author.jobTitle}`,
        "TypeScript Work Experience",
        "Software Engineer Career",
        "Angular Developer Experience",
    ],
    alternates: { canonical: siteConfig.routes.experience },
    openGraph: {
        title: `Work Experience | ${siteConfig.name}`,
        description: `${siteConfig.name}'s professional journey as a ${siteConfig.author.jobTitle} at ${siteConfig.author.employer}.`,
        url: siteConfig.routes.experience,
    },
};

export default function ExperiencePage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <Experience />
        </main>
    );
}

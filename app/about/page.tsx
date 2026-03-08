import type { Metadata } from "next";
import About from "@/components/About";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "About Me",
    description: `Learn about ${siteConfig.name} — ${siteConfig.author.jobTitle} at ${siteConfig.author.employer}, TypeScript & Angular expert, former CodeChef chapter president, and ${siteConfig.author.college} alumnus.`,
    keywords: [
        `${siteConfig.name} About`,
        "Software Engineer Bio",
        `${siteConfig.author.employer} Engineer`,
        "TypeScript Angular Developer",
        siteConfig.author.college,
    ],
    alternates: { canonical: siteConfig.routes.about },
    openGraph: {
        title: `About ${siteConfig.name} | ${siteConfig.author.jobTitle}`,
        description: `Get to know ${siteConfig.name} — a passionate ${siteConfig.author.jobTitle} at ${siteConfig.author.employer} with expertise in TypeScript, Angular, and competitive programming.`,
        url: siteConfig.routes.about,
    },
};

export default function AboutPage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <About />
        </main>
    );
}

import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Contact",
    description: `Get in touch with ${siteConfig.name} — ${siteConfig.author.jobTitle} at ${siteConfig.author.employer}. Available for freelance work, collaborations, and full-time opportunities.`,
    keywords: [
        `Contact ${siteConfig.name}`,
        "Hire Software Engineer",
        "Hire TypeScript Developer",
        "Hire Angular Developer",
        `${siteConfig.name} Email`,
        "Software Engineer for Hire",
    ],
    alternates: { canonical: siteConfig.routes.contact },
    openGraph: {
        title: `Contact ${siteConfig.name} | ${siteConfig.author.jobTitle}`,
        description: `Reach out to ${siteConfig.name} for job opportunities, collaborations, or project inquiries.`,
        url: siteConfig.routes.contact,
    },
};

export default function ContactPage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <Contact />
        </main>
    );
}

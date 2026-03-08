import type { Metadata } from "next";
import Profiles from "@/components/Profiles";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Coding Profiles",
    description: `${siteConfig.name}'s competitive programming profiles on LeetCode, CodeChef, Codeforces, GitHub, and LinkedIn. Former CodeChef chapter president with a strong algorithmic background.`,
    keywords: [
        `${siteConfig.name} LeetCode`,
        `${siteConfig.name} CodeChef`,
        `${siteConfig.name} GitHub`,
        `${siteConfig.name} LinkedIn`,
        "Competitive Programming Profiles",
        "Coding Profiles",
    ],
    alternates: { canonical: siteConfig.routes.profiles },
    openGraph: {
        title: `Coding Profiles | ${siteConfig.name}`,
        description: `Find ${siteConfig.name} on LeetCode, CodeChef, GitHub, LinkedIn and more competitive programming platforms.`,
        url: siteConfig.routes.profiles,
    },
};

export default function ProfilesPage() {
    return (
        <main style={{ paddingTop: "var(--nav-h)" }}>
            <Profiles />
        </main>
    );
}

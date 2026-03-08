import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";


export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-03-08");
    const { routes } = siteConfig;

    return [
        { url: routes.home,       lastModified, changeFrequency: "monthly", priority: 1.0 },
        { url: routes.about,      lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: routes.projects,   lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: routes.experience, lastModified, changeFrequency: "monthly", priority: 0.8 },
        { url: routes.skills,     lastModified, changeFrequency: "monthly", priority: 0.8 },
        { url: routes.profiles,   lastModified, changeFrequency: "monthly", priority: 0.7 },
        { url: routes.contact,    lastModified, changeFrequency: "monthly", priority: 0.7 },
    ];
}

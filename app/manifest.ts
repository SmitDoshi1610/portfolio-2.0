import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.fullName,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0f",
        theme_color: siteConfig.themeColor,
        orientation: "portrait-primary",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
        categories: ["portfolio", "technology", "developer"],
        lang: "en",
    };
}

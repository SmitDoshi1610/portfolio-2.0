import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/static/"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                crawlDelay: 1,
            },
        ],
        sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
        host: siteConfig.baseUrl,
    };
}

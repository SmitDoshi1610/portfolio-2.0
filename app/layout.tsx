import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const viewport: Viewport = {
    themeColor: siteConfig.themeColor,
    colorScheme: "dark light",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
        default: siteConfig.fullName,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        siteConfig.name,
        "Software Engineer",
        siteConfig.author.employer,
        "TypeScript Developer",
        "Angular Expert",
        "Full-Stack Developer",
        "Portfolio",
        "DSA",
        "Competitive Programming",
        "React Developer",
        "Next.js Developer",
        "Frontend Engineer",
        "JavaScript",
        "Web Developer India",
        siteConfig.author.college,
        "CodeChef",
        "LeetCode",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.baseUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Technology",
    classification: "Portfolio",
    applicationName: siteConfig.siteName,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.baseUrl,
        siteName: siteConfig.siteName,
        title: siteConfig.fullName,
        description: siteConfig.description,
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} — Software Engineer & TypeScript Expert`,
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.fullName,
        description: siteConfig.description,
        images: [{ url: "/og-image.jpg", alt: siteConfig.siteName }],
        creator: siteConfig.author.twitterHandle,
    },
    alternates: {
        canonical: siteConfig.baseUrl,
        languages: {
            "en-US": siteConfig.baseUrl,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
    verification: {
        // Add your Google Search Console verification token here:
        // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    },
    other: {
        "mobile-web-app-capable": "yes",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black-translucent",
        "apple-mobile-web-app-title": siteConfig.name,
        "msapplication-TileColor": siteConfig.themeColor,
        "msapplication-config": "/browserconfig.xml",
        "format-detection": "telephone=no",
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    image: siteConfig.images.ogImage,
    jobTitle: siteConfig.author.jobTitle,
    description: siteConfig.description,
    email: siteConfig.author.email,
    nationality: "Indian",
    worksFor: {
        "@type": "Organization",
        name: siteConfig.author.employer,
        url: siteConfig.author.employerUrl,
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.author.college,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.author.collegeCity,
            addressCountry: "IN",
        },
    },
    knowsAbout: [
        "TypeScript", "Angular", "React", "Next.js",
        "Full-Stack Development", "Data Structures & Algorithms",
        "Competitive Programming", "JavaScript", "Node.js",
    ],
    sameAs: Object.values(siteConfig.socials),
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    author: { "@type": "Person", name: siteConfig.name },
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.baseUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",       item: siteConfig.routes.home },
        { "@type": "ListItem", position: 2, name: "About",      item: siteConfig.routes.about },
        { "@type": "ListItem", position: 3, name: "Projects",   item: siteConfig.routes.projects },
        { "@type": "ListItem", position: 4, name: "Experience", item: siteConfig.routes.experience },
        { "@type": "ListItem", position: 5, name: "Skills",     item: siteConfig.routes.skills },
        { "@type": "ListItem", position: 6, name: "Profiles",   item: siteConfig.routes.profiles },
        { "@type": "ListItem", position: 7, name: "Contact",    item: siteConfig.routes.contact },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://github.com" />
                <link rel="dns-prefetch" href="https://linkedin.com" />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QES41G37S2" strategy="afterInteractive"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-QES41G37S2');
                `}
                </Script>
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                <Preloader />
                <CustomCursor />
                <Navbar />
                <GlobalEffects />
                {children}
                <Footer />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            </body>
        </html>
    );
}

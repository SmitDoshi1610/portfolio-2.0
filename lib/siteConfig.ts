/**
 * Central site configuration — pull everything from env vars so nothing is hardcoded.
 *
 * Set NEXT_PUBLIC_SITE_URL in your .env file:
 *   NEXT_PUBLIC_SITE_URL=https://smitdoshi1610.github.io/Portfolio
 */
const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://smitdoshi1610.github.io/Portfolio";

export const siteConfig = {
    baseUrl: BASE_URL,
    name: "Smit Doshi",
    fullName: "Smit Doshi | Full Stack Developer",
    siteName: "Smit Doshi Portfolio",
    description:
        "Smit Doshi is a Software Engineer at Zeus Learning specializing in TypeScript, Angular, and full-stack development. Explore his projects, experience, and skills.",
    themeColor: "#6c63ff",
    locale: "en_US",
    author: {
        name: "Smit Doshi",
        email: "smitdoshi1610@gmail.com",
        jobTitle: "Software Engineer",
        employer: "Zeus Learning",
        employerUrl: "https://www.zeuslearning.com",
        college: "VVP Engineering College",
        collegeCity: "Rajkot",
        twitterHandle: "@SmitDoshi",
    },
    socials: {
        github: "https://github.com/SmitDoshi1610",
        linkedin: "https://www.linkedin.com/in/smit-doshi-1610/",
        leetcode: "https://leetcode.com/SmitDoshi1610/",
        codechef: "https://www.codechef.com/users/smit_doshi16",
    },
    images: {
        ogImage: `${BASE_URL}/og-image.png`,
        icon192: `${BASE_URL}/icon-192.png`,
        icon512: `${BASE_URL}/icon-512.png`,
        appleTouchIcon: `${BASE_URL}/apple-touch-icon.png`,
    },
    routes: {
        home: BASE_URL,
        about: `${BASE_URL}/about`,
        projects: `${BASE_URL}/projects`,
        experience: `${BASE_URL}/experience`,
        skills: `${BASE_URL}/skills`,
        profiles: `${BASE_URL}/profiles`,
        contact: `${BASE_URL}/contact`,
    },
} as const;

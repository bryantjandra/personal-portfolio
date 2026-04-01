import type { WorkExperience, Project } from "../types";

export const experiences: WorkExperience[] = [
  {
    logo: "/tiktokLogo.jpeg",
    company: "TikTok",
    role: "Software Engineer • TikTok Live",
    date: "Jul 2026 - Present",
    url: "https://lifeattiktok.com/",
  },
  {
    logo: "/tiktokLogo.jpeg",
    company: "TikTok",
    role: "Software Engineer Intern • TikTok Live",
    date: "2025",
    url: "https://lifeattiktok.com/",
  },
  {
    logo: "/wsaLogo.jpg",
    company: "WSAudiology",
    role: "Backend Engineer Intern • R&D",
    date: "2024",
    url: "https://www.wsa.com/",
  },
  {
    logo: "/mulaiCodingLogo.png",
    company: "Mulai Coding",
    role: "Software Engineer Intern • Engineering",
    date: "2024",
    url: "https://mulaicoding.com/",
  },
];

export const projects: Project[] = [
  {
    logo: "/youtubeLogo.png",
    title: "juniorSWE",
    description: "trying to make people laugh",
    completeDescription: [
      "Documenting the highs and lows of life as a junior software engineer",
      "Currently at 8 subscribers lol",
    ],
    url: "https://www.youtube.com/@juniorSWE",
  },
  {
    logo: "/codexPrep.png",
    title: "codexprep",
    description:
      "ace actual SWE interviews that don't ask leetcode problems (2530+ users).",
    completeDescription: [
      "Prepares candidates for real-world SWE interviews — system design, take-homes, and behavioral rounds",
      "Featured #1 on Product Hunt for a full week",
      "Built with Next.js, PostgreSQL, and Stripe",
      "Over 2,530 users across 40+ countries",
    ],
    url: "https://www.codexprep.com/",
  },
];

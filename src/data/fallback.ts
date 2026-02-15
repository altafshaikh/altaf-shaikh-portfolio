// ── Types ──

export interface HeroData {
  headline: string;
  subHeadline: string;
  profileImage: string;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string; link: string };
}

export interface SkillItem {
  name: string;
  icon: string;
  category: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  url: string;
  image?: string | null;
}

export interface Talk {
  title: string;
  type: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  isFeatured: boolean;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  youtube: string;
  instagram: string;
}

// ── Fallback Data ──

export const fallbackData = {
  hero: {
    headline: "Code is Poetry, AI is the Rhythm.",
    subHeadline:
      "Exploring AI Disruption & Modern Development. SDE by day, Mentor by choice.",
    profileImage: "/images/altaf-profile.png",
    ctaPrimary: { text: "Watch My Talks", link: "#talks" },
    ctaSecondary: { text: "Let's Connect", link: "#footer" },
  } satisfies HeroData,

  skills: [
    { name: "Next.js", icon: "nextjs", category: "Frontend" },
    { name: "React", icon: "react", category: "Frontend" },
    { name: "TypeScript", icon: "typescript", category: "Language" },
    { name: "Node.js", icon: "nodejs", category: "Backend" },
    { name: "AI / LLM Integration", icon: "ai", category: "AI" },
    { name: "MongoDB", icon: "mongodb", category: "Database" },
    { name: "Docker", icon: "docker", category: "DevOps" },
    { name: "Kubernetes", icon: "kubernetes", category: "DevOps" },
  ] satisfies SkillItem[],

  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Students Impacted" },
    { value: "10+", label: "Public Talks" },
  ] satisfies StatItem[],

  blogs: [
    {
      title: "From Open Source to Career Growth",
      excerpt:
        "My journey through open source contributions and how it shaped my career as a software developer and educator.",
      tag: "Career",
      date: "2025-10-05",
      url: "https://blog.teachmebro.com/",
    },
    {
      title: "Building Scalable APIs with Node.js and LLMs",
      excerpt:
        "A deep dive into integrating Large Language Models into your backend architecture for intelligent API responses.",
      tag: "Backend",
      date: "2025-11-20",
      url: "https://blog.teachmebro.com/",
    },
    {
      title: "The AI Revolution in Frontend Development",
      excerpt:
        "How AI-powered tools are transforming the way we build modern web applications, from code generation to intelligent testing.",
      tag: "AI",
      date: "2025-12-15",
      url: "https://blog.teachmebro.com/",
    },
  ] satisfies BlogPost[],

  talks: [
    {
      title: "Web Development Best Practices for Beginners",
      type: "mentoring",
      description:
        "Fundamental best practices for developing applications, covering GIT, GITHUB, responsive design, and how to achieve responsiveness using Flexbox.",
      videoUrl: "https://www.youtube.com/watch?v=BxXB73iFcTE",
      thumbnail:
        "https://img.youtube.com/vi/BxXB73iFcTE/hqdefault.jpg",
      isFeatured: false,
    },
    {
      title:
        "Introduction To Open Source And Participate In Hacktoberfest",
      type: "webinar",
      description:
        "Open Source removes barriers between innovators and promotes a free exchange of ideas. Learn how to participate and contribute to open source projects.",
      videoUrl: "https://www.youtube.com/watch?v=_RD8WFtfB3U",
      thumbnail:
        "https://img.youtube.com/vi/_RD8WFtfB3U/hqdefault.jpg",
      isFeatured: false,
    },
    {
      title:
        "Building Todo REST API Backend Using NodeJS Express And MongoDB",
      type: "workshop",
      description:
        "Developing a REST based API allows you to expose functionality of your web service over HTTP. In this workshop we cover everything you need to know to build powerful REST APIs in NodeJS.",
      videoUrl: "https://www.youtube.com/watch?v=hsGOl_28R10",
      thumbnail:
        "https://img.youtube.com/vi/hsGOl_28R10/hqdefault.jpg",
      isFeatured: true,
    },
  ] satisfies Talk[],

  social: {
    linkedin: "https://www.linkedin.com/in/ialtafshaikh/",
    github: "https://github.com/altafshaikh/",
    youtube:
      "https://www.youtube.com/channel/UCTSIdPsYXRRp5ABnuw_-uOA",
    instagram: "https://www.instagram.com/ialtafshaikh/",
  } satisfies SocialLinks,
};

import { fallbackData } from "@/data/fallback";
import type {
  HeroData,
  SkillItem,
  StatItem,
  BlogPost,
  Talk,
  SocialLinks,
} from "@/data/fallback";

// For now, use fallback data directly.
// When Contentstack is fully configured with delivery token,
// uncomment the CMS fetch functions below.

export async function getHeroData(): Promise<HeroData> {
  // TODO: Fetch from Contentstack when delivery token is ready
  // try {
  //   const result = await stack.contentType("hero_section").entry().find();
  //   if (result.entries?.length) return mapHeroEntry(result.entries[0]);
  // } catch (e) { console.warn("CMS fetch failed, using fallback"); }
  return fallbackData.hero;
}

export async function getSkills(): Promise<SkillItem[]> {
  return fallbackData.skills;
}

export async function getStats(): Promise<StatItem[]> {
  return fallbackData.stats;
}

export async function getBlogs(): Promise<BlogPost[]> {
  return fallbackData.blogs;
}

export async function getTalks(): Promise<Talk[]> {
  return fallbackData.talks;
}

export async function getSocialLinks(): Promise<SocialLinks> {
  return fallbackData.social;
}

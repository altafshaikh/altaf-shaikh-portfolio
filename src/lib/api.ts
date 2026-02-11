import stack from "@/lib/contentstack";
import { fallbackData } from "@/data/fallback";
import type {
  HeroData,
  SkillItem,
  StatItem,
  BlogPost,
  Talk,
  SocialLinks,
} from "@/data/fallback";

// ── Helpers ──

/* eslint-disable @typescript-eslint/no-explicit-any */
function pick<T>(obj: any, keys: string[]): T {
  const out: any = {};
  for (const k of keys) {
    if (obj[k] !== undefined) out[k] = obj[k];
  }
  return out as T;
}

// ── Hero ──

export async function getHeroData(): Promise<HeroData> {
  if (!stack) return fallbackData.hero;
  try {
    const result = await stack
      .contentType("hero_section")
      .entry()
      .find<any>();
    const e = result.entries?.[0];
    if (e) {
      return {
        headline: e.headline ?? fallbackData.hero.headline,
        subHeadline: e.sub_headline ?? fallbackData.hero.subHeadline,
        profileImage: e.profile_image?.url ?? fallbackData.hero.profileImage,
        ctaPrimary: {
          text: e.cta_primary_text ?? fallbackData.hero.ctaPrimary.text,
          link: e.cta_primary_link ?? fallbackData.hero.ctaPrimary.link,
        },
        ctaSecondary: {
          text: e.cta_secondary_text ?? fallbackData.hero.ctaSecondary.text,
          link: e.cta_secondary_link ?? fallbackData.hero.ctaSecondary.link,
        },
      };
    }
  } catch (err) {
    console.warn("[CMS] hero_section fetch failed, using fallback:", err);
  }
  return fallbackData.hero;
}

// ── Skills ──

export async function getSkills(): Promise<SkillItem[]> {
  if (!stack) return fallbackData.skills;
  try {
    const result = await stack
      .contentType("skill_item")
      .entry()
      .find<any>();
    if (result.entries?.length) {
      return result.entries
        .sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99))
        .map((e: any) => pick<SkillItem>(e, ["name", "icon", "category"]));
    }
  } catch (err) {
    console.warn("[CMS] skill_item fetch failed, using fallback:", err);
  }
  return fallbackData.skills;
}

// ── Stats ──

export async function getStats(): Promise<StatItem[]> {
  if (!stack) return fallbackData.stats;
  try {
    const result = await stack
      .contentType("stat_item")
      .entry()
      .find<any>();
    if (result.entries?.length) {
      return result.entries
        .sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99))
        .map((e: any) => pick<StatItem>(e, ["value", "label"]));
    }
  } catch (err) {
    console.warn("[CMS] stat_item fetch failed, using fallback:", err);
  }
  return fallbackData.stats;
}

// ── Blogs ──

export async function getBlogs(): Promise<BlogPost[]> {
  if (!stack) return fallbackData.blogs;
  try {
    const result = await stack
      .contentType("blog_post")
      .entry()
      .find<any>();
    if (result.entries?.length) {
      return result.entries.map((e: any) => ({
        title: e.title,
        excerpt: e.excerpt,
        tag: e.tag,
        date: e.date,
        url: e.external_url ?? "#",
        image: e.featured_image?.url ?? null,
      }));
    }
  } catch (err) {
    console.warn("[CMS] blog_post fetch failed, using fallback:", err);
  }
  return fallbackData.blogs;
}

// ── Talks ──

export async function getTalks(): Promise<Talk[]> {
  if (!stack) return fallbackData.talks;
  try {
    const result = await stack
      .contentType("talk")
      .entry()
      .find<any>();
    if (result.entries?.length) {
      return result.entries.map((e: any) => ({
        title: e.title,
        type: e.type,
        description: e.description,
        videoUrl: e.video_url,
        thumbnail:
          e.thumbnail_url ??
          `https://img.youtube.com/vi/${extractYouTubeId(e.video_url)}/maxresdefault.jpg`,
        isFeatured: e.is_featured ?? false,
      }));
    }
  } catch (err) {
    console.warn("[CMS] talk fetch failed, using fallback:", err);
  }
  return fallbackData.talks;
}

// ── Social Links ──

export async function getSocialLinks(): Promise<SocialLinks> {
  if (!stack) return fallbackData.social;
  try {
    const result = await stack
      .contentType("social_links")
      .entry()
      .find<any>();
    const e = result.entries?.[0];
    if (e) {
      return pick<SocialLinks>(e, [
        "linkedin",
        "github",
        "youtube",
        "instagram",
      ]);
    }
  } catch (err) {
    console.warn("[CMS] social_links fetch failed, using fallback:", err);
  }
  return fallbackData.social;
}

// ── Utilities ──

function extractYouTubeId(url: string): string {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?/]+)/
  );
  return match?.[1] ?? "";
}

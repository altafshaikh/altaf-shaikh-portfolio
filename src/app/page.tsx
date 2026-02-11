import {
  getHeroData,
  getSkills,
  getStats,
  getBlogs,
  getTalks,
} from "@/lib/api";
import HeroSection from "@/components/sections/HeroSection";
import BentoGridSkills from "@/components/sections/BentoGridSkills";
import DisruptionBlogs from "@/components/sections/DisruptionBlogs";
import TalksSection from "@/components/sections/TalksSection";

export default async function Home() {
  const [hero, skills, stats, blogs, talks] = await Promise.all([
    getHeroData(),
    getSkills(),
    getStats(),
    getBlogs(),
    getTalks(),
  ]);

  return (
    <main>
      <HeroSection data={hero} />
      <BentoGridSkills skills={skills} stats={stats} />
      <DisruptionBlogs blogs={blogs} />
      <TalksSection talks={talks} />
    </main>
  );
}

import {
  getHeroData,
  getSkills,
  getStats,
  getBlogs,
  getTalks,
} from "@/lib/api";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BentoGridSkills from "@/components/sections/BentoGridSkills";
import ImpactSection from "@/components/sections/ImpactSection";
import TalksSection from "@/components/sections/TalksSection";
import DisruptionBlogs from "@/components/sections/DisruptionBlogs";

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
      <AboutSection />
      <BentoGridSkills skills={skills} />
      <ImpactSection stats={stats} />
      <TalksSection talks={talks} />
      <DisruptionBlogs blogs={blogs} />
    </main>
  );
}

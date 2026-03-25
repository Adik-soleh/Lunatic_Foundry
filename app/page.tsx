import Hero from '@/components/sections/Hero';
import LogoWall from '@/components/sections/LogoWall';
import BentoGrid from '@/components/sections/BentoGrid';
import HowWeWork from '@/components/sections/HowWeWork';
import FeaturedWorks from '@/components/sections/FeaturedWorks';
import MidCTA from '@/components/sections/MidCTA';
import StatsCounter from '@/components/sections/StatsCounter';
import Testimonials from '@/components/sections/Testimonials';

const heroMediaMode: 'cards' | 'video' = 'video';

export default function HomePage() {
  return (
    <>
      <Hero mediaMode={heroMediaMode} videoSrc="/hero/hero-showreel.mp4" videoPoster="/hero/fallbackHero1.jpeg" />
      <div className="relative z-10 bg-white">
        <LogoWall />
        <BentoGrid />
        <HowWeWork />
        <FeaturedWorks />
        <MidCTA />
        <StatsCounter />
        <Testimonials />
      </div>
    </>
  );
}

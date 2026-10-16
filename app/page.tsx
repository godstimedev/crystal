import { About } from "@/components/About";
import { BuildingChapter } from "@/components/BuildingChapter";
import { CityChapter } from "@/components/CityChapter";
import { GenerationChapter } from "@/components/GenerationChapter";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ObjectChapter } from "@/components/ObjectChapter";
import { Preloader } from "@/components/Preloader";
import { ProfessionChapter } from "@/components/ProfessionChapter";
import { ScaleIndex } from "@/components/ScaleIndex";
import { SiteFooter } from "@/components/SiteFooter";
import { StartRoutes } from "@/components/StartRoutes";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <Preloader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-3 focus:text-espresso"
      >
        Skip to content
      </a>
      <ScaleIndex />
      <main id="main">
        <Hero />
        <Intro />
        <ObjectChapter />
        <BuildingChapter />
        <ProfessionChapter />
        <CityChapter />
        <GenerationChapter />
        <StartRoutes />
        <About />
      </main>
      <SiteFooter />
      <StructuredData />
    </>
  );
}

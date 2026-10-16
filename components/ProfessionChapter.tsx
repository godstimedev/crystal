import Image from "next/image";

import { ChapterHeader } from "@/components/ChapterHeader";
import { CtaLink } from "@/components/CtaLink";
import { Placeholder } from "@/components/Placeholder";
import { tea } from "@/content/site";

export function ProfessionChapter() {
  return (
    <section id="profession" aria-labelledby="profession-title" className="bg-espresso">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[6/5] min-h-[360px] lg:aspect-auto">
          <Image
            src={tea.portrait.src}
            alt={tea.portrait.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center px-5 py-16 md:px-10 md:py-24 lg:px-20">
          <ChapterHeader id="profession" tone="dark" />
          <h3 className="reveal mt-10 font-italiana text-5xl leading-[1.02] md:text-6xl">{tea.name}</h3>
          <p className="mt-2 text-[11px] uppercase tracking-label text-laterite-soft">{tea.shortName}</p>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-cream/80">{tea.description}</p>
          <Placeholder tone="dark" className="mt-8 max-w-lg">
            {tea.placeholder}
          </Placeholder>
          <CtaLink link={tea.cta} variant="light" className="mt-10 self-start" />
        </div>
      </div>
    </section>
  );
}

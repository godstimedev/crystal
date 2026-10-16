import Image from "next/image";

import { ChapterHeader } from "@/components/ChapterHeader";
import { CtaLink } from "@/components/CtaLink";
import { ProjectGallery } from "@/components/ProjectGallery";
import { studioCoka } from "@/content/site";

export function BuildingChapter() {
  const { lead } = studioCoka;

  return (
    <section id="building" aria-labelledby="building-title" className="bg-cream text-espresso">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-10 md:pt-28 lg:px-24">
        <ChapterHeader id="building" tone="light" />
      </div>

      <figure className="mt-12">
        <div className="relative h-[56vh] max-h-[860px] md:h-[78vh]">
          <Image
            src={lead.photo.src}
            alt={lead.photo.alt}
            fill
            sizes="100vw"
            quality={90}
            placeholder="blur"
            className="object-cover object-[50%_60%]"
          />
        </div>
        <figcaption className="mx-auto mt-3 max-w-7xl px-5 text-[11px] uppercase tracking-[0.18em] text-muted md:px-10 lg:px-24">
          {lead.caption}
        </figcaption>
      </figure>

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <h3 className="font-italiana text-6xl leading-none md:text-7xl lg:col-span-6">{studioCoka.name}</h3>
          <div className="lg:col-span-6">
            <p className="text-lg leading-relaxed">{studioCoka.description}</p>
            <p className="mt-5 font-display text-2xl italic text-laterite">{studioCoka.approach}</p>
            <CtaLink link={studioCoka.cta} variant="dark" className="mt-8" />
          </div>
        </div>

        {studioCoka.projects.map((project) => (
          <ProjectGallery key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

import { ChapterHeader } from "@/components/ChapterHeader";
import { CtaLink } from "@/components/CtaLink";
import { speaking } from "@/content/site";

export function CityChapter() {
  const { research } = speaking;

  return (
    <section id="city" aria-labelledby="city-title" className="bg-sand text-espresso">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28 lg:px-24">
        <ChapterHeader id="city" tone="light" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-label text-muted">{speaking.eyebrow}</p>
            <h3 className="reveal mt-4 font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-light leading-[1.06]">
              {speaking.heading}
            </h3>
            <ol className="mt-12 grid border-t border-espresso/25 sm:grid-cols-2 lg:grid-cols-3">
              {speaking.topics.map((topic, i) => (
                <li key={topic} className="flex gap-4 border-b border-espresso/25 py-4">
                  <span aria-hidden="true" className="pt-2 text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl">{topic}</span>
                </li>
              ))}
            </ol>
            <CtaLink link={speaking.cta} variant="dark" className="mt-10" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-line lg:col-span-4">
            <Image
              src={speaking.portrait.src}
              alt={speaking.portrait.alt}
              fill
              sizes="(min-width: 1280px) 340px, (min-width: 1024px) 30vw, 100vw"
              placeholder="blur"
              className="object-cover object-[60%_center]"
            />
          </div>
        </div>

        <div className="mt-20">
          <h4 className="text-[11px] uppercase tracking-label text-muted">{research.eyebrow}</h4>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {research.items.map((item) => (
              <li key={item.kind}>
                <a href={item.href} className="placeholder-light block min-h-[170px] p-6">
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-muted">
                    Placeholder · {item.kind}
                  </span>
                  <span className="mt-3 block font-display text-2xl">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

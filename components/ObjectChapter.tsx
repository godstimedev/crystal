import { ChapterHeader } from "@/components/ChapterHeader";
import { CtaLink } from "@/components/CtaLink";
import { elevated } from "@/content/site";

/* Deliberately compact and typographic, so Studio COKA is the first big visual moment. */
export function ObjectChapter() {
  return (
    <section id="object" aria-labelledby="object-title" className="bg-espresso">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-10 md:py-28 lg:px-24">
        <ChapterHeader id="object" tone="dark" />

        <div className="reveal mt-12 grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <h3 className="font-italiana text-6xl leading-none md:col-span-5 md:text-7xl">{elevated.name}</h3>
          <div className="md:col-span-7">
            <p className="text-[17px] leading-relaxed text-cream/80">{elevated.description}</p>
            <p className="mt-5 font-display text-2xl italic text-cream/90">{elevated.line}</p>
            <CtaLink link={elevated.cta} variant="outline" className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

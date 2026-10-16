import { ChapterHeader } from "@/components/ChapterHeader";
import { CtaLink } from "@/components/CtaLink";
import { generation } from "@/content/site";

export function GenerationChapter() {
  return (
    <section id="generation" aria-labelledby="generation-title" className="bg-night">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28 lg:px-24">
        <ChapterHeader id="generation" tone="dark" />

        <h3 className="reveal mt-14 max-w-4xl font-display text-[clamp(2.2rem,4.2vw,3.8rem)] font-light leading-[1.08]">
          {generation.headline} <em className="text-laterite-soft">{generation.emphasis}</em>
        </h3>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {generation.brands.map((brand) => (
            <article key={brand.name} className="reveal border-t border-cream/20 pt-8">
              <h4 className="font-italiana text-4xl md:text-5xl">{brand.name}</h4>
              <p className="mt-4 text-[17px] leading-relaxed text-cream/80">{brand.description}</p>
              <CtaLink link={brand.cta} variant="outline" className="mt-7" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { chapters, intro } from "@/content/site";

/* One square per scale, growing left to right; the last (Generation) is filled. */
const squareSizes = ["size-3", "size-5", "size-8", "size-11", "size-14"];

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="bg-cream text-espresso">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-12 lg:px-24">
        <h2
          id="intro-title"
          className="reveal font-display text-[clamp(2rem,4vw,3.6rem)] font-light leading-[1.12] lg:col-span-7"
        >
          {intro.statement} <em className="text-laterite">{intro.emphasis}</em>
        </h2>

        <div className="lg:col-span-5 lg:pt-3">
          <p className="text-[17px] leading-relaxed text-muted">{intro.body}</p>

          <ol
            aria-label="The five scales"
            className="mt-12 grid grid-cols-5 items-end gap-2 text-[9px] uppercase tracking-[0.06em] sm:text-[11px] sm:tracking-[0.16em]"
          >
            {chapters.map((chapter, i) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className="flex flex-col items-start gap-3 hover:text-laterite">
                  <span
                    aria-hidden="true"
                    className={`block ${squareSizes[i]} ${i === chapters.length - 1 ? "bg-espresso" : "border border-espresso"}`}
                  />
                  {chapter.scale}
                </a>
              </li>
            ))}
          </ol>

          <a
            href={intro.cta.href}
            className="mt-12 inline-block border-b border-espresso pb-1 text-xs uppercase tracking-[0.2em]"
          >
            {intro.cta.label} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

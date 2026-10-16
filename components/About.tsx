import Image from "next/image";

import { Placeholder } from "@/components/Placeholder";
import { about, site } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-cream text-espresso">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:pb-28 lg:px-24">
        <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden bg-line md:col-span-4">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            fill
            sizes="(min-width: 768px) 384px, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        <div className="md:col-span-8 md:pl-6">
          <h2 id="about-title" className="text-[11px] uppercase tracking-label text-muted">
            {about.eyebrow}
          </h2>
          <p className="mt-5 font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-snug">{about.statement}</p>
          <Placeholder tone="light" className="mt-7 max-w-xl">
            {about.bioPlaceholder}
          </Placeholder>
          <Placeholder tone="light" className="mt-3 max-w-xl">
            {about.recognitionPlaceholder}
          </Placeholder>

          {/* Signature cropped from the logo sheet; multiply drops the sheet's background into the page */}
          <div role="img" aria-label={`${site.name}’s signature`} className="relative mt-10 h-[85px] w-[260px] overflow-hidden">
            <Image
              src={about.signatureSheet}
              alt=""
              width={1316}
              height={439}
              sizes="1316px"
              className="absolute -left-[602px] -top-[273px] max-w-none mix-blend-multiply brightness-[1.06] contrast-[1.25]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { hero, site } from "@/content/site";

export function Hero() {
  const [firstName, lastName] = site.name.split(" ");

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex h-[calc(100svh-3rem)] max-h-[1000px] min-h-[600px] flex-col overflow-hidden bg-night lg:h-svh"
    >
      <Image
        src={hero.portrait.src}
        alt={hero.portrait.alt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        quality={90}
        placeholder="blur"
        className="hero-in -z-10 object-cover object-[40%_30%] lg:object-[62%_30%]"
      />
      {/* Darkens the side the text sits on: bottom on mobile, left on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-night via-night/55 to-night/10 lg:bg-linear-to-r lg:from-night/90 lg:via-night/40 lg:to-transparent"
      />

      <header className="hidden h-24 items-center justify-between px-24 lg:flex">
        <span aria-hidden="true" className="font-italiana text-3xl">
          {site.monogram}
        </span>
        <a
          href={site.contact.href}
          className="border border-cream/70 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-espresso"
        >
          {site.contact.label}
        </a>
      </header>

      <div className="mt-auto px-5 pb-8 lg:px-24 lg:pb-12">
        <p className="rise text-[11px] uppercase tracking-label text-cream/80">{hero.roles.join(" · ")}</p>
        <h1
          id="hero-title"
          className="rise mt-5 font-italiana text-[clamp(3.6rem,12.5vw,11.5rem)] uppercase leading-[0.86] tracking-[0.01em] [--delay:100ms]"
        >
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="rise mt-5 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] italic [--delay:220ms]">
          {hero.tagline}
        </p>

        <nav
          aria-label="Jump to"
          className="rise mt-10 flex flex-col gap-y-3 border-t border-cream/25 pt-5 text-xs uppercase tracking-[0.18em] [--delay:340ms] sm:flex-row sm:flex-wrap sm:gap-x-10 lg:mt-14"
        >
          <span aria-hidden="true" className="text-cream/60">
            Jump to
          </span>
          {hero.jumpTo.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-laterite-soft">
              {link.label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

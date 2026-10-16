"use client";

import { useEffect, useRef, useState } from "react";

import type { Chapter, Link } from "@/content/site";

type Props = { chapters: Chapter[]; links: Link[]; contact: Link; monogram: string; name: string };

/* Same growing squares as the chapter headers: the menu itself reads "every scale". */
const motifSizes = ["size-1.5", "size-2.5", "size-[15px]", "size-[21px]", "size-7"];

/* Sticky top bar + full-screen menu on mobile. The only client component on the page. */
export function MobileMenu({ chapters, links, contact, monogram, name }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // While open: stop the page scrolling behind the menu, and let Escape close it
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  // Rows rise in one after another on open; on close everything leaves together
  const riseClass = `motion-safe:transition motion-safe:duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`;
  const riseDelay = (step: number) => ({ transitionDelay: open ? `${180 + step * 60}ms` : "0ms" });

  return (
    <nav aria-label="Chapters" className="sticky top-0 z-40 lg:hidden">
      {/* Full-screen panel; drops like a curtain (the preloader's lift, reversed) */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 flex flex-col overflow-y-auto bg-night px-5 pb-10 pt-16 motion-safe:transition-[clip-path] motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.7,0,0.2,1)] ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <ol>
          {chapters.map((chapter, i) => (
            <li key={chapter.id} style={riseDelay(i)} className={`border-b border-cream/10 ${riseClass}`}>
              <a href={`#${chapter.id}`} onClick={close} className="flex items-center gap-4 py-4">
                <span className="w-6 shrink-0 self-start pt-2 text-[11px] text-laterite-soft">{chapter.number}</span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-italiana text-4xl uppercase leading-none tracking-[0.04em]">{chapter.scale}</span>
                  <span className="mt-2 text-sm text-cream/70">{chapter.brand}</span>
                </span>
                <span aria-hidden="true" className="ml-auto flex w-7 shrink-0 justify-center">
                  <span className={`block border border-cream/50 ${motifSizes[i]}`} />
                </span>
              </a>
            </li>
          ))}
        </ol>

        <div style={riseDelay(chapters.length)} className={`mt-auto pt-10 ${riseClass}`}>
          <ul className="space-y-4 text-xs uppercase tracking-[0.2em]">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.href}
            onClick={close}
            className="mt-8 inline-block border border-cream/70 px-6 py-3.5 text-xs uppercase tracking-[0.2em]"
          >
            {contact.label}
          </a>
        </div>
      </div>

      {/* Bar sits above the panel, so the same button opens and closes it */}
      <div
        className={`relative flex h-12 items-center justify-between border-b px-5 motion-safe:transition-colors ${
          open ? "border-transparent bg-night" : "border-cream/10 bg-night"
        }`}
      >
        <a href="#top" onClick={close} className="font-italiana text-xl">
          <span aria-hidden="true">{monogram}</span>
          <span className="sr-only">{name}, back to top</span>
        </a>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="-mr-2 flex h-11 items-center gap-3 px-2 text-[11px] uppercase tracking-[0.22em]"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="relative block h-2.5 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-current motion-safe:transition-transform motion-safe:duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-current motion-safe:transition-transform motion-safe:duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
    </nav>
  );
}

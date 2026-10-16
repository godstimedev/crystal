import { chapters, site } from "@/content/site";

export function ScaleIndex() {
  return (
    <>
      {/* Desktop: fixed rail. Difference blending keeps it legible over both light and dark bands. */}
      <nav
        aria-label="Chapters"
        className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center justify-center gap-7 text-white mix-blend-difference lg:flex"
      >
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em]"
          >
            <span>{chapter.number}</span>
            <span className="rotate-180 [writing-mode:vertical-rl]">{chapter.scale}</span>
          </a>
        ))}
      </nav>

      {/* Mobile: slim sticky bar that scrolls sideways */}
      <nav
        aria-label="Chapters"
        className="sticky top-0 z-40 border-b border-cream/10 bg-night lg:hidden"
      >
        <div className="flex h-12 items-center gap-5 px-4">
          <a href="#top" className="shrink-0 font-italiana text-xl">
            <span aria-hidden="true">{site.monogram}</span>
            <span className="sr-only">{site.name}, back to top</span>
          </a>
          <ul className="flex gap-5 overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-cream/80 [scrollbar-width:none]">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  {chapter.number} {chapter.scale}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

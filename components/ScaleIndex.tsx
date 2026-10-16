import { MobileMenu } from "@/components/MobileMenu";
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

      {/* Mobile: sticky bar with a menu button */}
      <MobileMenu
        chapters={chapters}
        links={site.menuLinks}
        contact={site.contact}
        monogram={site.monogram}
        name={site.name}
      />
    </>
  );
}

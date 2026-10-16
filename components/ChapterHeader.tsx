import { chapters, type ChapterId } from "@/content/site";

type Tone = "light" | "dark";

const tones = {
  light: { border: "border-espresso/20", label: "text-muted", number: "text-espresso", active: "bg-laterite border-laterite" },
  dark: { border: "border-cream/20", label: "text-cream/60", number: "text-cream/90", active: "bg-laterite-soft border-laterite-soft" },
} satisfies Record<Tone, Record<string, string>>;

/* Five squares that grow with scale; the filled one marks the current chapter. */
const motifSizes = ["size-1.5", "size-2.5", "size-[15px]", "size-[21px]", "size-7"];

export function ChapterHeader({ id, tone }: { id: ChapterId; tone: Tone }) {
  const index = chapters.findIndex((chapter) => chapter.id === id);
  const { number, scale } = chapters[index];
  const t = tones[tone];

  return (
    <header className={`reveal flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-b pb-6 ${t.border}`}>
      <h2 id={`${id}-title`} className="flex items-end gap-5">
        <span className={`font-italiana text-[clamp(4.5rem,11vw,8rem)] leading-[0.78] ${t.number}`}>{number}</span>
        <span className="flex flex-col pb-1">
          <span className={`text-[11px] uppercase tracking-label ${t.label}`}>Scale</span>
          <span className="font-italiana text-3xl uppercase tracking-[0.06em] md:text-4xl">{scale}</span>
        </span>
      </h2>

      <span aria-hidden="true" className="flex items-end gap-1.5 pb-2">
        {motifSizes.map((size, i) => (
          <span key={size} className={`block border ${size} ${i === index ? t.active : "border-current opacity-55"}`} />
        ))}
      </span>
    </header>
  );
}

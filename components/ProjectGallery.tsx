import Image from "next/image";

import type { Project } from "@/content/site";

type Tile = { className: string; sizes: string };

/* `sizes` mirrors the grid: the content column tops out at 1088px (max-w-7xl minus lg:px-24). */
const layouts: Record<Project["layout"], { grid: string; tile: (index: number) => Tile }> = {
  row: {
    grid: "grid-cols-2 lg:grid-cols-4",
    tile: () => ({ className: "aspect-[3/4]", sizes: "(min-width: 1280px) 272px, (min-width: 1024px) 25vw, 50vw" }),
  },
  feature: {
    grid: "grid-cols-2 md:grid-cols-12 md:grid-rows-2",
    tile: (index) =>
      index === 0
        ? {
            className: "col-span-2 aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-auto",
            sizes: "(min-width: 1280px) 630px, (min-width: 768px) 58vw, 100vw",
          }
        : { className: "aspect-square md:col-span-5", sizes: "(min-width: 1280px) 450px, (min-width: 768px) 40vw, 50vw" },
  },
  pair: {
    grid: "sm:grid-cols-2",
    tile: () => ({ className: "aspect-[5/4]", sizes: "(min-width: 1280px) 544px, (min-width: 640px) 50vw, 100vw" }),
  },
};

export function ProjectGallery({ project }: { project: Project }) {
  const { grid, tile } = layouts[project.layout];

  return (
    <div className="mt-20">
      <div className="flex items-baseline justify-between gap-4 border-b border-espresso pb-3">
        <h4 className="font-display text-3xl">{project.name}</h4>
        <span className={`text-[11px] uppercase tracking-label ${project.built ? "text-laterite" : "text-muted"}`}>
          {project.status}
        </span>
      </div>

      <div className={`reveal mt-5 grid gap-3 md:gap-4 ${grid}`}>
        {project.photos.map((photo, index) => {
          const { className, sizes } = tile(index);
          return (
            <div key={photo.alt} className={`relative overflow-hidden bg-line ${className}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes={sizes} placeholder="blur" className="object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

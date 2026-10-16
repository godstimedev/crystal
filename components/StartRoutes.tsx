import { routes } from "@/content/site";

/* The closing router: one row per kind of visitor, each pointing to one destination. */
export function StartRoutes() {
  return (
    <section id="start" aria-labelledby="start-title" className="bg-cream text-espresso">
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-10 md:pt-28 lg:px-24">
        <h2 id="start-title" className="font-italiana text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]">
          {routes.heading}
        </h2>

        <ul className="mt-12 border-t border-espresso">
          {routes.rows.map((row) => (
            <li key={row.destination}>
              <a href={row.href} className="group grid grid-cols-12 items-baseline gap-3 border-b border-line py-5">
                <span className="col-span-12 text-[15px] text-muted sm:col-span-5">{row.visitor}</span>
                <span className="col-span-10 font-display text-2xl transition-colors group-hover:text-laterite sm:col-span-6 md:text-3xl">
                  {row.destination}
                </span>
                <span aria-hidden="true" className="col-span-2 text-right sm:col-span-1">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

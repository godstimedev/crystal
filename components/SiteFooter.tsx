import { footer, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20 lg:px-24">
        <p className="font-italiana text-[clamp(2.8rem,9vw,7rem)] uppercase leading-none">{site.name}</p>

        <div className="mt-12 grid gap-10 text-sm sm:grid-cols-3">
          <nav aria-labelledby="footer-scale">
            <h2 id="footer-scale" className="mb-4 text-[11px] uppercase tracking-label text-cream/60">
              By scale
            </h2>
            <ul className="space-y-2">
              {footer.byScale.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-laterite-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-follow">
            <h2 id="footer-follow" className="mb-4 text-[11px] uppercase tracking-label text-cream/60">
              Follow
            </h2>
            <ul className="space-y-2">
              {footer.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-laterite-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-[11px] uppercase tracking-label text-cream/60">Contact</h2>
            {footer.email ? (
              <a href={`mailto:${footer.email}`} className="hover:text-laterite-soft">
                {footer.email}
              </a>
            ) : (
              <p className="text-cream/80">{footer.emailPlaceholder}</p>
            )}
          </div>
        </div>

        <p className="mt-16 border-t border-cream/15 pt-6 text-xs text-cream/60">{footer.copyright}</p>
      </div>
    </footer>
  );
}

import type { Link } from "@/content/site";

const variants = {
  /** Solid espresso, for cream and sand bands */
  dark: "bg-espresso text-cream hover:bg-laterite",
  /** Solid cream, for espresso and night bands */
  light: "bg-cream text-espresso hover:bg-white",
  /** Cream outline, for espresso and night bands */
  outline: "border border-cream/70 hover:bg-cream hover:text-espresso",
};

export function CtaLink({ link, variant, className = "" }: { link: Link; variant: keyof typeof variants; className?: string }) {
  return (
    <a
      href={link.href}
      className={`inline-block px-7 py-4 text-xs uppercase tracking-[0.2em] transition-colors ${variants[variant]} ${className}`}
    >
      {link.label}
    </a>
  );
}

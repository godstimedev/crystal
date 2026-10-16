import type { ReactNode } from "react";

/* A clearly labelled stand-in for content Crystal still needs to supply. */
export function Placeholder({ tone, children, className = "" }: { tone: "light" | "dark"; children: ReactNode; className?: string }) {
  const toneClass = tone === "dark" ? "placeholder-dark text-cream/75" : "placeholder-light text-muted";

  return (
    <div className={`px-5 py-4 text-[13px] ${toneClass} ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.2em]">Placeholder</span> · {children}
    </div>
  );
}

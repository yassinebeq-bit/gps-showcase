import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  titre,
  texte,
}: {
  eyebrow: string;
  titre: string;
  texte: string;
}) {
  return (
    <section className="border-b border-border/60 bg-[var(--gradient-deep)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {titre}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{texte}</p>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

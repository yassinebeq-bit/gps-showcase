import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, devisMailto } from "@/data/catalogue";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/produits", label: "Produits" },
  { to: "/secteurs", label: "Secteurs" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={CONTACT.telHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-accent" />
              {CONTACT.tel}
            </a>
            <a
              href={CONTACT.mobileHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-accent" />
              {CONTACT.mobile}
            </a>
          </div>
          <a
            href={devisMailto()}
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Demander un devis
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={devisMailto()}
            className="mt-2 block rounded-lg bg-brand px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Demander un devis
          </a>
        </nav>
      )}
    </header>
  );
}

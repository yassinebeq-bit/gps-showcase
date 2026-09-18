import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, devisMailto, whatsappHref } from "@/data/catalogue";
import { LanguageSwitcher } from "@/i18n";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/secteurs", label: "Secteurs" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const productMenu = [
  {
    label: "Imprimantes à étiquettes",
    href: "/produits#imprimantes",
    children: ["Bureau", "Semi-industrielles", "Industrielles", "Mobiles"],
  },
  {
    label: "Lecteurs code-barres",
    href: "/produits#lecteurs",
    children: ["Filaires", "Sans fil", "Durcis 1D / 2D"],
  },
  { label: "Terminaux mobiles", href: "/produits#terminaux", children: [] },
  { label: "Étiquetage automatique", href: "/produits#automatisation", children: [] },
  {
    label: "Consommables",
    href: "/produits#etiquettes",
    children: ["Étiquettes adhésives", "Rubans transfert thermique"],
  },
  { label: "RFID & logiciels", href: "/produits#logiciels", children: [] },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-2.5 sm:py-3 lg:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              to="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
              activeOptions={{ exact: true }}
            >
              Accueil
            </Link>
            <div className="group relative">
              <Link
                to="/produits"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                Produits <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-72 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-2xl">
                  {productMenu.map((item) => (
                    <div key={item.label} className="group/item relative">
                      <a
                        href={item.href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-accent"
                      >
                        {item.label}
                        {item.children.length > 0 ? <ChevronRight className="h-4 w-4" /> : null}
                      </a>
                      {item.children.length > 0 ? (
                        <div className="invisible absolute left-full top-0 ml-2 w-56 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-2xl transition-all group-hover/item:visible group-hover/item:opacity-100">
                          {item.children.map((child) => (
                            <a
                              key={child}
                              href={item.href}
                              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {nav.filter((n) => n.to !== "/").map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher compact />
          <div className="hidden xl:flex">
            <div className="flex items-center gap-2.5 rounded-2xl border border-border px-3 py-1.5 text-foreground transition-colors hover:bg-secondary">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <div className="flex flex-col text-[12px] font-medium leading-[1.35]">
                <a href={CONTACT.telHref} className="hover:text-accent">{CONTACT.tel}</a>
                <a href={CONTACT.mobileHref} className="hover:text-accent">{CONTACT.mobile}</a>
              </div>
            </div>
          </div>
          <a
            href={devisMailto()}
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Demander un devis
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter GPS sur WhatsApp"
            className="hidden h-10 w-10 place-items-center rounded-full border border-[#25D366]/60 text-[#25D366] transition-colors hover:bg-[#25D366]/10 sm:grid"
          >
            <MessageCircle className="h-5 w-5" />
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
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Accueil
          </Link>
          <details className="group rounded-lg">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
              Produits{" "}
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mb-2 ml-3 border-l border-border pl-3">
              {productMenu.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
          {nav.filter((n) => n.to !== "/").map((n) => (
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
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/60 px-3 py-3 text-sm font-semibold text-foreground"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

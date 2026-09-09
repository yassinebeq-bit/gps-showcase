import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/data/catalogue";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="h-1 w-full bg-spectrum" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <Logo className="max-w-[18rem]" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Solutions d'identification industrielle : impression, étiquetage, lecture, consommables, pièces, logiciels et accompagnement technique au Maroc.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/produits" className="hover:text-foreground">Produits</Link></li>
            <li><Link to="/secteurs" className="hover:text-foreground">Secteurs</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Coordonnées
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{CONTACT.adresse}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={CONTACT.telHref} className="hover:text-foreground">{CONTACT.tel}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={CONTACT.siteHref} className="hover:text-foreground">{CONTACT.site}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        <p>© {new Date().getFullYear()} Global Performance Services — Tous droits réservés.</p>
        <p className="mx-auto mt-2 max-w-4xl leading-relaxed">
          Les marques citées appartiennent à leurs propriétaires respectifs. Leur mention sert uniquement à identifier
          les produits, technologies et solutions proposés ou pris en charge par GPS et ne constitue pas, à elle seule,
          une déclaration de partenariat ou d'agrément officiel.
        </p>
      </div>
    </footer>
  );
}

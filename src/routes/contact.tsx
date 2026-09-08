import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { CONTACT, devisMailto } from "@/data/catalogue";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GPS Casablanca, Z.I. Sidi Bernoussi" },
      {
        name: "description",
        content:
          "Contactez Global Performance Services : 4 rue Bangkok, Z.I. Sidi Bernoussi, Casablanca. Tél +212 (0)5 22 34 39 80 — contact@gps.co.ma.",
      },
      { property: "og:title", content: "Contacter Global Performance Services" },
      {
        property: "og:description",
        content: "Nos coordonnées à Casablanca et une demande de devis par e-mail prête à envoyer.",
      },
    ],
  }),
  component: ContactPage,
});

const coordonnees = [
  { icone: MapPin, label: "Adresse", valeur: CONTACT.adresse, href: undefined },
  { icone: Phone, label: "Téléphone / Fax", valeur: CONTACT.tel, href: CONTACT.telHref },
  { icone: Mail, label: "E-mail", valeur: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icone: Globe, label: "Site web", valeur: CONTACT.site, href: CONTACT.siteHref },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        titre="Global Performance Services — Casablanca"
        texte="Notre équipe répond à vos demandes d'information, de démonstration et de devis sur l'ensemble des solutions d'identification et de traçabilité."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {coordonnees.map(({ icone: Icone, label, valeur, href }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-6">
                <Icone className="h-5 w-5 text-accent" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-2 block text-sm font-medium text-foreground hover:text-accent"
                  >
                    {valeur}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-medium text-foreground">{valeur}</p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-[var(--gradient-deep)] p-8 sm:p-10">
            <h2 className="font-display text-xl font-bold text-foreground">Demande de devis</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Le bouton ci-dessous ouvre votre messagerie avec un e-mail déjà préparé : il vous
              suffit de compléter votre société, votre secteur et votre besoin, puis d'envoyer.
            </p>
            <a
              href={devisMailto()}
              className="mt-7 inline-block rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
            >
              Préparer ma demande par e-mail
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Vous préférez échanger de vive voix ?{" "}
              <a href={CONTACT.telHref} className="font-medium text-foreground hover:text-accent">
                {CONTACT.tel}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

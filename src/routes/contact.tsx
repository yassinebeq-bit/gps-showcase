import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { CONTACT, devisMailto, whatsappHref } from "@/data/catalogue";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GPS Casablanca, Quartier des Hôpitaux" },
      {
        name: "description",
        content:
          "Contactez Global Performance Services : 14 Rue Lucerne, Rés. Latifa, Quartier des Hôpitaux, Casablanca. Tél +212 (0)5 22 34 39 80 — contact@gps.co.ma.",
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
  { icone: Phone, label: "Téléphone", valeur: CONTACT.tel, href: CONTACT.telHref },
  { icone: Phone, label: "Mobile", valeur: CONTACT.mobile, href: CONTACT.mobileHref },
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

          <div className="rounded-2xl border border-border bg-deep p-8 sm:p-10">
            <h2 className="font-display text-xl font-bold text-foreground">Demande de devis</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Le bouton ci-dessous ouvre votre messagerie avec un e-mail déjà préparé : il vous
              suffit de compléter votre société, votre secteur et votre besoin, puis d'envoyer.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={devisMailto()}
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
              >
                Préparer ma demande par e-mail
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Vous préférez échanger de vive voix ?{" "}
              <a href={CONTACT.telHref} className="font-medium text-foreground hover:text-accent">
                {CONTACT.tel}
              </a>{" "}
              /{" "}
              <a
                href={CONTACT.mobileHref}
                className="font-medium text-foreground hover:text-accent"
              >
                {CONTACT.mobile}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

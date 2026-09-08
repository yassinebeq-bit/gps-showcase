import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { services, devisMailto, CONTACT } from "@/data/catalogue";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Conseil, installation, maintenance | GPS" },
      {
        name: "description",
        content:
          "Conseil, fourniture de matériel et consommables, installation, maintenance et intégration logicielle pour vos projets d'identification.",
      },
      { property: "og:title", content: "Services GPS : du conseil à la maintenance" },
      {
        property: "og:description",
        content:
          "GPS vous accompagne de l'étude du besoin jusqu'au support de votre parc d'impression et de lecture.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        titre="Un accompagnement complet, de l'étude au support"
        texte="Nous intervenons sur l'ensemble du cycle de vie de votre solution d'identification : définition du besoin, fourniture, mise en service et suivi dans la durée."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.titre}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
            >
              <h2 className="font-display text-lg font-bold text-foreground">{s.titre}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">
              Parlons de votre projet d'étiquetage
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Écrivez-nous à {CONTACT.email} ou appelez le {CONTACT.tel}. Nous revenons vers vous
              avec une proposition adaptée à votre application.
            </p>
          </div>
          <a
            href={devisMailto()}
            className="inline-block w-fit rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Demander un devis
          </a>
        </div>
      </Section>
    </>
  );
}

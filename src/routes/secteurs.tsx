import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";
import { secteurs, devisMailto } from "@/data/catalogue";

export const Route = createFileRoute("/secteurs")({
  head: () => ({
    meta: [
      { title: "Secteurs d'activité — Industrie, logistique, textile | GPS" },
      {
        name: "description",
        content:
          "GPS accompagne le textile, la logistique, l'automobile, l'industrie manufacturière, l'agroalimentaire, le béton préfabriqué et le retail.",
      },
      { property: "og:title", content: "Secteurs d'activité accompagnés par GPS" },
      {
        property: "og:description",
        content:
          "Des solutions d'identification adaptées aux contraintes de chaque secteur industriel et de la distribution.",
      },
    ],
  }),
  component: SecteursPage,
});

function SecteursPage() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs"
        titre="Des solutions pensées pour vos contraintes métier"
        texte="Chaque secteur impose ses propres supports, environnements et exigences de traçabilité. Nous adaptons le matériel, les consommables et le paramétrage à votre réalité terrain."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secteurs.map((s, i) => (
            <article
              key={s.titre}
              className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
            >
              <span className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-lg font-bold text-foreground">{s.titre}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
          <h2 className="font-display text-xl font-bold text-foreground">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Décrivez-nous votre application d'étiquetage : nous étudions votre besoin et vous
            proposons la configuration adaptée.
          </p>
          <a
            href={devisMailto()}
            className="mt-6 inline-block rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Nous exposer votre besoin
          </a>
        </div>
      </Section>
    </>
  );
}

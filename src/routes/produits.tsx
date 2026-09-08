import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/Section";
import { marques, produits, devisMailto, type Marque } from "@/data/catalogue";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Catalogue produits — Zebra, Avery Dennison, POSTEK | GPS" },
      {
        name: "description",
        content:
          "Imprimantes industrielles, mobiles et textiles, terminaux, systèmes d'étiquetage et logiciels : Zebra, Avery Dennison, POSTEK et NiceLabel.",
      },
      { property: "og:title", content: "Catalogue produits d'identification — GPS" },
      {
        property: "og:description",
        content:
          "Découvrez les modèles Zebra ZT610, ZT411, ZQ521, Avery Dennison SNAP 500 et Monarch ADTP2, POSTEK EM210, TX3, ZX2, ZX3, GX3, G6000.",
      },
    ],
  }),
  component: ProduitsPage,
});

const filtres = ["Tous", ...marques] as const;

function ProduitsPage() {
  const [filtre, setFiltre] = useState<"Tous" | Marque>("Tous");

  const liste = useMemo(
    () => (filtre === "Tous" ? produits : produits.filter((p) => p.marque === filtre)),
    [filtre],
  );

  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        titre="Matériels et logiciels d'identification industrielle"
        texte="Une sélection de marques reconnues pour l'impression d'étiquettes, la lecture de codes-barres et la traçabilité de vos flux de production et de logistique."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par marque">
          {filtres.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setFiltre(m)}
              aria-pressed={filtre === m}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                filtre === m
                  ? "border-transparent bg-[var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-brand)]"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {liste.length} référence{liste.length > 1 ? "s" : ""} affichée
          {liste.length > 1 ? "s" : ""}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {liste.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.marque} ${p.modele}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {p.marque}
                </span>
                <h2 className="mt-2 font-display text-lg font-bold text-foreground">{p.modele}</h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {p.categorie}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={devisMailto(`${p.marque} ${p.modele}`)}
                  className="mt-6 inline-flex w-fit rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Demander un devis
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

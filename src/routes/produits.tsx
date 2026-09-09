import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ExternalLink, FileText, Mail } from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { marques, produits, devisMailto, type Marque } from "@/data/catalogue";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Catalogue produits — Zebra, Avery Dennison, POSTEK | GPS" },
      {
        name: "description",
        content:
          "Fiches produits, imprimantes industrielles, mobiles et textiles, terminaux, systèmes d'étiquetage et logiciels proposés par Global Performance Services.",
      },
      { property: "og:title", content: "Catalogue produits d'identification — GPS" },
      {
        property: "og:description",
        content:
          "Découvrez les modèles, caractéristiques principales et applications des solutions d'identification industrielle proposées par GPS.",
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
        eyebrow="Catalogue technique"
        titre="Choisissez votre équipement selon l'application, pas seulement selon la marque"
        texte="Chaque référence est présentée avec son usage, ses caractéristiques clés et les options utiles pour faciliter la sélection de la bonne solution d'identification."
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
                  ? "border-transparent bg-brand text-primary-foreground shadow-brand"
                  : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {liste.length} référence{liste.length > 1 ? "s" : ""} affichée{liste.length > 1 ? "s" : ""}
        </p>

        <div className="mt-8 space-y-6">
          {liste.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-accent/40 hover:shadow-card"
            >
              <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[330px_1fr]">
                <div className="relative min-h-64 overflow-hidden bg-secondary lg:min-h-full">
                  <img
                    src={p.image}
                    alt={`${p.marque} ${p.modele}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/25" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
                    {p.categorie}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{p.marque}</span>
                      <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">{p.modele}</h2>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{p.description}</p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Positionnement GPS</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Sélection & intégration B2B</p>
                    </div>
                  </div>

                  {p.specs?.length ? (
                    <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {p.specs.map((spec) => (
                        <div key={spec.label} className="rounded-2xl border border-border bg-background/45 p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{spec.label}</p>
                          <p className="mt-2 text-sm font-semibold leading-snug text-foreground">{spec.valeur}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {p.points.map((pt) => (
                        <div key={pt} className="rounded-2xl border border-border bg-background/45 p-4">
                          <p className="text-sm font-medium leading-relaxed text-foreground">{pt}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-3 border-t border-border/60 pt-6">
                    <a
                      href={devisMailto(`${p.marque} ${p.modele}`)}
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
                    >
                      <Mail className="h-4 w-4" /> Demander un devis
                    </a>
                    {p.ficheUrl ? (
                      <a
                        href={p.ficheUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        <FileText className="h-4 w-4" /> Fiche fabricant <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-5 text-sm leading-relaxed text-muted-foreground">
          Les caractéristiques présentées sont une synthèse destinée à faciliter la sélection. Les configurations et options peuvent varier selon la version du produit. Pour une configuration précise, GPS valide la référence et l'application avant devis.
        </div>
      </Section>
    </>
  );
}

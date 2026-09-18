import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Mail,
  MessageCircle,
  Printer,
  Radio,
  ScanLine,
  Settings,
  Smartphone,
  Tags,
} from "lucide-react";
import { PageHero, Section } from "@/components/Section";
import { BrandLogo } from "@/components/BrandLogo";
import { marques, produits, devisMailto, whatsappHref, type Marque } from "@/data/catalogue";

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

const familles = [
  {
    id: "imprimantes",
    titre: "Imprimantes à étiquettes",
    texte: "Bureau, semi-industrielles, industrielles et mobiles",
    icone: Printer,
  },
  {
    id: "lecture",
    titre: "Lecteurs code-barres",
    texte: "Filaires, sans fil et durcis 1D / 2D",
    icone: ScanLine,
  },
  {
    id: "terminaux",
    titre: "Terminaux mobiles",
    texte: "Collecte de données, inventaire et logistique",
    icone: Smartphone,
  },
  {
    id: "automatisation",
    titre: "Étiquetage automatique",
    texte: "Application en ligne et intégration industrielle",
    icone: Settings,
  },
  {
    id: "consommables",
    titre: "Consommables",
    texte: "Étiquettes et rubans transfert thermique",
    icone: Tags,
  },
  {
    id: "rfid",
    titre: "RFID & logiciels",
    texte: "Identification connectée et logiciels d'étiquetage",
    icone: Radio,
  },
] as const;

const typesEtiquettes = [
  [
    "Papier couché et thermique",
    "Pour la logistique, l'expédition, le retail et les usages courants.",
  ],
  [
    "Polypropylène (PP)",
    "Support synthétique résistant à l'humidité et adapté aux surfaces exigeantes.",
  ],
  ["Polyester (PET)", "Pour les applications industrielles demandant résistance et longue durée."],
  ["Polyéthylène (PE)", "Support souple pour emballages et contenants soumis aux déformations."],
  [
    "Eau et produits chimiques",
    "Matières et adhésifs sélectionnés pour les environnements difficiles.",
  ],
  ["Haute et basse température", "Solutions adaptées au froid, à la congélation et à la chaleur."],
  [
    "Sécurité, VOID et destructibles",
    "Pour le contrôle d'ouverture, la garantie et l'inviolabilité.",
  ],
  ["Étiquettes RFID", "Identification sans contact, inventaire et traçabilité automatisée."],
  ["Logistique et codes-barres", "Étiquetage des colis, palettes, emplacements et produits."],
  ["Textile et automobile", "Supports techniques adaptés aux contraintes de production."],
  [
    "Agroalimentaire et pharmaceutique",
    "Solutions étudiées selon les conditions d'usage et de stockage.",
  ],
  [
    "Transparentes et sur mesure",
    "Formats, formes, matières et adhésifs personnalisés selon le besoin.",
  ],
] as const;

function categorieId(categorie: string) {
  if (categorie.includes("Terminaux")) return "terminaux";
  if (categorie.includes("automatique")) return "automatisation";
  if (categorie.includes("Consommables") || categorie.includes("textiles")) return "consommables";
  return "imprimantes";
}

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
        <div
          id="etiquettes"
          className="scroll-mt-28 rounded-3xl border border-border bg-card/55 p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Supports d'identification
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
            Nos différents types d'étiquettes
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            La matière et l'adhésif sont sélectionnés selon le support, la température,
            l'environnement et la durée d'utilisation.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {typesEtiquettes.map(([titre, texte]) => (
              <article
                key={titre}
                className="rounded-2xl border border-border bg-background/45 p-5"
              >
                <h3 className="font-display font-bold text-foreground">{titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={devisMailto("Étiquettes adhésives")}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand"
            >
              <Mail className="h-4 w-4" /> Demander un devis
            </a>
            <a
              href={whatsappHref("Étiquettes adhésives")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 px-5 py-3 text-sm font-semibold text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {familles.map(({ id, titre, texte, icone: Icone }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10">
                <Icone className="h-5 w-5 text-accent" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  {titre}{" "}
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {texte}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 border-t border-border/60 pt-8">
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
            {liste.length} référence{liste.length > 1 ? "s" : ""} affichée
            {liste.length > 1 ? "s" : ""}
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {liste.map((p) => (
              <article
                key={p.id}
                id={categorieId(p.categorie)}
                className="scroll-mt-32 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-card sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-5">
                    <BrandLogo marque={p.marque} className="h-8 max-w-40 object-contain" />
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {p.categorie}
                    </span>
                  </div>
                  <div className="pt-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                          {p.modele}
                        </h2>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {p.description}
                        </p>
                      </div>
                      <div className="shrink-0 rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          Positionnement GPS
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                          Sélection & intégration B2B
                        </p>
                      </div>
                    </div>

                    {p.specs?.length ? (
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {p.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="rounded-2xl border border-border bg-background/45 p-4"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              {spec.label}
                            </p>
                            <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                              {spec.valeur}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {p.points.map((pt) => (
                          <div
                            key={pt}
                            className="rounded-2xl border border-border bg-background/45 p-4"
                          >
                            <p className="text-sm font-medium leading-relaxed text-foreground">
                              {pt}
                            </p>
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
                      <a
                        href={whatsappHref(`${p.marque} ${p.modele}`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#25D366]/10"
                      >
                        <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
                      </a>
                      {p.ficheUrl ? (
                        <a
                          href={p.ficheUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                          <FileText className="h-4 w-4" /> Fiche fabricant{" "}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-5 text-sm leading-relaxed text-muted-foreground">
          Les caractéristiques présentées sont une synthèse destinée à faciliter la sélection. Les
          configurations et options peuvent varier selon la version du produit. Pour une
          configuration précise, GPS valide la référence et l'application avant devis.
        </div>
      </Section>
    </>
  );
}

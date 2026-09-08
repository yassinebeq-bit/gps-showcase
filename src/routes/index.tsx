import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Printer, ScanLine, Cog, Layers } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { Section } from "@/components/Section";
import { CONTACT, devisMailto, marques, produits, secteurs, services } from "@/data/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPS — Identification, codes-barres et traçabilité | Casablanca" },
      {
        name: "description",
        content:
          "Global Performance Services fournit imprimantes d'étiquettes, terminaux, consommables et logiciels Zebra, Avery Dennison, POSTEK et NiceLabel au Maroc.",
      },
      { property: "og:title", content: "Global Performance Services — Identification & traçabilité" },
      {
        property: "og:description",
        content:
          "Solutions d'étiquetage et de codes-barres pour le textile, la logistique, l'automobile, l'agroalimentaire et le retail.",
      },
    ],
  }),
  component: Index,
});

const piliers = [
  { icone: Printer, titre: "Impression d'étiquettes", texte: "Imprimantes industrielles, de bureau, mobiles et textiles." },
  { icone: ScanLine, titre: "Lecture & collecte", texte: "Terminaux durcis et lecteurs de codes-barres 1D / 2D." },
  { icone: Cog, titre: "Étiquetage automatique", texte: "Systèmes d'impression-pose intégrés à vos lignes." },
  { icone: Layers, titre: "Consommables & logiciels", texte: "Étiquettes, rubans et gestion centralisée de l'étiquetage." },
];

function Index() {
  const vedettes = produits.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <img
          src={hero}
          alt="Entrepôt industriel avec palettes identifiées"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 overlay-hero" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Casablanca — Maroc
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Identification, codes-barres et traçabilité industrielle
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Global Performance Services équipe les industriels et les distributeurs en solutions
            d'étiquetage fiables : matériel, consommables, logiciels et accompagnement technique.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              Découvrir le catalogue <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={devisMailto()}
              className="rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Demander un devis
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border/60 pt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Marques distribuées
            </span>
            {marques.map((m) => (
              <span key={m} className="font-display text-sm font-bold tracking-wide text-foreground">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {piliers.map(({ icone: Icone, titre, texte }) => (
            <article key={titre} className="rounded-2xl border border-border bg-card p-7">
              <Icone className="h-6 w-6 text-accent" />
              <h2 className="mt-5 font-display text-base font-bold text-foreground">{titre}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Catalogue
              </p>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Une sélection de références industrielles
              </h2>
            </div>
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              Voir tout le catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vedettes.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
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
                <div className="p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {p.marque}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">{p.modele}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Secteurs</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Nous accompagnons les industriels et les distributeurs
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2">
              {secteurs.map((s) => (
                <li
                  key={s.titre}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                >
                  {s.titre}
                </li>
              ))}
            </ul>
            <Link
              to="/secteurs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              Détail par secteur <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Services</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              De l'étude du besoin au suivi de votre parc
            </h2>
            <ul className="mt-7 space-y-4">
              {services.slice(0, 4).map((s) => (
                <li key={s.titre} className="border-l-2 border-accent/60 pl-4">
                  <p className="font-display text-sm font-bold text-foreground">{s.titre}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              Tous nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <section className="border-t border-border/60 bg-deep">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Un projet d'étiquetage à équiper ou à moderniser ?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Écrivez-nous à {CONTACT.email} ou appelez le {CONTACT.tel}. Nous étudions votre
              application et vous proposons la configuration adaptée.
            </p>
          </div>
          <a
            href={devisMailto()}
            className="inline-block w-fit rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </>
  );
}

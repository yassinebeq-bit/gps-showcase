import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Cog,
  Headphones,
  Layers,
  MapPin,
  PackageCheck,
  Phone,
  Printer,
  ScanLine,
  ShieldCheck,
  Tags,
  Wrench,
} from "lucide-react";
import hero from "@/assets/hero-gps-enhanced.jpg";
import imprimanteEtiquettesAsset from "@/assets/gps-solutions-banner.png.asset.json";

const imprimanteEtiquettes = imprimanteEtiquettesAsset.url;
import { Section } from "@/components/Section";
import { CONTACT, devisMailto, marques, produits, secteurs, services } from "@/data/catalogue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPS — Solutions d'identification & traçabilité industrielle | Casablanca" },
      {
        name: "description",
        content:
          "Global Performance Services accompagne les industriels au Maroc avec des imprimantes d'étiquettes, terminaux, lecteurs, consommables, pièces, logiciels et services techniques.",
      },
      { property: "og:title", content: "Global Performance Services — Identification & traçabilité industrielle" },
      {
        property: "og:description",
        content:
          "Imprimantes, étiquettes, rubans, pièces de rechange, lecteurs, terminaux, logiciels et accompagnement technique pour l'industrie au Maroc.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const familles = [
  {
    icone: Printer,
    titre: "Imprimantes industrielles",
    texte: "Impression d'étiquettes fiable pour production, logistique, retail et textile.",
  },
  {
    icone: Tags,
    titre: "Étiquettes & rubans",
    texte: "Étiquettes adhésives, supports spéciaux et rubans transfert thermique adaptés à l'application.",
  },
  {
    icone: ScanLine,
    titre: "Lecteurs & terminaux",
    texte: "Capture 1D/2D, mobilité et collecte de données pour vos opérations terrain.",
  },
  {
    icone: Wrench,
    titre: "Pièces & maintenance",
    texte: "Pièces de rechange, diagnostic, réparation, programmation et maintenance de vos équipements.",
  },
  {
    icone: Cog,
    titre: "Automatisation",
    texte: "Systèmes d'impression-pose et intégration sur lignes et postes industriels.",
  },
  {
    icone: Layers,
    titre: "Logiciels d'étiquetage",
    texte: "Conception, données variables et gestion centralisée avec intégration à vos systèmes.",
  },
];

const preuves = [
  { icone: Headphones, titre: "Support technique", texte: "Conseil, installation et accompagnement" },
  { icone: MapPin, titre: "Basés à Casablanca", texte: "Au service des industriels au Maroc" },
  { icone: Boxes, titre: "Offre multi-solutions", texte: "Matériel, consommables, pièces et logiciels" },
  { icone: ShieldCheck, titre: "Approche terrain", texte: "Solutions dimensionnées selon votre application" },
];

function Index() {
  const vedettes = produits.slice(0, 6);

  return (
    <>
      <section className="border-b border-border/60 bg-background">
  <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[42%_58%]">

    {/* COLONNE GAUCHE */}
    <div className="relative z-10 flex items-start bg-background px-6 py-10 sm:px-10 lg:px-12 lg:py-12 xl:px-16">
      <div className="w-full max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
          Solutions d'identification & traçabilité industrielle
        </p>

        <div className="mt-4 h-1 w-28 rounded-full bg-spectrum" />

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-[2.7rem] xl:text-[3.15rem]">
          Identifiez. Tracez. Optimisez.
          <span className="mt-3 block text-brand-gradient">
            Faites avancer votre industrie.
          </span>
        </h1>

        <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Imprimantes, étiquettes, rubans, pièces de rechange, lecteurs,
          terminaux, logiciels et service technique : GPS construit une
          solution complète autour de vos flux et de vos équipements.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={devisMailto()}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </a>

          <Link
            to="/produits"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Découvrir nos solutions
          </Link>
        </div>

        <div className="mt-9 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Solutions complètes
              </p>
              <p className="text-xs text-muted-foreground">
                Du consommable au matériel
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Service technique
              </p>
              <p className="text-xs text-muted-foreground">
                Installation et maintenance
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Casablanca
              </p>
              <p className="text-xs text-muted-foreground">
                Intervention au Maroc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* COLONNE DROITE : IMAGE */}
    <div className="relative min-h-[480px] overflow-hidden bg-[#07111f] lg:min-h-[680px] lg:-mt-44">
      <img
        src={hero}
        alt="Solution industrielle GPS avec imprimante, étiquettes et traçabilité"
        className="absolute inset-0 h-full w-full object-contain object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />

      <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-white/10 bg-background/70 px-5 py-4 backdrop-blur-md md:block">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Identification • Traçabilité • Performance
        </p>
      </div>
    </div>

  </div>

  {/* BANDE MARQUES */}
  <div className="border-t border-border/60 bg-deep">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-5 py-5 lg:px-8">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Marques & technologies proposées
      </span>

      {marques.map((m) => (
        <span
          key={m}
          className="font-display text-sm font-bold tracking-wide text-foreground/90"
        >
          {m}
        </span>
      ))}
    </div>
  </div>
</section>

      <section className="border-b border-border/60 bg-deep">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Vos besoins, nos solutions</p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Une seule équipe pour équiper, identifier, tracer et maintenir
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nous ne nous limitons pas à la vente d'une imprimante : nous travaillons sur l'ensemble de la chaîne,
              du support imprimé à la collecte des données et au maintien en condition opérationnelle.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {familles.map(({ icone: Icone, titre, texte }) => (
              <article key={titre} className="group rounded-2xl border border-border bg-card/80 p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10">
                  <Icone className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Solutions en action</p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              De l'impression à la lecture, une chaîne de traçabilité complète
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Des équipements pensés pour les ateliers, entrepôts, points de vente et environnements de production.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-[13rem] gap-4 sm:auto-rows-[16rem] lg:grid-cols-12 lg:grid-rows-2">
            <figure className="group relative overflow-hidden rounded-2xl border border-border lg:col-span-7 lg:row-span-2">
              <img
                src={imprimanteEtiquettes}
                alt="Bannière GPS : solutions d’identification, traçabilité et performance pour l’industrie"
                loading="lazy"
                width={1774}
                height={887}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Impression industrielle</span>
                <p className="mt-2 max-w-md font-display text-lg font-bold text-foreground">Étiquettes lisibles, fiables et prêtes pour vos flux de production.</p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-border lg:col-span-5">
              <img
                src={lecteurCodeBarres}
                alt="Lecture d’un code-barres sur un produit"
                loading="lazy"
                width={1297}
                height={591}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Lecture & collecte</span>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-border lg:col-span-5">
              <img
                src={scanLogistique}
                alt="Terminal mobile scannant l’étiquette code-barres d’un colis"
                loading="lazy"
                width={880}
                height={584}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Mobilité logistique</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/25">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preuves.map(({ icone: Icone, titre, texte }) => (
              <div key={titre} className="flex gap-4 rounded-2xl border border-border bg-card/50 p-5">
                <Icone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div><p className="font-display text-sm font-bold text-foreground">{titre}</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{texte}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Catalogue</p>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Des références pour les environnements industriels exigeants
              </h2>
            </div>
            <Link to="/produits" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent">
              Voir tout le catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vedettes.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={p.image} alt={`${p.marque} ${p.modele}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{p.marque}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">{p.modele}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
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
              Des solutions adaptées à vos contraintes métier
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2">
              {secteurs.map((s) => (
                <li key={s.titre} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">{s.titre}</li>
              ))}
            </ul>
            <Link to="/secteurs" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent">
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
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent">
              Tous nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <section className="border-t border-border/60 bg-deep">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Parlons de votre application</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Besoin d'équiper, fiabiliser ou moderniser votre identification ?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Décrivez-nous votre produit, votre support, votre cadence et votre environnement. Nous vous orientons vers la configuration la plus adaptée.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href={devisMailto()} className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a href={CONTACT.telHref} className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary">
              <Phone className="h-4 w-4 text-accent" /> Nous appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

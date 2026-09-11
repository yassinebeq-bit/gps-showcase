import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Barcode,
  Boxes,
  Cog,
  Headphones,
  Layers,
  MapPin,
  PackageCheck,
  Phone,
  Radio,
  ScanLine,
  ShieldCheck,
  Tags,
  Workflow,
  Wrench,
} from "lucide-react";
import hero from "@/assets/hero-gps-enhanced.jpg";
import imprimanteEtiquettesAsset from "@/assets/gps-solutions-banner.png.asset.json";

const imprimanteEtiquettes = imprimanteEtiquettesAsset.url;
import { Section } from "@/components/Section";
import { CONTACT, devisMailto, marques, secteurs, services } from "@/data/catalogue";

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

const solutions = [
  {
    numero: "01",
    icone: Barcode,
    titre: "Identification & Marquage",
    texte: "Solutions professionnelles pour identifier les produits, emballages, composants et opérations industrielles.",
    exemples: ["Codes-barres", "QR codes", "Identification produit", "Marquage industriel"],
  },
  {
    numero: "04",
    icone: ScanLine,
    titre: "Traçabilité & Capture de données",
    texte: "Collecter, sécuriser et exploiter les informations tout au long du processus industriel.",
    exemples: ["Capture de données", "Scanner & lecture", "Flux numériques", "Traçabilité produit"],
  },
  {
    numero: "05",
    icone: Radio,
    titre: "RFID & Automatisation",
    texte: "Technologies connectées pour automatiser l'identification et améliorer la traçabilité.",
    exemples: ["Puces & tags RFID", "Ondes RFID", "IoT industriel", "Automatisation"],
  },
  {
    numero: "06",
    icone: Boxes,
    titre: "Consommables industriels",
    texte: "Tous les supports et consommables nécessaires à une identification fiable et durable.",
    exemples: ["Étiquettes", "Rubans transfert thermique", "Supports d'identification", "Pièces & accessoires"],
  },
  {
    numero: "07",
    icone: Wrench,
    titre: "Services techniques",
    texte: "Une expertise terrain pour installer, maintenir et optimiser vos solutions d'identification.",
    exemples: ["Installation & configuration", "Diagnostic & dépannage", "Réparation & programmation", "Support & pièces de rechange"],
  },
];

const famillesEtiquettes = [
  "Papier couché & thermique",
  "PP, PET & PE",
  "Résistantes eau & chimie",
  "Haute & basse température",
  "Sécurité, VOID & RFID",
  "Logistique & codes-barres",
  "Textile & automobile",
  "Agroalimentaire & pharma",
  "Transparentes & sur mesure",
];

const technologiesRubans = [
  {
    nom: "WAX",
    type: "Cire",
    texte: "La solution économique et rapide pour les applications standards sur papier.",
    points: ["Qualité code-barres", "Vitesse élevée", "Logistique & usages généraux"],
  },
  {
    nom: "WAX/RESIN",
    type: "Cire / Résine",
    texte: "Une impression polyvalente avec une meilleure résistance au frottement.",
    points: ["Excellente définition", "Papier couché", "Supports synthétiques compatibles"],
  },
  {
    nom: "RESIN",
    type: "Résine",
    texte: "La haute résistance destinée aux environnements industriels les plus exigeants.",
    points: ["Chimie, chaleur & abrasion", "Résistance élevée", "Supports PET, PP & PE"],
  },
];

const preuves = [
  { icone: Headphones, titre: "Support technique", texte: "Conseil, installation et accompagnement" },
  { icone: MapPin, titre: "Basés à Casablanca", texte: "Au service des industriels au Maroc" },
  { icone: Boxes, titre: "Offre multi-solutions", texte: "Matériel, consommables, pièces et logiciels" },
  { icone: ShieldCheck, titre: "Approche terrain", texte: "Solutions dimensionnées selon votre application" },
];

function Index() {
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
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Expertise intégrée</p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-5 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Nos solutions</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des solutions complètes d'identification, d'étiquetage, de traçabilité et de marquage pour les environnements industriels.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-card/75 p-6 shadow-card backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60 sm:p-8 lg:col-span-2">
              <div className="absolute right-6 top-5 font-display text-6xl font-extrabold text-accent/10 sm:text-8xl">02</div>
              <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10">
                    <Tags className="h-6 w-6 text-accent" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">02 — Famille stratégique</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">Étiquettes adhésives</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Des matières, adhésifs et formats sélectionnés selon le support, la température, l'environnement et la durée d'utilisation.
                  </p>
                  <Link to="/produits" className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                    Découvrir nos étiquettes <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {famillesEtiquettes.map((famille) => (
                    <div key={famille} className="flex min-h-20 items-center rounded-xl border border-border bg-background/45 p-4 text-sm font-medium leading-snug text-foreground transition-colors group-hover:border-accent/20">
                      {famille}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-card/75 p-6 shadow-card backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/60 sm:p-8 lg:col-span-2">
              <div className="absolute right-6 top-5 font-display text-6xl font-extrabold text-accent/10 sm:text-8xl">03</div>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">03 — Famille stratégique</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">Rubans transfert thermique</h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Trois technologies pour ajuster la qualité d'impression et la résistance à chaque application.
                </p>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {technologiesRubans.map((ruban) => (
                    <div key={ruban.nom} className="rounded-2xl border border-border bg-background/45 p-5">
                      <p className="font-display text-xl font-extrabold text-accent">{ruban.nom}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{ruban.type}</p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground">{ruban.texte}</p>
                      <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                        {ruban.points.map((point) => <li key={point} className="border-l border-accent/60 pl-3">{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Near Edge", "Flat Head", "Ruban textile", "Haute résistance", "Haute température", "Supports synthétiques"].map((type) => (
                    <span key={type} className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-muted-foreground">{type}</span>
                  ))}
                </div>
                <Link to="/produits" className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                  Découvrir nos rubans <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            {solutions.map(({ numero, icone: Icone, titre, texte, exemples }) => (
              <article key={numero} className="group relative overflow-hidden rounded-2xl border border-border bg-card/65 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card sm:p-7">
                <div className="absolute right-5 top-4 font-display text-5xl font-extrabold text-accent/10">{numero}</div>
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10">
                    <Icone className="h-5 w-5 text-accent" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent">{numero}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{titre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exemples.map((exemple) => (
                      <span key={exemple} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{exemple}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground">
            <Workflow className="h-5 w-5 shrink-0 text-accent" />
            <p>Une chaîne maîtrisée : Étiquette + Ruban + Identification + Capture de données + RFID + Traçabilité + Service technique.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Solutions en action</p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Identification, traçabilité et performance pour votre industrie
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Une chaîne complète allant de l'impression d'étiquettes à la lecture et à la mobilité logistique.
            </p>
          </div>

          <figure className="group relative mt-10 overflow-hidden rounded-2xl border border-border">
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Impression • Lecture • Mobilité</span>
              <p className="mt-2 max-w-md font-display text-lg font-bold text-foreground">Des équipements pensés pour les ateliers, entrepôts et points de vente.</p>
            </figcaption>
          </figure>
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

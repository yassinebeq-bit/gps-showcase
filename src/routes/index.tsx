import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Barcode,
  Boxes,
  Headphones,
  Layers,
  MapPin,
  PackageCheck,
  Phone,
  Radio,
  ScanLine,
  ShieldCheck,
  Workflow,
  Wrench,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/hero-gps-generic.png";
import serviceTechniqueBackground from "@/assets/service-technique-gps.png";
import etiquettesBackground from "@/assets/bg-etiquettes-adhesives.png";
import rubansInfographic from "@/assets/rubans-transfert-thermique-wax-resin.png";
import imprimanteEtiquettesAsset from "@/assets/gps-solutions-banner.png.asset.json";

const imprimanteEtiquettes = imprimanteEtiquettesAsset.url;
import { Section } from "@/components/Section";
import { BrandLogo } from "@/components/BrandLogo";
import { CONTACT, devisMailto, secteurs, services, whatsappHref } from "@/data/catalogue";
import type { BrandName } from "@/components/BrandLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GPS — Solutions d'identification & traçabilité industrielle | Casablanca" },
      {
        name: "description",
        content:
          "Global Performance Services accompagne les industriels au Maroc avec des imprimantes d'étiquettes, terminaux, lecteurs, consommables, pièces, logiciels et services techniques.",
      },
      {
        property: "og:title",
        content: "Global Performance Services — Identification & traçabilité industrielle",
      },
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
    texte:
      "Solutions professionnelles pour identifier les produits, emballages, composants et opérations industrielles.",
    exemples: ["Codes-barres", "QR codes", "Identification produit", "Marquage industriel"],
  },
  {
    numero: "02",
    icone: ScanLine,
    titre: "Traçabilité & Capture de données",
    texte:
      "Collecter, sécuriser et exploiter les informations tout au long du processus industriel.",
    exemples: ["Capture de données", "Scanner & lecture", "Flux numériques", "Traçabilité produit"],
  },
  {
    numero: "03",
    icone: Radio,
    titre: "RFID & Automatisation",
    texte: "Technologies connectées pour automatiser l'identification et améliorer la traçabilité.",
    exemples: ["Puces & tags RFID", "Ondes RFID", "IoT industriel", "Automatisation"],
  },
  {
    numero: "04",
    icone: Boxes,
    titre: "Consommables industriels",
    texte: "Tous les supports et consommables nécessaires à une identification fiable et durable.",
    exemples: [
      "Étiquettes",
      "Rubans transfert thermique",
      "Supports d'identification",
      "Pièces & accessoires",
    ],
  },
  {
    numero: "05",
    icone: Wrench,
    titre: "Services techniques",
    texte:
      "Une expertise terrain pour installer, maintenir et optimiser vos solutions d'identification.",
    exemples: [
      "Installation & configuration",
      "Diagnostic & dépannage",
      "Réparation & programmation",
      "Support & pièces de rechange",
    ],
  },
];

const marquesAffichees: BrandName[] = ["Zebra", "Avery Dennison", "POSTEK", "CAB", "SATO", "TSC"];

const preuves = [
  {
    icone: Headphones,
    titre: "Support technique",
    texte: "Conseil, installation et accompagnement",
  },
  { icone: MapPin, titre: "Basés à Casablanca", texte: "Au service des industriels au Maroc" },
  {
    icone: Boxes,
    titre: "Offre multi-solutions",
    texte: "Matériel, consommables, pièces et logiciels",
  },
  {
    icone: ShieldCheck,
    titre: "Approche terrain",
    texte: "Solutions dimensionnées selon votre application",
  },
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
                Imprimantes, étiquettes, rubans, pièces de rechange, lecteurs, terminaux, logiciels
                et service technique : GPS construit une solution complète autour de vos flux et de
                vos équipements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={devisMailto()}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-[#25D366]/10"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
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
                    <p className="text-sm font-semibold text-foreground">Solutions complètes</p>
                    <p className="text-xs text-muted-foreground">Du consommable au matériel</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Service technique</p>
                    <p className="text-xs text-muted-foreground">Installation et maintenance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Casablanca</p>
                    <p className="text-xs text-muted-foreground">Intervention au Maroc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : IMAGE */}
          <div className="relative min-h-[360px] overflow-hidden bg-[#07111f] sm:min-h-[460px] lg:min-h-[560px]">
            <img
              src={hero}
              alt="Imprimantes d'étiquettes, lecteurs code-barres et RFID avec consommables"
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
              Marques et technologies disponibles selon les besoins
            </span>

            {marquesAffichees.map((m) => (
              <div
                key={m}
                className="flex h-12 min-w-36 items-center justify-center rounded-xl border border-white/10 bg-white px-4 py-2 shadow-sm"
              >
                <BrandLogo marque={m} className="h-8 max-w-40 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-deep">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Expertise intégrée
            </p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-5 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Nos solutions
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des solutions complètes d'identification, d'étiquetage, de traçabilité et de marquage
              pour les environnements industriels.
            </p>
          </div>

          <article className="relative mt-12 overflow-hidden rounded-3xl border border-white/15 bg-[#031326] shadow-card lg:min-h-[660px]">
            <img
              src={serviceTechniqueBackground}
              alt="Technicien GPS assurant la maintenance d'une imprimante d'étiquettes industrielle"
              loading="lazy"
              width={1728}
              height={900}
              className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-[#031326] via-[#031326]/75 to-transparent lg:block" />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-[#031326] via-transparent to-[#031326]/10 lg:block" />

            <div className="relative flex flex-col lg:min-h-[660px] lg:justify-between lg:p-12">
              <div className="max-w-2xl px-6 pb-7 pt-8 sm:px-9 sm:pb-9 sm:pt-10 lg:max-w-[56%] lg:p-0 lg:pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
                  Service technique GPS
                </p>
                <div className="mt-4 h-px w-24 bg-accent" />
                <h3 className="mt-6 font-display text-[2.35rem] font-extrabold leading-[1.12] text-white sm:mt-7 sm:text-5xl lg:text-6xl">
                  Vos équipements restent performants.
                </h3>
                <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
                  Installation, mise en service, maintenance, diagnostic et réparation de vos
                  solutions d'identification.
                </p>
                <a
                  href={whatsappHref("une intervention technique")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-brand transition-all hover:-translate-y-0.5 hover:brightness-110 sm:px-7 sm:text-base"
                >
                  Demander une intervention
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="relative h-64 overflow-hidden border-y border-white/10 sm:h-80 lg:hidden">
                <img
                  src={serviceTechniqueBackground}
                  alt="Technicien marocain intervenant sur une imprimante d'étiquettes"
                  loading="lazy"
                  width={1728}
                  height={900}
                  className="h-full w-full object-cover object-[72%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#031326]/15 via-transparent to-[#031326]/35" />
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-5 px-6 py-7 sm:px-9 lg:mt-12 lg:grid-cols-4 lg:border-t lg:border-white/15 lg:px-0 lg:pb-0 lg:pt-6">
                {[
                  { icone: PackageCheck, texte: "Installation & configuration" },
                  { icone: Wrench, texte: "Maintenance & dépannage" },
                  { icone: ScanLine, texte: "Réparation & programmation" },
                  { icone: Boxes, texte: "Pièces de rechange" },
                ].map(({ icone: Icone, texte }) => (
                  <div key={texte} className="flex items-center gap-3">
                    <Icone className="h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6" />
                    <p className="text-xs font-semibold leading-snug text-white sm:text-base">
                      {texte}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="group relative min-h-[440px] overflow-hidden rounded-3xl border border-white/20 bg-[#061221] p-5 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60 sm:min-h-[520px] sm:p-8 lg:col-span-2">
              <img
                src={etiquettesBackground}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-[64%_center] transition-transform duration-700 group-hover:scale-[1.01] sm:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061221]/95 via-[#061221]/72 to-[#061221]/25 sm:from-[#061221]/85 sm:via-[#061221]/25 sm:to-transparent lg:via-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061221]/45 via-transparent to-[#061221]/15 sm:hidden" />
              <div className="relative flex min-h-[400px] items-center sm:min-h-[456px]">
                <div className="max-w-[22rem] sm:max-w-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.24em]">
                    02 — Famille stratégique
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Étiquettes adhésives
                  </h3>
                  <p className="mt-4 max-w-[20rem] text-[0.95rem] leading-relaxed text-foreground/95 sm:max-w-xl sm:text-base">
                    Des matières, adhésifs et formats sélectionnés selon le support, la température,
                    l'environnement et la durée d'utilisation.
                  </p>
                  <a
                    href="/produits#etiquettes"
                    className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/70 bg-[#061221]/70 px-4 py-2.5 text-xs font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-accent hover:text-accent-foreground sm:mt-7 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Découvrir nos étiquettes <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/20 bg-[#061221] p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/60 sm:p-8 lg:col-span-2">
              <div className="absolute right-6 top-5 font-display text-6xl font-extrabold text-accent/10 sm:text-8xl">
                03
              </div>
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 backdrop-blur-sm">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  03 — Famille stratégique
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Rubans transfert thermique
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/95 sm:text-base">
                  Trois technologies pour ajuster la qualité d'impression et la résistance à chaque
                  application.
                </p>

                <figure className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-[#07172a] shadow-xl">
                  <img
                    src={rubansInfographic}
                    alt="Comparatif des rubans transfert thermique WAX, WAX/RESIN et RESIN"
                    loading="lazy"
                    width={1340}
                    height={1182}
                    className="h-auto w-full object-contain"
                  />
                </figure>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Near Edge",
                    "Flat Head",
                    "Ruban textile",
                    "Haute résistance",
                    "Haute température",
                    "Supports synthétiques",
                  ].map((type) => (
                    <span
                      key={type}
                      className="rounded-full border border-white/25 bg-background/5 px-4 py-2 text-xs font-medium text-foreground/95 shadow-sm backdrop-blur-md transition-colors group-hover:bg-background/10"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <Link
                  to="/produits"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Découvrir nos rubans <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>

            {solutions.map(({ numero, icone: Icone, titre, texte, exemples }) => (
              <article
                key={numero}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/65 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card sm:p-7"
              >
                <div className="absolute right-5 top-4 font-display text-5xl font-extrabold text-accent/10">
                  {numero}
                </div>
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10">
                    <Icone className="h-5 w-5 text-accent" />
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {numero}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{titre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{texte}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exemples.map((exemple) => (
                      <span
                        key={exemple}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {exemple}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground">
            <Workflow className="h-5 w-5 shrink-0 text-accent" />
            <p>
              Une chaîne maîtrisée : Étiquette + Ruban + Identification + Capture de données + RFID
              + Traçabilité + Service technique.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Solutions en action
            </p>
            <div className="mt-3 h-1 w-24 rounded-full bg-spectrum" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Identification, traçabilité et performance pour votre industrie
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Une chaîne complète allant de l'impression d'étiquettes à la lecture et à la mobilité
              logistique.
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
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Impression • Lecture • Mobilité
              </span>
              <p className="mt-2 max-w-md font-display text-lg font-bold text-foreground">
                Des équipements pensés pour les ateliers, entrepôts et points de vente.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border/60 bg-secondary/25">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {preuves.map(({ icone: Icone, titre, texte }) => (
              <div
                key={titre}
                className="flex gap-4 rounded-2xl border border-border bg-card/50 p-5"
              >
                <Icone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-sm font-bold text-foreground">{titre}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Secteurs
            </p>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Des solutions adaptées à vos contraintes métier
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Services
            </p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Parlons de votre application
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Besoin d'équiper, fiabiliser ou moderniser votre identification ?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Décrivez-nous votre produit, votre support, votre cadence et votre environnement. Nous
              vous orientons vers la configuration la plus adaptée.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={devisMailto()}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.telHref}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-accent" /> Nous appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

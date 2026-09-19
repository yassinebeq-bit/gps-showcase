import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, ExternalLink, FileText, Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { BrandLogo } from "@/components/BrandLogo";
import { marques, produits, devisMailto, whatsappHref, type Marque } from "@/data/catalogue";
import heroProduits from "@/assets/solution-printer.jpg";
import imageImprimantes from "@/assets/prod-printer.jpg";
import imageLecteurs from "@/assets/prod-scanner.jpg";
import imageTerminaux from "@/assets/prod-terminal-tracabilite.png";
import imageEtiquettes from "@/assets/bg-etiquettes-adhesives.png";
import imageRubans from "@/assets/bg-rubans-thermiques.png";
import imageTextile from "@/assets/prod-textile.jpg";
import imageAutomatisation from "@/assets/prod-applicator.jpg";
import imageLogiciels from "@/assets/prod-software.jpg";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Produits et solutions d'identification industrielle | GPS" },
      {
        name: "description",
        content:
          "Explorez les familles de produits GPS : impression, lecture code-barres et RFID, mobilité, étiquettes, rubans, automatisation, pièces, logiciels et intégration.",
      },
      { property: "og:title", content: "Produits et solutions — GPS" },
      {
        property: "og:description",
        content:
          "Une vision complète des solutions GPS pour identifier, imprimer, tracer et automatiser.",
      },
    ],
  }),
  component: ProduitsPage,
});

type FamilleFiltre = "tous" | "impression" | "capture" | "consommables" | "integration";

const familles = [
  {
    id: "imprimantes", filtre: "impression", titre: "Imprimantes d'étiquettes",
    description: "Solutions de bureau, mobiles, semi-industrielles et industrielles adaptées à vos volumes et environnements.",
    image: imageImprimantes, alt: "Imprimante d'étiquettes industrielle générique",
    tags: ["Bureau", "Industrielles", "Mobiles", "RFID"],
    applications: ["Production", "Logistique", "Expédition", "Points de vente"],
  },
  {
    id: "lecteurs", filtre: "capture", titre: "Lecteurs codes-barres & RFID",
    description: "Capture rapide et fiable des données avec des lecteurs filaires, sans fil, fixes ou durcis.",
    image: imageLecteurs, alt: "Lecteur code-barres industriel générique",
    tags: ["1D / 2D", "RFID", "Fixes", "Mobiles"],
    applications: ["Inventaire", "Contrôle", "Traçabilité", "Préparation de commandes"],
  },
  {
    id: "terminaux", filtre: "capture", titre: "Terminaux mobiles",
    description: "Mobilité et collecte de données pour les opérations terrain, les entrepôts et les ateliers.",
    image: imageTerminaux, alt: "Terminal mobile industriel générique",
    tags: ["Durcis", "Android", "Terrain", "Entrepôt"],
    applications: ["Réception", "Picking", "Inventaire", "Suivi de production"],
  },
  {
    id: "etiquettes", filtre: "consommables", titre: "Étiquettes adhésives",
    description: "Matières, adhésifs, formats et technologies sélectionnés selon chaque contrainte d'utilisation.",
    image: imageEtiquettes, alt: "Différents rouleaux d'étiquettes adhésives",
    tags: ["Papier", "Synthétiques", "RFID", "Sur mesure"],
    applications: ["Codes-barres", "Sécurité", "Froid et chaleur", "Environnements exigeants"],
  },
  {
    id: "rubans", filtre: "consommables", titre: "Rubans transfert thermique",
    description: "Des formulations adaptées au support, à la vitesse d'impression et au niveau de résistance recherché.",
    image: imageRubans, alt: "Rubans transfert thermique noirs de différents formats",
    tags: ["Wax", "Wax/Resin", "Resin", "Near Edge"],
    applications: ["Papier", "Supports couchés", "Films synthétiques", "Textile"],
  },
  {
    id: "textile", filtre: "impression", titre: "Impression textile & étiquetage",
    description: "Solutions dédiées aux étiquettes de composition, rubans textiles et besoins de marquage du vêtement.",
    image: imageTextile, alt: "Système d'impression textile industriel générique",
    tags: ["Composition", "Satin", "Polyamide", "Sur mesure"],
    applications: ["Habillement", "Automobile", "Linge", "Traçabilité textile"],
  },
  {
    id: "automatisation", filtre: "integration", titre: "Automatisation & pose d'étiquettes",
    description: "Systèmes d'impression-pose et intégration en ligne pour automatiser les opérations d'étiquetage.",
    image: imageAutomatisation, alt: "Système automatique de pose d'étiquettes générique",
    tags: ["Print & Apply", "Convoyeurs", "Capteurs", "Intégration"],
    applications: ["Cartons", "Palettes", "Produits", "Lignes de conditionnement"],
  },
  {
    id: "logiciels", filtre: "integration", titre: "Logiciels & intégration",
    description: "Création d'étiquettes, gestion de l'impression et connexion aux données de l'entreprise.",
    image: imageLogiciels, alt: "Logiciel générique de création et d'impression d'étiquettes",
    tags: ["Création", "Bases de données", "Automatisation", "Centralisation"],
    applications: ["Modèles d'étiquettes", "ERP et WMS", "Impression contrôlée", "Gestion multi-sites"],
  },
] as const;

const filtresFamilles: Array<{ id: FamilleFiltre; label: string }> = [
  { id: "tous", label: "Toutes les solutions" },
  { id: "impression", label: "Impression" },
  { id: "capture", label: "Capture & mobilité" },
  { id: "consommables", label: "Consommables" },
  { id: "integration", label: "Logiciels & intégration" },
];

const typesEtiquettes = [
  "Papier couché et thermique", "Polypropylène (PP)", "Polyester (PET)", "Polyéthylène (PE)",
  "Haute et basse température", "Sécurité, VOID et destructibles", "Étiquettes RFID", "Transparentes et sur mesure",
] as const;

const filtresMarques = ["Tous", ...marques] as const;

function ProduitsPage() {
  const [filtreFamille, setFiltreFamille] = useState<FamilleFiltre>("tous");
  const [familleActive, setFamilleActive] = useState<(typeof familles)[number]>(familles[0]);
  const [catalogueVisible, setCatalogueVisible] = useState(false);
  const [filtreMarque, setFiltreMarque] = useState<"Tous" | Marque>("Tous");

  const famillesVisibles = useMemo(
    () => filtreFamille === "tous" ? familles : familles.filter((famille) => famille.filtre === filtreFamille),
    [filtreFamille],
  );
  const referencesVisibles = useMemo(
    () => filtreMarque === "Tous" ? produits : produits.filter((produit) => produit.marque === filtreMarque),
    [filtreMarque],
  );

  const choisirFamille = (famille: (typeof familles)[number]) => {
    setFamilleActive(famille);
    window.setTimeout(() => document.getElementById("famille-selectionnee")?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-[#031326]">
        <img src={heroProduits} alt="Solution d'impression et d'identification dans un environnement logistique" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031326] via-[#031326]/92 to-[#031326]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031326]/80 via-transparent to-[#031326]/30" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Nos produits et solutions</p>
            <div className="mt-4 h-px w-24 bg-accent" />
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Une offre complète pour identifier, imprimer, tracer et automatiser.</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">Explorez nos principales familles de produits. Les configurations, marques et références sont sélectionnées selon votre application, vos contraintes techniques et leur disponibilité.</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2" role="group" aria-label="Filtrer les familles de produits">
          {filtresFamilles.map(({ id, label }) => (
            <button key={id} type="button" onClick={() => setFiltreFamille(id)} aria-pressed={filtreFamille === id} className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition-all ${filtreFamille === id ? "border-transparent bg-brand text-primary-foreground shadow-brand" : "border-border bg-card/40 text-muted-foreground hover:border-accent/40 hover:text-foreground"}`}>{label}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {famillesVisibles.map((famille, index) => (
            <button id={famille.id} key={famille.id} type="button" onClick={() => choisirFamille(famille)} className={`group relative min-h-[360px] scroll-mt-28 overflow-hidden rounded-3xl border text-left transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-card ${familleActive.id === famille.id ? "border-accent/70" : "border-border"} ${index === 0 && filtreFamille === "tous" ? "lg:col-span-2" : ""}`}>
              <img src={famille.image} alt={famille.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031326] via-[#031326]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h2 className="font-display text-2xl font-extrabold text-white">{famille.titre}</h2>
                <div className="mt-4 flex flex-wrap gap-2">{famille.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-white/20 bg-[#031326]/55 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-sm">{tag}</span>)}</div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Explorer la famille <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </button>
          ))}
        </div>

        <article id="famille-selectionnee" className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-accent/25 bg-card/70">
          <div className="grid lg:grid-cols-[42%_58%]">
            <img src={familleActive.image} alt={familleActive.alt} className="h-72 w-full object-cover lg:h-full" />
            <div className="p-6 sm:p-9 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Famille sélectionnée</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground">{familleActive.titre}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{familleActive.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">{familleActive.applications.map((application) => <div key={application} className="rounded-2xl border border-border bg-background/45 px-4 py-3 text-sm font-semibold text-foreground">{application}</div>)}</div>
              {familleActive.id === "etiquettes" ? <div id="etiquettes" className="mt-7 scroll-mt-28"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Types disponibles</p><div className="mt-3 flex flex-wrap gap-2">{typesEtiquettes.map((type) => <span key={type} className="rounded-full border border-border px-3 py-2 text-xs text-muted-foreground">{type}</span>)}</div></div> : null}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={whatsappHref(familleActive.titre)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" /> Demander une recommandation</a>
                <a href={devisMailto(familleActive.titre)} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-accent"><Mail className="h-4 w-4" /> Demander un devis</a>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12 rounded-3xl border border-accent/25 bg-gradient-to-r from-accent/10 via-card/70 to-card/30 p-6 sm:p-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div><h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">Vous ne trouvez pas votre référence ?</h2><p className="mt-3 text-muted-foreground">Notre équipe vous oriente selon votre application et vos contraintes techniques.</p></div>
            <a href={whatsappHref("une recommandation de produit")} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand">Demander une recommandation <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-10">
          <button type="button" onClick={() => setCatalogueVisible((visible) => !visible)} aria-expanded={catalogueVisible} className="flex w-full items-center justify-between gap-5 rounded-2xl border border-border bg-card/60 p-5 text-left transition-colors hover:border-accent/40 sm:p-6">
            <span><span className="block font-display text-xl font-extrabold text-foreground">Références et marques proposées</span><span className="mt-1 block text-sm text-muted-foreground">Consultez quelques configurations représentatives disponibles selon les besoins.</span></span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${catalogueVisible ? "rotate-180" : ""}`} />
          </button>

          {catalogueVisible ? <div className="mt-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les références par marque">{filtresMarques.map((marque) => <button key={marque} type="button" onClick={() => setFiltreMarque(marque)} aria-pressed={filtreMarque === marque} className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${filtreMarque === marque ? "border-transparent bg-brand text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{marque}</button>)}</div>
            <div className="mt-7 grid gap-4 lg:grid-cols-2">{referencesVisibles.map((produit) => <article key={produit.id} className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4"><BrandLogo marque={produit.marque} className="h-7 max-w-36 object-contain" /><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Exemple de configuration</span></div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground">{produit.modele}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{produit.description}</p>
              <div className="mt-5 flex flex-wrap gap-3"><a href={whatsappHref(`${produit.marque} ${produit.modele}`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/60 px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-[#25D366]/10"><MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp</a>{produit.ficheUrl ? <a href={produit.ficheUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-foreground hover:border-accent"><FileText className="h-4 w-4" /> Fiche fabricant <ExternalLink className="h-3.5 w-3.5" /></a> : null}</div>
            </article>)}</div>
          </div> : null}
        </div>

        <p className="mt-10 rounded-2xl border border-border bg-secondary/30 p-5 text-sm leading-relaxed text-muted-foreground">Les familles et références présentées servent à faciliter l'orientation. GPS valide la configuration, la compatibilité, les options et la disponibilité avant chaque devis.</p>
      </Section>
    </>
  );
}

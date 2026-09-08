import printer from "@/assets/prod-printer.jpg";
import scanner from "@/assets/prod-scanner.jpg";
import applicator from "@/assets/prod-applicator.jpg";
import consumables from "@/assets/prod-consumables.jpg";
import software from "@/assets/prod-software.jpg";

export type Produit = {
  id: string;
  nom: string;
  marque: "Zebra" | "Avery Dennison" | "POSTEK" | "NiceLabel";
  categorie: string;
  description: string;
  points: string[];
  image: string;
};

export const marques = ["Zebra", "Avery Dennison", "POSTEK", "NiceLabel"] as const;

export const categories = [
  "Imprimantes industrielles",
  "Imprimantes de bureau",
  "Imprimantes mobiles",
  "Terminaux & lecteurs",
  "Systèmes d'étiquetage automatique",
  "Consommables",
  "Logiciels",
] as const;

export const produits: Produit[] = [
  {
    id: "zebra-zt411",
    nom: "Zebra ZT411",
    marque: "Zebra",
    categorie: "Imprimantes industrielles",
    description:
      "Imprimante industrielle transfert thermique conçue pour les cadences soutenues en production et en entrepôt.",
    points: ["Largeur d'impression 4\"", "Écran couleur tactile", "Connectivité étendue"],
    image: printer,
  },
  {
    id: "zebra-zt231",
    nom: "Zebra ZT231",
    marque: "Zebra",
    categorie: "Imprimantes industrielles",
    description:
      "Imprimante industrielle robuste et simple à déployer pour l'étiquetage quotidien de palettes et de cartons.",
    points: ["Prise en main rapide", "Construction métallique", "Maintenance facilitée"],
    image: printer,
  },
  {
    id: "zebra-zd421",
    nom: "Zebra ZD421",
    marque: "Zebra",
    categorie: "Imprimantes de bureau",
    description:
      "Imprimante de bureau compacte pour postes d'expédition, laboratoires et points de contrôle qualité.",
    points: ["Format compact", "Cartouche ruban en option", "Installation simple"],
    image: printer,
  },
  {
    id: "zebra-zq630",
    nom: "Zebra ZQ630",
    marque: "Zebra",
    categorie: "Imprimantes mobiles",
    description:
      "Imprimante mobile durcie pour l'étiquetage en mouvement dans les entrepôts et sur les quais.",
    points: ["Autonomie longue durée", "Sans fil", "Résistante aux chocs"],
    image: printer,
  },
  {
    id: "zebra-mc3300",
    nom: "Zebra MC3300",
    marque: "Zebra",
    categorie: "Terminaux & lecteurs",
    description:
      "Terminal mobile durci pour la collecte de données, l'inventaire et la préparation de commandes.",
    points: ["Lecture 1D/2D", "Android", "Ergonomie pistolet ou droite"],
    image: scanner,
  },
  {
    id: "zebra-ds2208",
    nom: "Zebra DS2208",
    marque: "Zebra",
    categorie: "Terminaux & lecteurs",
    description:
      "Lecteur de codes-barres filaire polyvalent pour comptoirs, réception et contrôle qualité.",
    points: ["Lecture 1D/2D", "Plug and play", "Usage intensif"],
    image: scanner,
  },
  {
    id: "postek-g3106",
    nom: "POSTEK G-3106",
    marque: "POSTEK",
    categorie: "Imprimantes industrielles",
    description:
      "Imprimante industrielle haute résolution adaptée aux étiquettes de petite taille et aux marquages détaillés.",
    points: ["Haute résolution", "Châssis industriel", "Bon rapport performance/coût"],
    image: printer,
  },
  {
    id: "postek-tx3r",
    nom: "POSTEK TX3r",
    marque: "POSTEK",
    categorie: "Imprimantes industrielles",
    description:
      "Imprimante industrielle RFID pour l'encodage et l'impression d'étiquettes intelligentes.",
    points: ["Encodage RFID UHF", "Impression haute définition", "Production continue"],
    image: printer,
  },
  {
    id: "postek-iq200",
    nom: "POSTEK iQ200",
    marque: "POSTEK",
    categorie: "Imprimantes de bureau",
    description:
      "Imprimante de bureau fiable pour les volumes moyens en atelier, magasin et logistique.",
    points: ["Encombrement réduit", "Fonctionnement silencieux", "Entretien simple"],
    image: printer,
  },
  {
    id: "avery-als306",
    nom: "Avery Dennison ALS 306",
    marque: "Avery Dennison",
    categorie: "Systèmes d'étiquetage automatique",
    description:
      "Système d'application automatique d'étiquettes intégrable sur ligne de conditionnement.",
    points: ["Application automatique", "Intégration sur convoyeur", "Cadence industrielle"],
    image: applicator,
  },
  {
    id: "avery-pcm",
    nom: "Avery Dennison PCM",
    marque: "Avery Dennison",
    categorie: "Systèmes d'étiquetage automatique",
    description:
      "Module impression-pose pour l'étiquetage variable des cartons et palettes en fin de ligne.",
    points: ["Impression et pose", "Données variables", "Fonctionnement continu"],
    image: applicator,
  },
  {
    id: "avery-monarch",
    nom: "Avery Dennison Monarch",
    marque: "Avery Dennison",
    categorie: "Imprimantes de bureau",
    description:
      "Solutions d'impression d'étiquettes et d'étiquettes prix pour le retail et le textile.",
    points: ["Étiquetage retail", "Étiquettes cartonnées", "Marquage produit"],
    image: printer,
  },
  {
    id: "avery-consommables",
    nom: "Étiquettes & rubans Avery Dennison",
    marque: "Avery Dennison",
    categorie: "Consommables",
    description:
      "Étiquettes adhésives, étiquettes textiles et rubans transfert thermique adaptés à chaque support.",
    points: ["Formats sur mesure", "Adhésifs spécifiques", "Rubans cire, mixte, résine"],
    image: consumables,
  },
  {
    id: "consommables-gps",
    nom: "Consommables d'identification",
    marque: "Zebra",
    categorie: "Consommables",
    description:
      "Rouleaux d'étiquettes et rubans compatibles avec l'ensemble du parc d'imprimantes installé.",
    points: ["Étiquettes papier et synthétiques", "Rubans TTR", "Approvisionnement régulier"],
    image: consumables,
  },
  {
    id: "nicelabel-designer",
    nom: "NiceLabel Designer",
    marque: "NiceLabel",
    categorie: "Logiciels",
    description:
      "Logiciel de conception d'étiquettes avec gestion des données variables et des modèles normalisés.",
    points: ["Conception d'étiquettes", "Données variables", "Modèles réutilisables"],
    image: software,
  },
  {
    id: "nicelabel-lms",
    nom: "NiceLabel LMS",
    marque: "NiceLabel",
    categorie: "Logiciels",
    description:
      "Plateforme de gestion centralisée de l'étiquetage : versions, droits, historique et intégration ERP.",
    points: ["Gestion centralisée", "Traçabilité des versions", "Intégration ERP/WMS"],
    image: software,
  },
];

export const CONTACT = {
  adresse: "4, rue Bangkok, Étage 2, Z.I. Sidi Bernoussi — Casablanca, Maroc",
  tel: "+212 (0)5 22 34 39 80",
  telHref: "tel:+212522343980",
  email: "contact@gps.co.ma",
  site: "www.gps.co.ma",
  siteHref: "https://www.gps.co.ma",
};

export function devisMailto(produit?: string) {
  const sujet = produit
    ? `Demande de devis — ${produit}`
    : "Demande de devis — Global Performance Services";
  const corps = [
    "Bonjour,",
    "",
    produit
      ? `Je souhaite recevoir un devis concernant : ${produit}.`
      : "Je souhaite recevoir un devis pour vos solutions d'identification et de traçabilité.",
    "",
    "Société : ",
    "Secteur d'activité : ",
    "Besoin / application : ",
    "Quantité estimée : ",
    "Personne à contacter : ",
    "Téléphone : ",
    "",
    "Merci de me recontacter.",
    "",
    "Cordialement,",
  ].join("\n");
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
}

import printer from "@/assets/prod-printer.jpg";
import scanner from "@/assets/prod-scanner.jpg";
import applicator from "@/assets/prod-applicator.jpg";
import consumables from "@/assets/prod-consumables.jpg";
import software from "@/assets/prod-software.jpg";
import mobile from "@/assets/prod-mobile.jpg";
import textile from "@/assets/prod-textile.jpg";

export type Marque = "Zebra" | "Avery Dennison" | "POSTEK" | "NiceLabel";

export type Produit = {
  id: string;
  modele: string;
  marque: Marque;
  categorie: string;
  description: string;
  points: string[];
  image: string;
};

export const marques: Marque[] = ["Zebra", "Avery Dennison", "POSTEK", "NiceLabel"];

export const produits: Produit[] = [
  {
    id: "zebra-zt610",
    modele: "ZT610",
    marque: "Zebra",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle haut de gamme pour les environnements de production exigeants et les volumes d'étiquettes élevés.",
    points: ["Résolutions 203 / 300 / 600 dpi", "Écran couleur tactile", "Châssis métallique intensif"],
    image: printer,
  },
  {
    id: "zebra-zt411",
    modele: "ZT411",
    marque: "Zebra",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle 4 pouces pour l'étiquetage de cartons, palettes et pièces en atelier ou en entrepôt.",
    points: ["Résolutions 203 / 300 / 600 dpi", "Écran tactile couleur", "Connectivité filaire et sans fil"],
    image: printer,
  },
  {
    id: "zebra-zq521",
    modele: "ZQ521",
    marque: "Zebra",
    categorie: "Étiquetage mobile",
    description:
      "Imprimante mobile durcie pour l'impression d'étiquettes directement sur les quais, en magasin ou en tournée.",
    points: ["Impression 4 pouces mobile", "Résolution 203 dpi", "Conception durcie, autonomie longue"],
    image: mobile,
  },
  {
    id: "zebra-mc3300",
    modele: "MC3300",
    marque: "Zebra",
    categorie: "Terminaux & lecteurs",
    description:
      "Terminal mobile durci pour l'inventaire, la réception et la préparation de commandes avec lecture de codes-barres.",
    points: ["Lecture codes-barres 1D / 2D", "Écran tactile Android", "Usage intensif en entrepôt"],
    image: scanner,
  },
  {
    id: "avery-snap-500",
    modele: "SNAP™ 500",
    marque: "Avery Dennison",
    categorie: "Étiquettes textiles",
    description:
      "Système d'impression dédié aux étiquettes textiles : étiquettes d'entretien, de composition et de traçabilité vêtement.",
    points: ["Impression sur rubans textiles", "Résolution 300 dpi", "Étiquettes d'entretien et de taille"],
    image: textile,
  },
  {
    id: "avery-adtp2",
    modele: "Monarch® ADTP2",
    marque: "Avery Dennison",
    categorie: "Identification logistique & retail",
    description:
      "Imprimante d'étiquettes et d'étiquettes cartonnées pour l'identification logistique, le marquage produit et le retail.",
    points: ["Codes-barres 1D / 2D", "Résolution 203 / 300 dpi", "Supports papier et carton"],
    image: printer,
  },
  {
    id: "avery-als306",
    modele: "ALS 306",
    marque: "Avery Dennison",
    categorie: "Étiquetage automatique",
    description:
      "Système d'application automatique d'étiquettes intégrable sur ligne de conditionnement et convoyeur.",
    points: ["Pose automatique en ligne", "Cadence industrielle", "Intégration sur machine"],
    image: applicator,
  },
  {
    id: "postek-em210",
    modele: "EM210",
    marque: "POSTEK",
    categorie: "Impression de bureau",
    description:
      "Imprimante compacte pour l'étiquetage au poste de travail : expédition, réception et contrôle qualité.",
    points: ["Résolution 203 dpi", "Format compact", "Codes-barres 1D / 2D"],
    image: printer,
  },
  {
    id: "postek-tx3",
    modele: "TX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle haute définition pour les petites étiquettes et les marquages techniques détaillés.",
    points: ["Résolution jusqu'à 600 dpi", "Châssis industriel", "Impression fine et régulière"],
    image: printer,
  },
  {
    id: "postek-zx2",
    modele: "ZX2",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle polyvalente pour les volumes moyens en production, logistique et agroalimentaire.",
    points: ["Résolution 203 / 300 dpi", "Écran tactile couleur", "Utilisation continue"],
    image: printer,
  },
  {
    id: "postek-zx3",
    modele: "ZX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle robuste pour l'étiquetage intensif de cartons et de palettes en fin de ligne.",
    points: ["Résolution jusqu'à 600 dpi", "Écran tactile", "Grande capacité de rouleau"],
    image: printer,
  },
  {
    id: "postek-gx3",
    modele: "GX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle conçue pour les ateliers de production nécessitant précision et fiabilité au quotidien.",
    points: ["Résolution 203 / 300 dpi", "Mécanique renforcée", "Maintenance simplifiée"],
    image: printer,
  },
  {
    id: "postek-g6000",
    modele: "G6000",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle grande largeur pour les étiquettes logistiques et les supports de format important.",
    points: ["Impression grande largeur", "Résolution 203 / 300 dpi", "Volumes d'impression élevés"],
    image: printer,
  },
  {
    id: "consommables",
    modele: "Étiquettes & rubans transfert thermique",
    marque: "Avery Dennison",
    categorie: "Consommables",
    description:
      "Étiquettes adhésives, étiquettes textiles et rubans transfert thermique sélectionnés selon le support et l'environnement.",
    points: ["Formats sur mesure", "Adhésifs spécifiques", "Rubans cire, mixte, résine"],
    image: consumables,
  },
  {
    id: "nicelabel-designer",
    modele: "NiceLabel Designer",
    marque: "NiceLabel",
    categorie: "Logiciels d'étiquetage",
    description:
      "Logiciel de conception d'étiquettes avec codes-barres, données variables et modèles normalisés.",
    points: ["Conception d'étiquettes", "Codes-barres 1D / 2D", "Données variables"],
    image: software,
  },
  {
    id: "nicelabel-lms",
    modele: "NiceLabel LMS",
    marque: "NiceLabel",
    categorie: "Logiciels d'étiquetage",
    description:
      "Plateforme de gestion centralisée de l'étiquetage : droits, versions, historique et connexion aux systèmes ERP / WMS.",
    points: ["Gestion centralisée", "Traçabilité des versions", "Intégration ERP / WMS"],
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

export const secteurs = [
  {
    titre: "Textile et habillement",
    texte:
      "Étiquettes d'entretien, de composition et de taille, marquage produit et traçabilité des séries de production.",
  },
  {
    titre: "Logistique et entreposage",
    texte:
      "Étiquetage de colis et de palettes, adressage d'emplacements, préparation de commandes et inventaires.",
  },
  {
    titre: "Automobile",
    texte:
      "Identification des pièces et des kits, étiquettes techniques résistantes et suivi des flux de production.",
  },
  {
    titre: "Industrie manufacturière",
    texte:
      "Marquage des produits semi-finis et finis, suivi des ordres de fabrication et contrôle qualité en ligne.",
  },
  {
    titre: "Agroalimentaire",
    texte:
      "Étiquetage des lots et des dates, traçabilité amont-aval et supports adaptés au froid et à l'humidité.",
  },
  {
    titre: "Béton préfabriqué",
    texte:
      "Identification des éléments préfabriqués, étiquettes résistantes aux chantiers et suivi des livraisons.",
  },
  {
    titre: "Retail et distribution",
    texte:
      "Étiquetage prix et produit, marquage rayon, réception marchandise et inventaires en point de vente.",
  },
];

export const services = [
  {
    titre: "Conseil et étude de besoin",
    texte:
      "Analyse de vos flux et de vos environnements de travail pour définir la solution d'identification adaptée.",
  },
  {
    titre: "Fourniture de matériel",
    texte:
      "Imprimantes industrielles, mobiles et de bureau, terminaux, lecteurs et systèmes d'étiquetage automatique.",
  },
  {
    titre: "Consommables",
    texte:
      "Étiquettes et rubans transfert thermique sélectionnés selon le support, l'usage et les contraintes du site.",
  },
  {
    titre: "Installation et mise en service",
    texte:
      "Paramétrage des équipements, intégration sur vos postes et lignes, et accompagnement au démarrage.",
  },
  {
    titre: "Maintenance et SAV",
    texte:
      "Entretien préventif, dépannage et fourniture de pièces pour maintenir votre parc en fonctionnement.",
  },
  {
    titre: "Logiciels et intégration",
    texte:
      "Mise en place des logiciels d'étiquetage et connexion aux systèmes de gestion existants.",
  },
];

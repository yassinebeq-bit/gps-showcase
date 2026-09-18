export type Marque = "Zebra" | "Avery Dennison" | "POSTEK" | "CAB";

export type Produit = {
  id: string;
  modele: string;
  marque: Marque;
  categorie: string;
  description: string;
  points: string[];
  ficheUrl?: string;
  specs?: { label: string; valeur: string }[];
};

export const marques: Marque[] = ["Zebra", "Avery Dennison", "POSTEK", "CAB"];

export const produits: Produit[] = [
  {
    id: "zebra-zt610",
    modele: "ZT610",
    marque: "Zebra",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle haut de gamme pour les environnements de production exigeants et les volumes d'étiquettes élevés.",
    points: [
      "Résolutions 203 / 300 / 600 dpi",
      "Écran couleur tactile",
      "Châssis métallique intensif",
    ],
    ficheUrl: "https://www.zebra.com/gb/en/products/printers/industrial/zt600-series/zt610.html",
    specs: [
      { label: "Technologie", valeur: "Thermique direct / transfert thermique" },
      { label: "Largeur d’impression", valeur: "jusqu’à 104 mm" },
      { label: "Vitesse max.", valeur: "356 mm/s" },
      { label: "Résolution", valeur: "203 / 300 / 600 dpi" },
    ],
  },
  {
    id: "zebra-zt411",
    modele: "ZT411",
    marque: "Zebra",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle 4 pouces pour l'étiquetage de cartons, palettes et pièces en atelier ou en entrepôt.",
    points: [
      "Résolutions 203 / 300 / 600 dpi",
      "Écran tactile couleur",
      "Connectivité filaire et sans fil",
    ],
    ficheUrl: "https://www.zebra.com/us/en/products/printers/industrial/zt400-series/zt411.html",
    specs: [
      { label: "Technologie", valeur: "Thermique direct / transfert thermique" },
      { label: "Largeur d’impression", valeur: "jusqu’à 104 mm" },
      { label: "Vitesse max.", valeur: "356 mm/s" },
      { label: "Résolution", valeur: "203 / 300 / 600 dpi" },
    ],
  },
  {
    id: "zebra-zq521",
    modele: "ZQ521",
    marque: "Zebra",
    categorie: "Étiquetage mobile",
    description:
      "Imprimante mobile durcie pour l'impression d'étiquettes directement sur les quais, en magasin ou en tournée.",
    points: [
      "Impression 4 pouces mobile",
      "Résolution 203 dpi",
      "Conception durcie, autonomie longue",
    ],
  },
  {
    id: "zebra-mc3300",
    modele: "MC3300",
    marque: "Zebra",
    categorie: "Terminaux & lecteurs",
    description:
      "Terminal mobile durci pour l'inventaire, la réception et la préparation de commandes avec lecture de codes-barres.",
    points: ["Lecture codes-barres 1D / 2D", "Écran tactile Android", "Usage intensif en entrepôt"],
  },
  {
    id: "avery-snap-500",
    modele: "SNAP™ 500",
    marque: "Avery Dennison",
    categorie: "Étiquettes textiles",
    description:
      "Système d'impression dédié aux étiquettes textiles : étiquettes d'entretien, de composition et de traçabilité vêtement.",
    points: [
      "Impression sur rubans textiles",
      "Résolution 300 dpi",
      "Étiquettes d'entretien et de taille",
    ],
  },
  {
    id: "avery-adtp2",
    modele: "Monarch® ADTP2",
    marque: "Avery Dennison",
    categorie: "Identification logistique & retail",
    description:
      "Imprimante d'étiquettes et d'étiquettes cartonnées pour l'identification logistique, le marquage produit et le retail.",
    points: ["Codes-barres 1D / 2D", "Résolution 203 / 300 dpi", "Supports papier et carton"],
  },
  {
    id: "avery-als306",
    modele: "ALS 306",
    marque: "Avery Dennison",
    categorie: "Étiquetage automatique",
    description:
      "Système d'application automatique d'étiquettes intégrable sur ligne de conditionnement et convoyeur.",
    points: ["Pose automatique en ligne", "Cadence industrielle", "Intégration sur machine"],
  },
  {
    id: "postek-em210",
    modele: "EM210",
    marque: "POSTEK",
    categorie: "Impression de bureau",
    description:
      "Imprimante compacte pour l'étiquetage au poste de travail : expédition, réception et contrôle qualité.",
    points: ["Résolution 203 dpi", "Format compact", "Codes-barres 1D / 2D"],
    ficheUrl: "https://www.postekchina.com/product_E/",
  },
  {
    id: "postek-tx3",
    modele: "TX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle haute définition pour les petites étiquettes et les marquages techniques détaillés.",
    points: ["Résolution 300 dpi", "Châssis industriel", "Impression fine et régulière"],
    ficheUrl: "https://postekus.com/product_TX/",
  },
  {
    id: "postek-zx2",
    modele: "ZX2",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle polyvalente pour les volumes moyens en production, logistique et agroalimentaire.",
    points: ["Résolution 203 dpi", "Écran tactile couleur", "Utilisation continue"],
  },
  {
    id: "postek-zx3",
    modele: "ZX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle robuste pour l'étiquetage intensif de cartons et de palettes en fin de ligne.",
    points: ["Résolution 300 dpi", "Écran tactile", "Grande capacité de rouleau"],
  },
  {
    id: "postek-gx3",
    modele: "GX3",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle conçue pour les ateliers de production nécessitant précision et fiabilité au quotidien.",
    points: ["Résolution 203 / 300 dpi", "Mécanique renforcée", "Maintenance simplifiée"],
  },
  {
    id: "postek-g6000",
    modele: "G6000",
    marque: "POSTEK",
    categorie: "Impression industrielle",
    description:
      "Imprimante haute résolution pour les petites étiquettes, les codes 2D denses et les marquages techniques détaillés.",
    points: [
      "Résolution 600 dpi",
      "Largeur d'impression jusqu'à 104 mm",
      "Impression de haute précision",
    ],
    ficheUrl: "https://www.postekus.com/product_G/",
  },
  {
    id: "consommables",
    modele: "Étiquettes & rubans transfert thermique",
    marque: "Avery Dennison",
    categorie: "Consommables",
    description:
      "Étiquettes adhésives, étiquettes textiles et rubans transfert thermique sélectionnés selon le support et l'environnement.",
    points: ["Formats sur mesure", "Adhésifs spécifiques", "Rubans cire, mixte, résine"],
  },
  {
    id: "cab-squix-4",
    modele: "SQUIX 4",
    marque: "CAB",
    categorie: "Impression industrielle",
    description:
      "Imprimante industrielle polyvalente pour l'identification de produits, composants, cartons et palettes.",
    points: [
      "Largeur d'impression 4 pouces",
      "Écran tactile couleur",
      "Nombreuses interfaces et options",
    ],
    ficheUrl: "https://www.cab.de/en/marking/label-printer/squix/",
  },
];

export const CONTACT = {
  adresse: "14 Rue Lucerne, Rés. Latifa, 1er étage, N°3, Quartier des Hôpitaux — Casablanca, Maroc",
  tel: "+212 (0)5 22 34 39 80",
  telHref: "tel:+212522343980",
  mobile: "+212 663 197 938",
  mobileHref: "tel:+212663197938",
  whatsapp: "+212 663 197 938",
  email: "contact@gps.co.ma",
  site: "www.gps.co.ma",
  siteHref: "https://www.gps.co.ma",
};

export function whatsappHref(produit?: string) {
  const message = produit
    ? `Bonjour, je souhaite recevoir des informations et un devis concernant : ${produit}.`
    : "Bonjour, je souhaite échanger avec GPS au sujet d'une solution d'identification et de traçabilité.";
  return `https://wa.me/212663197938?text=${encodeURIComponent(message)}`;
}

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

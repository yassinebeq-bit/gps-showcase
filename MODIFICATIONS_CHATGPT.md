# Ajustements GPS Showcase

Version de travail préparée à partir du ZIP Lovable/GitHub fourni le 09/09/2026.

## Modifications principales

- Nouveau message d'accueil plus fort : « Identifiez. Tracez. Optimisez. Faites avancer votre industrie. »
- Nouveau hero industriel sombre et bleu, avec image générée puis recadrée pour l'intégration au site.
- Positionnement élargi : imprimantes, étiquettes, rubans, lecteurs, terminaux, pièces de rechange, logiciels, automatisation et service technique.
- CTA renforcés : demande de devis, découverte des solutions et appel direct.
- Bloc de réassurance : solutions complètes, service technique et présence à Casablanca.
- Remplacement de « Marques distribuées » par « Marques & technologies proposées » afin d'éviter une affirmation commerciale non vérifiée.
- Nouvelle section « Vos besoins, nos solutions » avec 6 familles de solutions.
- Section « Solutions en action » modernisée avec cartes visuelles et gradients.
- Ajout d'une bande de preuves B2B : support technique, Casablanca, offre multi-solutions et approche terrain.
- Titres catalogue, secteurs, services et CTA final rendus plus commerciaux.
- SEO de la page d'accueil amélioré.
- Logo fourni par l'utilisateur intégré en fichier local.
- Les 3 visuels de la section « Solutions en action » ont été convertis en fichiers locaux afin d'éviter de dépendre des URLs internes Lovable `__l5e` lors d'un futur hébergement externe.

## Fichiers principaux modifiés

- `src/routes/index.tsx`
- `src/styles.css`
- `src/components/Logo.tsx`
- `src/components/SiteFooter.tsx`

## Nouveaux visuels locaux

- `src/assets/hero-gps-enhanced.jpg`
- `src/assets/gps-logo-local.png`
- `src/assets/solution-printer.jpg`
- `src/assets/solution-mobile.jpg`
- `src/assets/solution-scanner.jpg`

## Validation

Une tentative d'installation des dépendances avec npm a dépassé le délai disponible dans l'environnement, donc le build Vite n'a pas pu être exécuté ici. Le code a été vérifié structurellement et les anciennes références d'assets Lovable utilisées sur la page d'accueil ont été supprimées.
# Version 16 — site bilingue FR / EN

- Ajout d'un sélecteur FR / EN dans le header, visible sur ordinateur et mobile.
- Mémorisation de la langue choisie dans le navigateur.
- Traduction de l'accueil, des produits, des secteurs, des services, du contact, du footer et de la politique de confidentialité.
- Traduction des textes SEO, attributs d'accessibilité, messages WhatsApp et demandes de devis par e-mail.
- Conservation des URL existantes afin de ne pas casser les liens déjà diffusés.
# Version 17 — correction professionnelle du bandeau de logos

- Suppression des doubles fonds blancs intégrés dans les logos POSTEK, cab et SATO.
- Utilisation du visuel officiel Avery Dennison, recadré proprement.
- Calibration individuelle de la taille optique des sept marques.
- Réduction de TSC et agrandissement équilibré des autres logos.
- Correction de « TECHNOLOGYS » en « TECHNOLOGIES » dans la version anglaise.
# Version 18 — agrandissement cab et SATO

- Recadrage interne des SVG cab et SATO pour supprimer l'espace transparent inutile.
- Agrandissement de leur taille optique afin de les aligner visuellement avec Zebra et POSTEK.
# Version 19 — correction du logo POSTEK

- Recadrage interne du SVG POSTEK pour éliminer les marges transparentes.
- Agrandissement du logo afin d'obtenir un poids visuel cohérent avec les autres marques.

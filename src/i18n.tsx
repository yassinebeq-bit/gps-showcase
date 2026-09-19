import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "fr" | "en";

const STORAGE_KEY = "gps-language";

const translations: Array<[string, string]> = [
  ["Politique de confidentialité et protection des données personnelles", "Privacy and personal data protection policy"],
  ["Solutions d'identification & traçabilité industrielle", "Industrial identification & traceability solutions"],
  ["Une offre complète pour identifier, imprimer, tracer et automatiser.", "A complete offering to identify, print, trace and automate."],
  ["Explorez nos principales familles de produits. Les configurations, marques et références sont sélectionnées selon votre application, vos contraintes techniques et leur disponibilité.", "Explore our main product families. Configurations, brands and references are selected according to your application, technical constraints and availability."],
  ["Global Performance Services accompagne les industriels au Maroc avec des imprimantes d'étiquettes, terminaux, lecteurs, consommables, pièces, logiciels et services techniques.", "Global Performance Services supports industrial companies in Morocco with label printers, mobile computers, scanners, consumables, spare parts, software and technical services."],
  ["Imprimantes, étiquettes, rubans, pièces de rechange, lecteurs, terminaux, logiciels et service technique : GPS construit une solution complète autour de vos flux et de vos équipements.", "Printers, labels, ribbons, spare parts, scanners, mobile computers, software and technical service: GPS builds a complete solution around your workflows and equipment."],
  ["Identifiez. Tracez. Optimisez.", "Identify. Trace. Optimize."],
  ["Faites avancer votre industrie.", "Move your industry forward."],
  ["Des solutions complètes d'identification, d'étiquetage, de traçabilité et de marquage pour les environnements industriels.", "Complete identification, labelling, traceability and marking solutions for industrial environments."],
  ["Vos équipements restent performants.", "Keep your equipment performing."],
  ["Installation, mise en service, maintenance, diagnostic et réparation de vos solutions d'identification.", "Installation, commissioning, maintenance, diagnostics and repair of your identification solutions."],
  ["Des matières, adhésifs et formats sélectionnés selon le support, la température, l'environnement et la durée d'utilisation.", "Materials, adhesives and formats selected according to the surface, temperature, environment and service life."],
  ["Trois technologies pour ajuster la qualité d'impression et la résistance à chaque application.", "Three technologies to match print quality and resistance to every application."],
  ["Une chaîne maîtrisée : Étiquette + Ruban + Identification + Capture de données + RFID + Traçabilité + Service technique.", "A complete chain: Label + Ribbon + Identification + Data capture + RFID + Traceability + Technical service."],
  ["Identification, traçabilité et performance pour votre industrie", "Identification, traceability and performance for your industry"],
  ["Une chaîne complète allant de l'impression d'étiquettes à la lecture et à la mobilité terrain.", "A complete chain from label printing to scanning and field mobility."],
  ["Une chaîne complète allant de l'impression d'étiquettes à la lecture et à la mobilité logistique.", "A complete chain from label printing to scanning and logistics mobility."],
  ["Solutions en action", "Solutions in action"],
  ["Service technique", "Technical service"],
  ["Support technique", "Technical support"],
  ["Conseil, installation et accompagnement", "Consulting, installation and ongoing support"],
  ["Des équipements pensés pour les ateliers, entrepôts et points de vente.", "Equipment designed for workshops, warehouses and retail locations."],
  ["Des solutions adaptées à vos contraintes métier", "Solutions tailored to your operational constraints"],
  ["De l'étude du besoin au suivi de votre parc", "From needs assessment to fleet support"],
  ["Besoin d'équiper, fiabiliser ou moderniser votre identification ?", "Need to equip, secure or modernize your identification operations?"],
  ["Décrivez-nous votre produit, votre support, votre cadence et votre environnement. Nous vous orientons vers la configuration la plus adaptée.", "Tell us about your product, media, throughput and environment. We will guide you toward the most suitable configuration."],
  ["Marques présentées à titre indicatif. GPS est une entreprise indépendante, sans affiliation officielle avec les fabricants mentionnés, sauf indication contraire.", "Brands are shown for information purposes only. GPS is an independent company with no official affiliation with the manufacturers mentioned, unless otherwise stated."],
  ["Technologies adaptées à vos besoins", "Technologies tailored to your needs"],
  ["Notre équipe répond à vos demandes d'information, de démonstration et de devis sur l'ensemble des solutions d'identification et de traçabilité.", "Our team responds to enquiries, demonstration requests and quotations for all identification and traceability solutions."],
  ["Le bouton ci-dessous ouvre votre messagerie avec un e-mail déjà préparé : il vous suffit de compléter votre société, votre secteur et votre besoin, puis d'envoyer.", "The button below opens a prepared email. Simply add your company, industry and requirements, then send it."],
  ["Chaque secteur impose ses propres supports, environnements et exigences de traçabilité. Nous adaptons le matériel, les consommables et le paramétrage à votre réalité terrain.", "Each industry has its own media, environment and traceability requirements. We adapt equipment, consumables and settings to your operating conditions."],
  ["Des solutions pensées pour vos contraintes métier", "Solutions designed around your business constraints"],
  ["Décrivez-nous votre application d'étiquetage : nous étudions votre besoin et vous proposons la configuration adaptée.", "Describe your labelling application: we assess your needs and propose the right configuration."],
  ["Nous intervenons sur l'ensemble du cycle de vie de votre solution d'identification : définition du besoin, fourniture, mise en service et suivi dans la durée.", "We support the full lifecycle of your identification solution: needs definition, supply, commissioning and long-term support."],
  ["Un accompagnement complet, de l'étude au support", "Complete support, from assessment to after-sales service"],
  ["Écrivez-nous à contact@gps.co.ma ou appelez le +212 (0)5 22 34 39 80. Nous revenons vers vous avec une proposition adaptée à votre application.", "Email us at contact@gps.co.ma or call +212 (0)5 22 34 39 80. We will get back to you with a proposal tailored to your application."],
  ["Solutions d'identification industrielle : impression, étiquetage, lecture, consommables, pièces, logiciels et accompagnement technique au Maroc.", "Industrial identification solutions: printing, labelling, scanning, consumables, spare parts, software and technical support in Morocco."],
  ["GPS est un fournisseur et intégrateur indépendant. Les marques et logos affichés appartiennent à leurs propriétaires respectifs et servent uniquement à identifier les produits et technologies disponibles selon les besoins. Leur présence n'implique aucune affiliation, représentation, approbation ou agrément officiel, sauf mention contraire.", "GPS is an independent supplier and integrator. The brands and logos displayed belong to their respective owners and are used solely to identify products and technologies available according to requirements. Their presence does not imply any official affiliation, representation, endorsement or authorization unless otherwise stated."],
  ["Global Performance Services (« GPS ») accorde une importance particulière à la protection des données à caractère personnel et au respect de la vie privée.", "Global Performance Services (\"GPS\") attaches particular importance to protecting personal data and privacy."],
  ["La présente politique explique quelles données peuvent être collectées, pourquoi elles sont utilisées et comment les personnes concernées peuvent exercer leurs droits.", "This policy explains what data may be collected, why it is used and how data subjects can exercise their rights."],
  ["Le responsable du traitement des données est :", "The data controller is:"],
  ["Selon la manière dont vous entrez en contact avec GPS, nous pouvons notamment collecter :", "Depending on how you contact GPS, we may collect:"],
  ["Ces informations peuvent notamment être communiquées par l'intermédiaire du site gps.co.ma, d'un formulaire de contact, d'un formulaire publicitaire Facebook ou Instagram, de WhatsApp ou lors d'un échange direct avec GPS.", "This information may be provided through gps.co.ma, a contact form, a Facebook or Instagram advertising form, WhatsApp or direct communication with GPS."],
  ["Les données collectées peuvent être utilisées afin de :", "The collected data may be used to:"],
  ["GPS s'engage à ne pas utiliser les données collectées d'une manière incompatible avec les finalités pour lesquelles elles ont été communiquées.", "GPS undertakes not to use collected data in a manner incompatible with the purposes for which it was provided."],
  ["GPS peut utiliser des formulaires instantanés proposés par les plateformes Meta, notamment Facebook et Instagram, afin de permettre aux personnes intéressées de demander des informations ou un devis.", "GPS may use instant forms provided by Meta platforms, including Facebook and Instagram, to allow interested persons to request information or a quotation."],
  ["Les informations fournies dans ces formulaires peuvent notamment comprendre le nom, le numéro de téléphone, l'adresse e-mail, le nom de l'entreprise et la nature de la solution recherchée.", "Information provided through these forms may include a name, telephone number, email address, company name and the type of solution sought."],
  ["Ces informations sont utilisées par GPS afin de répondre à la demande du prospect et d'assurer le suivi commercial correspondant.", "GPS uses this information to respond to the prospect's request and provide the corresponding commercial follow-up."],
  ["L'utilisation des plateformes Facebook et Instagram est également soumise aux politiques et conditions applicables de Meta.", "Use of Facebook and Instagram is also subject to Meta's applicable policies and terms."],
  ["Les données personnelles collectées sont destinées aux personnes habilitées au sein de GPS qui en ont besoin pour traiter les demandes commerciales, administratives ou techniques.", "Collected personal data is intended for authorized GPS personnel who need it to process commercial, administrative or technical requests."],
  ["Certains prestataires techniques ou plateformes utilisés par GPS peuvent également intervenir dans le traitement ou l'hébergement de certaines informations lorsque cela est nécessaire au fonctionnement des services concernés.", "Certain technical service providers or platforms used by GPS may also process or host information when necessary to operate the relevant services."],
  ["GPS ne vend pas les données personnelles collectées.", "GPS does not sell collected personal data."],
  ["GPS conserve les données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées ainsi qu'au respect de ses éventuelles obligations légales, réglementaires, comptables ou contractuelles.", "GPS retains personal data only for as long as necessary for the purposes for which it was collected and to comply with any legal, regulatory, accounting or contractual obligations."],
  ["Les durées de conservation peuvent varier selon la nature de la relation avec la personne concernée et le type d'information traité.", "Retention periods may vary according to the nature of the relationship with the data subject and the type of information processed."],
  ["GPS met en œuvre des mesures organisationnelles et techniques appropriées afin de protéger les données personnelles contre l'accès non autorisé, la perte, l'altération, la divulgation ou l'utilisation abusive.", "GPS implements appropriate organizational and technical measures to protect personal data against unauthorized access, loss, alteration, disclosure or misuse."],
  ["L'accès aux informations est limité aux personnes et prestataires qui en ont besoin dans le cadre de leurs fonctions ou des services fournis à GPS.", "Access to information is limited to persons and service providers who need it as part of their duties or services provided to GPS."],
  ["Conformément à la législation marocaine applicable en matière de protection des données à caractère personnel, notamment la loi n° 09-08, les personnes concernées disposent notamment de droits d'accès, de rectification et d'opposition concernant leurs données personnelles.", "Under applicable Moroccan personal data protection legislation, including Law No. 09-08, data subjects have rights including access, rectification and objection regarding their personal data."],
  ["Pour exercer ces droits ou pour toute question concernant l'utilisation de vos données, vous pouvez contacter GPS à :", "To exercise these rights or ask questions about the use of your data, contact GPS at:"],
  ["La personne effectuant une demande peut être invitée à fournir les informations nécessaires permettant de vérifier son identité lorsque cela est nécessaire.", "A person making a request may be asked to provide information required to verify their identity when necessary."],
  ["Le site gps.co.ma peut utiliser des cookies ou technologies similaires nécessaires à son fonctionnement.", "The gps.co.ma website may use cookies or similar technologies required for its operation."],
  ["Si GPS utilise ultérieurement des outils de mesure d'audience, de publicité ou de suivi tels que Meta Pixel ou Google Analytics, les informations relatives à ces technologies et, lorsque nécessaire, les mécanismes de consentement correspondants devront être présentés aux utilisateurs du site.", "If GPS later uses audience measurement, advertising or tracking tools such as Meta Pixel or Google Analytics, information about these technologies and, where required, the corresponding consent mechanisms will be presented to website users."],
  ["GPS entend traiter les données personnelles conformément à la législation marocaine applicable, notamment la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.", "GPS intends to process personal data in accordance with applicable Moroccan legislation, including Law No. 09-08 on the protection of individuals with regard to personal data processing."],
  ["Les traitements concernés doivent, lorsque la réglementation l'exige, faire l'objet des formalités appropriées auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).", "Where required by regulations, the relevant processing activities must complete the appropriate formalities with Morocco's National Commission for the Control of Personal Data Protection (CNDP)."],
  ["Référence CNDP : à compléter après accomplissement des formalités applicables.", "CNDP reference: to be completed after the applicable formalities have been fulfilled."],
  ["GPS peut modifier la présente politique afin de tenir compte de l'évolution de ses services, de ses outils ou des exigences légales et réglementaires.", "GPS may amend this policy to reflect changes in its services, tools or legal and regulatory requirements."],
  ["La date de dernière mise à jour est indiquée en haut de cette page.", "The date of the latest update appears at the top of this page."],
  ["Pour toute question concernant cette politique ou le traitement de vos données personnelles :", "For questions about this policy or the processing of your personal data:"],
  ["Imprimante industrielle haut de gamme pour les environnements de production exigeants et les volumes d'étiquettes élevés.", "High-end industrial printer for demanding production environments and high label volumes."],
  ["Imprimante industrielle 4 pouces pour l'étiquetage de cartons, palettes et pièces en atelier ou en entrepôt.", "Four-inch industrial printer for labelling cartons, pallets and parts in workshops or warehouses."],
  ["Imprimante mobile durcie pour l'impression d'étiquettes directement sur les quais, en magasin ou en tournée.", "Rugged mobile printer for printing labels directly on loading docks, in stores or in the field."],
  ["Terminal mobile durci pour l'inventaire, la réception et la préparation de commandes avec lecture de codes-barres.", "Rugged mobile computer for inventory, receiving and order preparation with barcode scanning."],
  ["Système d'impression dédié aux étiquettes textiles : étiquettes d'entretien, de composition et de traçabilité vêtement.", "Printing system dedicated to textile labels: care, composition and garment traceability labels."],
  ["Imprimante d'étiquettes et d'étiquettes cartonnées pour l'identification logistique, le marquage produit et le retail.", "Label and tag printer for logistics identification, product marking and retail."],
  ["Système d'application automatique d'étiquettes intégrable sur ligne de conditionnement et convoyeur.", "Automatic label application system for integration on packaging lines and conveyors."],
  ["Imprimante compacte pour l'étiquetage au poste de travail : expédition, réception et contrôle qualité.", "Compact desktop printer for shipping, receiving and quality-control labelling."],
  ["Imprimante industrielle haute définition pour les petites étiquettes et les marquages techniques détaillés.", "High-definition industrial printer for small labels and detailed technical markings."],
  ["Imprimante industrielle polyvalente pour les volumes moyens en production, logistique et agroalimentaire.", "Versatile industrial printer for medium volumes in production, logistics and food processing."],
  ["Imprimante industrielle robuste pour l'étiquetage intensif de cartons et de palettes en fin de ligne.", "Robust industrial printer for intensive end-of-line carton and pallet labelling."],
  ["Imprimante industrielle conçue pour les ateliers de production nécessitant précision et fiabilité au quotidien.", "Industrial printer designed for production workshops requiring daily precision and reliability."],
  ["Imprimante haute résolution pour les petites étiquettes, les codes 2D denses et les marquages techniques détaillés.", "High-resolution printer for small labels, dense 2D codes and detailed technical markings."],
  ["Étiquettes adhésives, étiquettes textiles et rubans transfert thermique sélectionnés selon le support et l'environnement.", "Self-adhesive labels, textile labels and thermal-transfer ribbons selected for the media and environment."],
  ["Imprimante industrielle polyvalente pour l'identification de produits, composants, cartons et palettes.", "Versatile industrial printer for identifying products, components, cartons and pallets."],
  ["Textile et habillement", "Textile and apparel"], ["Logistique et entreposage", "Logistics and warehousing"],
  ["Industrie manufacturière", "Manufacturing"], ["Agroalimentaire", "Food processing"],
  ["Béton préfabriqué", "Precast concrete"], ["Retail et distribution", "Retail and distribution"],
  ["Conseil et étude de besoin", "Consulting and needs assessment"], ["Fourniture de matériel", "Equipment supply"],
  ["Installation et mise en service", "Installation and commissioning"], ["Maintenance et SAV", "Maintenance and after-sales service"],
  ["Logiciels et intégration", "Software and integration"],
  ["Imprimantes à étiquettes", "Label printers"], ["Lecteurs codes-barres & RFID", "Barcode & RFID scanners"],
  ["Terminaux mobiles", "Mobile computers"], ["Étiquettes adhésives", "Self-adhesive labels"],
  ["Rubans transfert thermique", "Thermal-transfer ribbons"], ["Impression textile & étiquetage", "Textile printing & labelling"],
  ["Automatisation & pose d'étiquettes", "Automation & label application"],
  ["Toutes les solutions", "All solutions"], ["Capture & mobilité", "Data capture & mobility"],
  ["Famille sélectionnée", "Selected family"], ["Types disponibles", "Available types"],
  ["Vous ne trouvez pas votre référence ?", "Can't find your reference?"],
  ["Notre équipe vous oriente selon votre application et vos contraintes techniques.", "Our team will guide you according to your application and technical constraints."],
  ["Références et marques proposées", "Available references and brands"],
  ["Consultez quelques configurations représentatives disponibles selon les besoins.", "View a selection of representative configurations available according to requirements."],
  ["Les familles et références présentées servent à faciliter l'orientation. GPS valide la configuration, la compatibilité, les options et la disponibilité avant chaque devis.", "The families and references shown are intended as guidance. GPS confirms configuration, compatibility, options and availability before each quotation."],
  ["Tous droits réservés", "All rights reserved"], ["Politique de confidentialité", "Privacy policy"],
  ["Dernière mise à jour : 16 septembre 2026", "Last updated: 16 September 2026"],
  ["Protection des données", "Data protection"], ["Responsable du traitement", "Data controller"],
  ["Données susceptibles d'être collectées", "Data that may be collected"], ["Finalités du traitement", "Purposes of processing"],
  ["Formulaires publicitaires Facebook et Instagram", "Facebook and Instagram advertising forms"],
  ["Destinataires des données", "Data recipients"], ["Durée de conservation", "Retention period"],
  ["Sécurité et confidentialité", "Security and confidentiality"], ["Droits relatifs aux données personnelles", "Personal data rights"],
  ["Cookies et outils de mesure", "Cookies and measurement tools"], ["Protection des données au Maroc", "Data protection in Morocco"],
  ["Modification de la présente politique", "Changes to this policy"],
  ["Accueil", "Home"], ["Produits", "Products"], ["Secteurs", "Industries"], ["Services", "Services"], ["Contact", "Contact"],
  ["Demander un devis", "Request a quote"], ["Découvrir nos solutions", "Discover our solutions"], ["Demander une intervention", "Request technical service"],
  ["Découvrir nos étiquettes", "Discover our labels"], ["Découvrir nos rubans", "Discover our ribbons"], ["Détail par secteur", "View industries"],
  ["Demander une recommandation", "Request a recommendation"], ["Explorer la famille", "Explore this family"],
  ["Préparer ma demande par e-mail", "Prepare my email request"], ["Nous exposer votre besoin", "Tell us your requirements"],
  ["Parlons de votre projet d'étiquetage", "Let's discuss your labelling project"], ["Demande de devis", "Quotation request"],
  ["Votre secteur n'est pas listé ?", "Is your industry not listed?"], ["Nos produits et solutions", "Our products and solutions"],
  ["Nos solutions", "Our solutions"], ["Expertise intégrée", "Integrated expertise"], ["Service technique GPS", "GPS technical service"],
  ["Coordonnées", "Contact details"], ["Navigation", "Navigation"], ["Adresse", "Address"], ["Téléphone", "Telephone"], ["Site web", "Website"],
  ["Bureau", "Desktop"], ["Semi-industrielles", "Mid-range industrial"], ["Industrielles", "Industrial"], ["Mobiles", "Mobile"],
  ["Lecteurs code-barres", "Barcode scanners"], ["Filaires", "Wired"], ["Sans fil", "Wireless"], ["Durcis 1D / 2D", "Rugged 1D / 2D"],
  ["Étiquetage automatique", "Automatic labelling"], ["Consommables", "Consumables"], ["RFID & logiciels", "RFID & software"],
  ["Solutions complètes", "Complete solutions"], ["Du consommable au matériel", "From consumables to equipment"],
  ["Installation et maintenance", "Installation and maintenance"], ["Intervention au Maroc", "Service across Morocco"],
  ["Maintenance & dépannage", "Maintenance & troubleshooting"], ["Réparation & programmation", "Repair & programming"], ["Pièces de rechange", "Spare parts"],
  ["Papier couché et thermique", "Coated and thermal paper"], ["Haute et basse température", "High and low temperature"],
  ["Sécurité, VOID et destructibles", "Security, VOID and destructible"], ["Transparentes et sur mesure", "Transparent and custom-made"],
  ["Exemple de configuration", "Configuration example"], ["Fiche fabricant", "Manufacturer datasheet"],
  ["Impression industrielle", "Industrial printing"], ["Impression de bureau", "Desktop printing"], ["Étiquetage mobile", "Mobile labelling"],
  ["Terminaux & lecteurs", "Mobile computers & scanners"], ["Étiquettes textiles", "Textile labels"],
  ["Identification logistique & retail", "Logistics & retail identification"],
  ["Impression • Lecture • Mobilité", "Printing • Scanning • Mobility"],
  ["Famille stratégique", "Strategic family"], ["Haute résistance", "High resistance"], ["Haute température", "High temperature"],
  ["Supports synthétiques", "Synthetic media"], ["Tous", "All"], ["Réessayer", "Try again"],
  ["Retour à l’accueil", "Back to home"], ["Page introuvable", "Page not found"],
  ["La page que vous recherchez n’existe pas ou a été déplacée.", "The page you are looking for does not exist or has been moved."],
  ["Cette page n’a pas pu se charger", "This page could not be loaded"],
  ["Une erreur est survenue. Vous pouvez réessayer ou revenir à l’accueil.", "An error occurred. You can try again or return to the home page."],
  ["Ouvrir le menu", "Open menu"], ["Contacter GPS sur WhatsApp", "Contact GPS on WhatsApp"],
  ["Quartier des Hôpitaux", "Hospital District"], ["Casablanca, Maroc", "Casablanca, Morocco"],
  ["1er étage", "1st floor"], ["Société", "Company"], ["Secteur d'activité", "Industry"],
  ["Besoin / application", "Requirement / application"], ["Quantité estimée", "Estimated quantity"],
  ["Personne à contacter", "Contact person"], ["Merci de me recontacter.", "Please contact me."], ["Cordialement", "Kind regards"],
  ["Étiquettes d'entretien, de composition et de taille, marquage produit et traçabilité des séries de production.", "Care, composition and size labels, product marking and production-batch traceability."],
  ["Étiquetage de colis et de palettes, adressage d'emplacements, préparation de commandes et inventaires.", "Carton and pallet labelling, location addressing, order preparation and inventory."],
  ["Identification des pièces et des kits, étiquettes techniques résistantes et suivi des flux de production.", "Identification of parts and kits, durable technical labels and production-flow tracking."],
  ["Marquage des produits semi-finis et finis, suivi des ordres de fabrication et contrôle qualité en ligne.", "Marking of semi-finished and finished products, work-order tracking and in-line quality control."],
  ["Étiquetage des lots et des dates, traçabilité amont-aval et supports adaptés au froid et à l'humidité.", "Batch and date labelling, end-to-end traceability and media suitable for cold and humid conditions."],
  ["Identification des éléments préfabriqués, étiquettes résistantes aux chantiers et suivi des livraisons.", "Identification of precast elements, worksite-resistant labels and delivery tracking."],
  ["Étiquetage prix et produit, marquage rayon, réception marchandise et inventaires en point de vente.", "Price and product labelling, shelf marking, goods receiving and retail inventory."],
  ["Analyse de vos flux et de vos environnements de travail pour définir la solution d'identification adaptée.", "Analysis of your workflows and work environments to define the right identification solution."],
  ["Imprimantes industrielles, mobiles et de bureau, terminaux, lecteurs et systèmes d'étiquetage automatique.", "Industrial, mobile and desktop printers, mobile computers, scanners and automatic labelling systems."],
  ["Étiquettes et rubans transfert thermique sélectionnés selon le support, l'usage et les contraintes du site.", "Labels and thermal-transfer ribbons selected for the media, use and site constraints."],
  ["Paramétrage des équipements, intégration sur vos postes et lignes, et accompagnement au démarrage.", "Equipment setup, workstation and production-line integration, and start-up support."],
  ["Entretien préventif, dépannage et fourniture de pièces pour maintenir votre parc en fonctionnement.", "Preventive maintenance, troubleshooting and spare-parts supply to keep your equipment running."],
  ["Mise en place des logiciels d'étiquetage et connexion aux systèmes de gestion existants.", "Implementation of labelling software and connection to existing management systems."],
  ["Solutions de bureau, mobiles, semi-industrielles et industrielles adaptées à vos volumes et environnements.", "Desktop, mobile, mid-range and industrial solutions tailored to your volumes and environments."],
  ["Capture rapide et fiable des données avec des lecteurs filaires, sans fil, fixes ou durcis.", "Fast, reliable data capture with wired, wireless, fixed or rugged scanners."],
  ["Mobilité et collecte de données pour les opérations terrain, les entrepôts et les ateliers.", "Mobility and data collection for field operations, warehouses and workshops."],
  ["Matières, adhésifs, formats et technologies sélectionnés selon chaque contrainte d'utilisation.", "Materials, adhesives, formats and technologies selected for each operating constraint."],
  ["Des formulations adaptées au support, à la vitesse d'impression et au niveau de résistance recherché.", "Formulations matched to the media, print speed and required resistance level."],
  ["Solutions dédiées aux étiquettes de composition, rubans textiles et besoins de marquage du vêtement.", "Solutions for composition labels, textile ribbons and garment-marking requirements."],
  ["Systèmes d'impression-pose et intégration en ligne pour automatiser les opérations d'étiquetage.", "Print-and-apply systems and line integration to automate labelling operations."],
  ["Création d'étiquettes, gestion de l'impression et connexion aux données de l'entreprise.", "Label design, print management and connection to company data."],
  ["Production", "Production"], ["Logistique", "Logistics"], ["Expédition", "Shipping"], ["Points de vente", "Retail locations"],
  ["Inventaire", "Inventory"], ["Contrôle", "Inspection"], ["Traçabilité", "Traceability"], ["Préparation de commandes", "Order preparation"],
  ["Réception", "Receiving"], ["Suivi de production", "Production tracking"], ["Sur mesure", "Custom-made"],
  ["Froid et chaleur", "Cold and heat"], ["Environnements exigeants", "Demanding environments"],
  ["Supports couchés", "Coated media"], ["Films synthétiques", "Synthetic films"], ["Habillement", "Apparel"],
  ["Lignes de conditionnement", "Packaging lines"], ["Création", "Design"], ["Bases de données", "Databases"],
  ["Centralisation", "Centralization"], ["Modèles d'étiquettes", "Label templates"], ["Impression contrôlée", "Controlled printing"],
  ["Gestion multi-sites", "Multi-site management"], ["Format compact", "Compact format"], ["Utilisation continue", "Continuous operation"],
  ["Écran tactile couleur", "Color touchscreen"], ["Châssis industriel", "Industrial chassis"], ["Maintenance simplifiée", "Simplified maintenance"],
  ["Formats sur mesure", "Custom formats"], ["Adhésifs spécifiques", "Specialized adhesives"], ["Rubans cire, mixte, résine", "Wax, wax-resin and resin ribbons"],
  ["Résolution", "Resolution"], ["Largeur d’impression", "Print width"], ["Largeur d'impression", "Print width"], ["Vitesse max.", "Maximum speed"],
  ["Technologie", "Technology"], ["Thermique direct / transfert thermique", "Direct thermal / thermal transfer"], ["jusqu’à", "up to"], ["jusqu'à", "up to"],
  ["Résolutions", "Resolutions"], ["Écran couleur tactile", "Color touchscreen"], ["Châssis métallique intensif", "Heavy-duty metal chassis"],
  ["Connectivité filaire et sans fil", "Wired and wireless connectivity"], ["Conception durcie, autonomie longue", "Rugged design, long battery life"],
  ["Lecture codes-barres", "Barcode scanning"], ["Usage intensif en entrepôt", "Intensive warehouse use"],
  ["Impression sur rubans textiles", "Printing on textile ribbons"], ["Étiquettes d'entretien et de taille", "Care and size labels"],
  ["Pose automatique en ligne", "Automatic in-line application"], ["Cadence industrielle", "Industrial throughput"], ["Intégration sur machine", "Machine integration"],
  ["Impression fine et régulière", "Fine, consistent printing"], ["Grande capacité de rouleau", "Large roll capacity"],
  ["Mécanique renforcée", "Reinforced mechanics"], ["Impression de haute précision", "High-precision printing"],
  ["Nombreuses interfaces et options", "Multiple interfaces and options"], ["Papier", "Paper"], ["Synthétiques", "Synthetic"],
  ["Choisir la langue", "Choose language"], ["Français", "French"], ["Anglais", "English"],
  ["nom et prénom", "first and last name"], ["nom de l'entreprise", "company name"],
  ["adresse e-mail professionnelle ou personnelle", "professional or personal email address"], ["numéro de téléphone", "telephone number"],
  ["informations contenues dans une demande de devis", "information contained in a quotation request"],
  ["produits ou solutions recherchés", "products or solutions sought"], ["informations communiquées volontairement dans un message", "information voluntarily provided in a message"],
  ["informations nécessaires au suivi d'une demande commerciale ou technique", "information required to follow up a commercial or technical request"],
  ["répondre à vos demandes d'information", "respond to your information requests"], ["traiter vos demandes de devis", "process your quotation requests"],
  ["vous recontacter concernant votre demande", "contact you regarding your request"], ["identifier les produits ou solutions correspondant à votre besoin", "identify products or solutions matching your needs"],
  ["assurer le suivi commercial de votre demande", "provide commercial follow-up for your request"], ["organiser une intervention ou une assistance technique", "organize technical service or assistance"],
  ["assurer la gestion de la relation avec nos prospects et clients", "manage relationships with prospects and customers"], ["améliorer la qualité de nos services et de nos échanges", "improve the quality of our services and communications"],
  ["Vous préférez échanger de vive voix ?", "Would you prefer to speak with us?"],
  ["Basés à Casablanca", "Based in Casablanca"], ["Au service des industriels au Maroc", "Serving industrial companies across Morocco"],
  ["Offre multi-solutions", "Multi-solution offering"], ["Matériel, consommables, pièces et logiciels", "Equipment, consumables, parts and software"],
  ["Approche terrain", "Field-driven approach"], ["Solutions dimensionnées selon votre application", "Solutions sized for your application"],
  ["Identification & Marquage", "Identification & marking"], ["Traçabilité & Capture de données", "Traceability & data capture"],
  ["RFID & Automatisation", "RFID & automation"], ["Consommables industriels", "Industrial consumables"], ["Services techniques", "Technical services"],
  ["Solutions professionnelles pour identifier les produits, emballages, composants et opérations industrielles.", "Professional solutions for identifying products, packaging, components and industrial operations."],
  ["Collecter, sécuriser et exploiter les informations tout au long du processus industriel.", "Collect, secure and use information throughout the industrial process."],
  ["Technologies connectées pour automatiser l'identification et améliorer la traçabilité.", "Connected technologies to automate identification and improve traceability."],
  ["Tous les supports et consommables nécessaires à une identification fiable et durable.", "All media and consumables required for reliable, durable identification."],
  ["Une expertise terrain pour installer, maintenir et optimiser vos solutions d'identification.", "Hands-on expertise to install, maintain and optimize your identification solutions."],
  ["Codes-barres", "Barcodes"], ["Identification produit", "Product identification"], ["Marquage industriel", "Industrial marking"],
  ["Capture de données", "Data capture"], ["Scanner & lecture", "Scanning"], ["Flux numériques", "Digital workflows"], ["Traçabilité produit", "Product traceability"],
  ["Puces & tags RFID", "RFID chips & tags"], ["Ondes RFID", "RFID technology"], ["IoT industriel", "Industrial IoT"], ["Automatisation", "Automation"],
  ["Supports d'identification", "Identification media"], ["Pièces & accessoires", "Parts & accessories"],
  ["Installation & configuration", "Installation & configuration"], ["Diagnostic & dépannage", "Diagnostics & troubleshooting"], ["Support & pièces de rechange", "Support & spare parts"],
];

translations.sort((a, b) => b[0].length - a[0].length);

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({
  language: "fr",
  setLanguage: () => undefined,
});

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "fr";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "fr";
}

function translateValue(value: string) {
  const trimmed = value.trim();
  const exact = translations.find(([fr]) => fr === trimmed);
  if (exact) return value.replace(trimmed, exact[1]);
  const partial = translations.find(([fr]) => value.includes(fr));
  return partial ? value.replace(partial[0], partial[1]) : value;
}

function translateDocument(language: Language) {
  document.documentElement.lang = language;
  const title = document.querySelector("title") as (HTMLTitleElement & { __gpsFr?: string }) | null;
  if (title) {
    title.__gpsFr ??= title.textContent ?? "";
    const nextTitle = language === "en" ? translateValue(title.__gpsFr) : title.__gpsFr;
    if (title.textContent !== nextTitle) title.textContent = nextTitle;
  }
  document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((meta) => {
    const element = meta as HTMLMetaElement & { __gpsFr?: string };
    element.__gpsFr ??= element.content;
    const nextContent = language === "en" ? translateValue(element.__gpsFr) : element.__gpsFr;
    if (element.content !== nextContent) element.content = nextContent;
  });
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    element.childNodes.forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) return;
      const htmlNode = node as Text & { __gpsFr?: string };
      htmlNode.__gpsFr ??= node.textContent;
      const nextText = language === "en" ? translateValue(htmlNode.__gpsFr) : htmlNode.__gpsFr;
      if (node.textContent !== nextText) node.textContent = nextText;
    });
    for (const attribute of ["aria-label", "title", "alt", "placeholder"]) {
      const originalKey = `data-gps-fr-${attribute}`;
      const current = element.getAttribute(attribute);
      if (!current) continue;
      if (!element.hasAttribute(originalKey)) element.setAttribute(originalKey, current);
      const original = element.getAttribute(originalKey) ?? current;
      const nextValue = language === "en" ? translateValue(original) : original;
      if (current !== nextValue) element.setAttribute(attribute, nextValue);
    }
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => setLanguageState(getStoredLanguage()), []);

  useEffect(() => {
    translateDocument(language);
    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        window.localStorage.setItem(STORAGE_KEY, next);
        setLanguageState(next);
        window.setTimeout(() => window.location.reload(), 0);
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary/40 p-1" aria-label="Choisir la langue">
      {(["fr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`${compact ? "px-2.5 py-1.5 text-[11px]" : "px-3 py-1.5 text-xs"} rounded-full font-bold uppercase tracking-wider transition-colors ${language === code ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero, Section } from "@/components/Section";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité et protection des données | GPS" },
      {
        name: "description",
        content:
          "Politique de confidentialité de Global Performance Services et informations relatives à la protection des données personnelles.",
      },
    ],
  }),
  component: PolitiqueConfidentialitePage,
});

function Bloc({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-foreground">{titre}</h2>
      <div className="privacy-content mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

function Adresse() {
  return (
    <address className="not-italic text-foreground">
      <strong>Global Performance Services (GPS)</strong>
      <br />
      14 Rue Lucerne, Rés. Latifa, 1er étage, N°3
      <br />
      Quartier des Hôpitaux
      <br />
      Casablanca, Maroc
    </address>
  );
}

function LiensContact() {
  return (
    <p>
      <strong>E-mail :</strong>{" "}
      <a href="mailto:contact@gps.co.ma" className="text-accent hover:underline">
        contact@gps.co.ma
      </a>
      <br />
      <strong>Site :</strong>{" "}
      <a href="https://www.gps.co.ma" className="text-accent hover:underline">
        www.gps.co.ma
      </a>
    </p>
  );
}

function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Protection des données"
        titre="Politique de confidentialité et protection des données personnelles"
        texte="Dernière mise à jour : 16 septembre 2026"
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10">
            <p className="text-base leading-relaxed text-muted-foreground">
              Global Performance Services (« GPS ») accorde une importance particulière à la
              protection des données à caractère personnel et au respect de la vie privée.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              La présente politique explique quelles données peuvent être collectées, pourquoi elles
              sont utilisées et comment les personnes concernées peuvent exercer leurs droits.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <Bloc titre="1. Responsable du traitement">
              <p>Le responsable du traitement des données est :</p>
              <Adresse />
              <LiensContact />
            </Bloc>

            <Bloc titre="2. Données susceptibles d'être collectées">
              <p>
                Selon la manière dont vous entrez en contact avec GPS, nous pouvons notamment
                collecter :
              </p>
              <ul>
                <li>nom et prénom ;</li>
                <li>nom de l'entreprise ;</li>
                <li>adresse e-mail professionnelle ou personnelle ;</li>
                <li>numéro de téléphone ;</li>
                <li>informations contenues dans une demande de devis ;</li>
                <li>produits ou solutions recherchés ;</li>
                <li>informations communiquées volontairement dans un message ;</li>
                <li>informations nécessaires au suivi d'une demande commerciale ou technique.</li>
              </ul>
              <p>
                Ces informations peuvent notamment être communiquées par l'intermédiaire du site
                gps.co.ma, d'un formulaire de contact, d'un formulaire publicitaire Facebook ou
                Instagram, de WhatsApp ou lors d'un échange direct avec GPS.
              </p>
            </Bloc>

            <Bloc titre="3. Finalités du traitement">
              <p>Les données collectées peuvent être utilisées afin de :</p>
              <ul>
                <li>répondre à vos demandes d'information ;</li>
                <li>traiter vos demandes de devis ;</li>
                <li>vous recontacter concernant votre demande ;</li>
                <li>identifier les produits ou solutions correspondant à votre besoin ;</li>
                <li>assurer le suivi commercial de votre demande ;</li>
                <li>organiser une intervention ou une assistance technique ;</li>
                <li>assurer la gestion de la relation avec nos prospects et clients ;</li>
                <li>améliorer la qualité de nos services et de nos échanges.</li>
              </ul>
              <p>
                GPS s'engage à ne pas utiliser les données collectées d'une manière incompatible
                avec les finalités pour lesquelles elles ont été communiquées.
              </p>
            </Bloc>

            <Bloc titre="4. Formulaires publicitaires Facebook et Instagram">
              <p>
                GPS peut utiliser des formulaires instantanés proposés par les plateformes Meta,
                notamment Facebook et Instagram, afin de permettre aux personnes intéressées de
                demander des informations ou un devis.
              </p>
              <p>
                Les informations fournies dans ces formulaires peuvent notamment comprendre le nom,
                le numéro de téléphone, l'adresse e-mail, le nom de l'entreprise et la nature de la
                solution recherchée.
              </p>
              <p>
                Ces informations sont utilisées par GPS afin de répondre à la demande du prospect et
                d'assurer le suivi commercial correspondant.
              </p>
              <p>
                L'utilisation des plateformes Facebook et Instagram est également soumise aux
                politiques et conditions applicables de Meta.
              </p>
            </Bloc>

            <Bloc titre="5. Destinataires des données">
              <p>
                Les données personnelles collectées sont destinées aux personnes habilitées au sein
                de GPS qui en ont besoin pour traiter les demandes commerciales, administratives ou
                techniques.
              </p>
              <p>
                Certains prestataires techniques ou plateformes utilisés par GPS peuvent également
                intervenir dans le traitement ou l'hébergement de certaines informations lorsque
                cela est nécessaire au fonctionnement des services concernés.
              </p>
              <p>GPS ne vend pas les données personnelles collectées.</p>
            </Bloc>

            <Bloc titre="6. Durée de conservation">
              <p>
                GPS conserve les données personnelles uniquement pendant la durée nécessaire aux
                finalités pour lesquelles elles ont été collectées ainsi qu'au respect de ses
                éventuelles obligations légales, réglementaires, comptables ou contractuelles.
              </p>
              <p>
                Les durées de conservation peuvent varier selon la nature de la relation avec la
                personne concernée et le type d'information traité.
              </p>
            </Bloc>

            <Bloc titre="7. Sécurité et confidentialité">
              <p>
                GPS met en œuvre des mesures organisationnelles et techniques appropriées afin de
                protéger les données personnelles contre l'accès non autorisé, la perte,
                l'altération, la divulgation ou l'utilisation abusive.
              </p>
              <p>
                L'accès aux informations est limité aux personnes et prestataires qui en ont besoin
                dans le cadre de leurs fonctions ou des services fournis à GPS.
              </p>
            </Bloc>

            <Bloc titre="8. Droits relatifs aux données personnelles">
              <p>
                Conformément à la législation marocaine applicable en matière de protection des
                données à caractère personnel, notamment la loi n° 09-08, les personnes concernées
                disposent notamment de droits d'accès, de rectification et d'opposition concernant
                leurs données personnelles.
              </p>
              <p>
                Pour exercer ces droits ou pour toute question concernant l'utilisation de vos
                données, vous pouvez contacter GPS à :{" "}
                <a
                  href="mailto:contact@gps.co.ma"
                  className="font-semibold text-accent hover:underline"
                >
                  contact@gps.co.ma
                </a>
                .
              </p>
              <Adresse />
              <p>
                La personne effectuant une demande peut être invitée à fournir les informations
                nécessaires permettant de vérifier son identité lorsque cela est nécessaire.
              </p>
            </Bloc>

            <Bloc titre="9. Cookies et outils de mesure">
              <p>
                Le site gps.co.ma peut utiliser des cookies ou technologies similaires nécessaires à
                son fonctionnement.
              </p>
              <p>
                Si GPS utilise ultérieurement des outils de mesure d'audience, de publicité ou de
                suivi tels que Meta Pixel ou Google Analytics, les informations relatives à ces
                technologies et, lorsque nécessaire, les mécanismes de consentement correspondants
                devront être présentés aux utilisateurs du site.
              </p>
            </Bloc>

            <Bloc titre="10. Protection des données au Maroc">
              <p>
                GPS entend traiter les données personnelles conformément à la législation marocaine
                applicable, notamment la{" "}
                <strong>
                  loi n° 09-08 relative à la protection des personnes physiques à l'égard du
                  traitement des données à caractère personnel
                </strong>
                .
              </p>
              <p>
                Les traitements concernés doivent, lorsque la réglementation l'exige, faire l'objet
                des formalités appropriées auprès de la{" "}
                <strong>
                  Commission Nationale de contrôle de la protection des Données à caractère
                  Personnel (CNDP)
                </strong>
                .
              </p>
              <p className="rounded-xl border border-accent/25 bg-accent/5 p-4 font-semibold text-foreground">
                Référence CNDP : à compléter après accomplissement des formalités applicables.
              </p>
            </Bloc>

            <Bloc titre="11. Modification de la présente politique">
              <p>
                GPS peut modifier la présente politique afin de tenir compte de l'évolution de ses
                services, de ses outils ou des exigences légales et réglementaires.
              </p>
              <p>La date de dernière mise à jour est indiquée en haut de cette page.</p>
            </Bloc>

            <Bloc titre="12. Contact">
              <p>
                Pour toute question concernant cette politique ou le traitement de vos données
                personnelles :
              </p>
              <Adresse />
              <LiensContact />
            </Bloc>
          </div>
        </div>
      </Section>
    </>
  );
}

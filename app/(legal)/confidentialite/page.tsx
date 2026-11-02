import type { Metadata } from "next";
import { ContactEmail, Field } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Confidentialite() {
  const l = site.legal;
  return (
    <>
      <h1>Politique de confidentialité</h1>
      <p className="text-mute">Dernière mise à jour : {site.lastLegalUpdate}</p>

      <h2>Qui est responsable de vos données</h2>
      <p>
        <Field value={l.ownerName} label="Prénom NOM" />, entrepreneur
        individuel, SIREN {l.siren},{" "}
        <Field value={l.address} label="adresse professionnelle" />. Contact :{" "}
        <ContactEmail />.
      </p>

      <h2>Les données que nous traitons</h2>
      <ul>
        <li>Vos coordonnées (nom, entreprise, e-mail), transmises lors du paiement ou de vos échanges avec nous.</li>
        <li>Les données de paiement : elles sont traitées par Stripe. Nous ne voyons ni ne conservons votre numéro de carte.</li>
        <li>Les documents que vous nous envoyez pour l&apos;audit (relevés bancaires, listes d&apos;outils). Ils peuvent mentionner des noms de salariés : n&apos;envoyez que ce qui est utile.</li>
        <li>Des statistiques de visite, sans cookie et sans profil individuel (pages vues, provenance, type d&apos;appareil).</li>
      </ul>

      <h2>Pourquoi, et sur quelle base</h2>
      <ul>
        <li>Réaliser l&apos;audit et gérer votre abonnement : exécution du contrat.</li>
        <li>Facturer et tenir la comptabilité : obligation légale.</li>
        <li>Mesurer l&apos;audience et sécuriser le site : intérêt légitime.</li>
      </ul>

      <h2>Qui reçoit vos données</h2>
      <p>
        Uniquement les prestataires nécessaires au service : Stripe (paiement),
        Vercel (hébergement et statistiques de visite) et notre messagerie
        électronique. Nous ne vendons aucune donnée. Ces prestataires peuvent
        traiter des données hors de l&apos;Union européenne, notamment aux États-Unis,
        dans le cadre de garanties reconnues (clauses contractuelles types ou
        cadre de protection des données UE–États-Unis).
      </p>

      <h2>Combien de temps nous les gardons</h2>
      <ul>
        <li>Documents transmis pour l&apos;audit : supprimés dans les 30 jours suivant la fin de l&apos;abonnement.</li>
        <li>Données de facturation : 10 ans, comme l&apos;exige la loi comptable.</li>
        <li>Échanges par e-mail : 3 ans après le dernier contact.</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l&apos;accès à vos données, leur rectification, leur
        effacement, la limitation ou l&apos;opposition à leur traitement, et leur
        portabilité, en écrivant à <ContactEmail />. Nous répondons sous un mois.
        Vous pouvez aussi saisir la CNIL :{" "}
        <a href="https://www.cnil.fr/fr/plaintes" rel="noopener noreferrer">
          cnil.fr/fr/plaintes
        </a>
        .
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie. La page de paiement, hébergée par Stripe,
        peut en utiliser pour fonctionner et prévenir la fraude.
      </p>
    </>
  );
}

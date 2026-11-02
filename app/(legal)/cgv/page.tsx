import type { Metadata } from "next";
import { ContactEmail, Field } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function Cgv() {
  const l = site.legal;
  return (
    <>
      <h1>Conditions générales de vente</h1>
      <p className="text-mute">Dernière mise à jour : {site.lastLegalUpdate}</p>

      <h2>1. Objet et champ d&apos;application</h2>
      <p>
        Les présentes conditions régissent la vente du service « {site.name} »
        par <Field value={l.ownerName} label="Prénom NOM" />, entrepreneur
        individuel, SIREN {l.siren} (le « Prestataire »), à toute personne
        agissant pour les besoins de son activité professionnelle (le « Client »).
        Le service n&apos;est pas destiné aux consommateurs.
      </p>

      <h2>2. Description du service</h2>
      <p>
        {site.name} permet au Client de connaître l&apos;ensemble des abonnements
        logiciels payés par son entreprise. Le service comprend :
      </p>
      <ul>
        <li>l&apos;inventaire des abonnements, établi à partir des documents que le Client transmet (relevés bancaires, liste d&apos;outils) ;</li>
        <li>le coût annuel par outil et par personne ;</li>
        <li>le repérage des comptes inutilisés et des doublons de fonction ;</li>
        <li>un rappel avant chaque renouvellement annuel.</li>
      </ul>
      <p>
        À la date de ces conditions, le service est réalisé manuellement par le
        Prestataire. Un outil en ligne pourra s&apos;y ajouter ; les clients déjà
        abonnés y auront accès.
      </p>

      <h2>3. Commande</h2>
      <p>
        La commande s&apos;effectue en ligne, par le lien de paiement sécurisé
        proposé sur le site. Le contrat est conclu au moment où le paiement est
        validé. Le Client déclare agir à titre professionnel.
      </p>

      <h2>4. Prix et paiement</h2>
      <p>
        Le prix est de {site.priceMonthly} € par mois, hors taxes. {l.vatNote}.
        Le paiement est prélevé chaque mois par carte bancaire, via le
        prestataire de paiement Stripe. L&apos;abonnement se renouvelle chaque mois
        jusqu&apos;à sa résiliation. Le Prestataire ne conserve aucune donnée de carte.
      </p>

      <h2>5. Durée et résiliation</h2>
      <p>
        L&apos;abonnement est sans engagement. Le Client peut le résilier à tout
        moment, sans frais et sans préavis, par e-mail à <ContactEmail />. La
        résiliation prend effet à la fin de la période mensuelle déjà payée, qui
        n&apos;est pas remboursée, sauf application de la garantie ci-dessous.
      </p>

      <h2>6. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant {site.guaranteeDays} jours à compter du premier paiement, le
        Client peut demander le remboursement des sommes versées, sans avoir à se
        justifier, par e-mail à <ContactEmail />. Le Prestataire rembourse
        l&apos;intégralité de ces sommes dans un délai de {site.refundDelayDays}{" "}
        jours ouvrés à compter de la demande, sur le moyen de paiement utilisé.
      </p>

      <h2>7. Livraison</h2>
      <p>
        Le premier audit est livré par e-mail sous {site.deliveryHours} heures à
        compter de la réception de documents exploitables. Le Client est
        informé de tout retard.
      </p>

      <h2>8. Obligations du Client</h2>
      <p>
        Le Client transmet des documents exacts et garantit avoir le droit de les
        communiquer. Il est invité à masquer les lignes sans rapport avec ses
        abonnements logiciels avant de les transmettre.
      </p>

      <h2>9. Responsabilité</h2>
      <p>
        Le Prestataire est tenu d&apos;une obligation de moyens. L&apos;audit repose sur
        les documents fournis par le Client ; le Prestataire ne répond pas des
        décisions que le Client prend à partir de ses résultats (résiliation,
        renégociation, etc.). Sa responsabilité est limitée aux sommes versées
        par le Client au cours des douze mois précédant le fait générateur.
      </p>

      <h2>10. Données personnelles</h2>
      <p>
        Les données sont traitées conformément à la{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>11. Droit applicable et litiges</h2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de
        litige, les parties cherchent d&apos;abord une solution amiable. À défaut,
        les tribunaux compétents sont ceux du ressort du siège du Prestataire.
      </p>
    </>
  );
}

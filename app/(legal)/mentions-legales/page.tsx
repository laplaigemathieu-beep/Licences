import type { Metadata } from "next";
import { ContactEmail, Field } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  const l = site.legal;
  return (
    <>
      <h1>Mentions légales</h1>
      <p className="text-mute">Dernière mise à jour : {site.lastLegalUpdate}</p>

      <h2>Éditeur du site</h2>
      <p>
        Le site « {site.name} » est édité par{" "}
        <Field value={l.ownerName} label="Prénom NOM" />, entrepreneur individuel
        (micro-entrepreneur).
      </p>
      <ul>
        <li>SIREN : {l.siren}</li>
        {l.siret && <li>SIRET : {l.siret}</li>}
        <li>
          Adresse : <Field value={l.address} label="adresse professionnelle" />
        </li>
        <li>
          E-mail : <ContactEmail />
        </li>
        {l.phone && <li>Téléphone : {l.phone}</li>}
        <li>{l.vatNote}.</li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>
        <Field value={l.ownerName} label="Prénom NOM" />.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par {site.hosting.name}, {site.hosting.address} (
        <a href={site.hosting.url} rel="noopener noreferrer">
          vercel.com
        </a>
        ).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, la structure et la marque « {site.name} » sont protégés.
        Toute reproduction sans autorisation écrite est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement de vos données est décrit dans notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Droit applicable</h2>
      <p>Le site et ses conditions d&apos;utilisation sont soumis au droit français.</p>
    </>
  );
}

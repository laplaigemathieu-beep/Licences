import type { Metadata } from "next";
import { Footer, SiteHeader } from "@/components/Footer";
import { ContactEmail } from "@/components/ui";
import { site } from "@/lib/site";

// Page de retour après paiement Stripe. Elle ne donne aucun accès : elle explique la suite.
export const metadata: Metadata = {
  title: "Paiement reçu",
  robots: { index: false, follow: false },
};

export default function Merci() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12">
        <h1 className="text-4xl font-bold">Merci. Votre audit est lancé.</h1>
        <p className="mt-4 text-xl text-ink/80">
          Il vous reste une seule chose à faire pour que je puisse commencer.
        </p>

        <ol className="mt-8 space-y-5 border-l-2 border-ink pl-5">
          <li>
            <p className="font-bold">1. Envoyez-moi vos relevés</p>
            <p className="text-ink/80">
              Par e-mail à <ContactEmail />. Vos relevés bancaires des 12
              derniers mois (PDF ou CSV), ou la liste de vos outils si vous
              l&apos;avez. Vous pouvez masquer les lignes qui ne concernent pas des
              logiciels.
            </p>
          </li>
          <li>
            <p className="font-bold">2. Je prépare votre inventaire</p>
            <p className="text-ink/80">
              Vous le recevez par e-mail sous {site.deliveryHours} heures après
              réception de vos relevés.
            </p>
          </li>
          <li>
            <p className="font-bold">3. Vous gardez la main</p>
            <p className="text-ink/80">
              Remboursé en totalité sous {site.guaranteeDays} jours si
              l&apos;audit ne vous sert à rien : un simple message suffit.
            </p>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

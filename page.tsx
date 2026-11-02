import { Footer, SiteHeader } from "@/components/Footer";
import { ContactEmail, CtaButton } from "@/components/ui";
import { ctaHref, fmtEUR, priceYearly, pricePerDay, site } from "@/lib/site";

// Exemple chiffré, présenté comme tel (jamais comme une moyenne).
const example = [
  { tool: "Visioconférence", why: "6 licences sur 14 jamais utilisées", monthly: 6 * 15 },
  { tool: "Gestion de projet", why: "Deux outils pour la même fonction", monthly: 120 },
  { tool: "Comptes d'anciens salariés", why: "4 comptes encore payés après leur départ", monthly: 4 * 18 },
];
const exampleYear = example.reduce((s, r) => s + r.monthly * 12, 0);

const faq = [
  {
    q: "Est-ce que ça marche pour mon entreprise ?",
    a: `Si vous avez entre 10 et 100 personnes et pas de service informatique, c'est exactement le cas visé : chaque équipe souscrit ses outils, personne ne tient la liste. Si un seul service gère déjà tous vos abonnements, le gain sera plus faible. Dans le doute, la garantie de ${site.guaranteeDays} jours vous protège.`,
  },
  {
    q: "Combien de temps ça me prend ?",
    a: `Une quinzaine de minutes : vous m'envoyez vos relevés bancaires (ou la liste de vos outils si vous l'avez). Le reste est fait pour vous, et vous recevez votre premier audit sous ${site.deliveryHours} heures.`,
  },
  {
    q: "Et si je veux arrêter ?",
    a: `Vous résiliez quand vous voulez, en un message, sans préavis ni frais : l'abonnement s'arrête à la fin de la période déjà payée. Et pendant les ${site.guaranteeDays} premiers jours, vous êtes remboursé si l'audit ne vous sert à rien.`,
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    a: "À trois choses : l'audit de vos abonnements, la mise à jour de la liste quand vos outils changent, et le rappel avant chaque renouvellement annuel. Vous ne payez aucune licence de logiciel : uniquement le suivi.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Promesse */}
        <section className="mx-auto w-full max-w-5xl px-5 pb-14 pt-8 md:pb-20 md:pt-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-flame">
            Entreprises de 10 à 100 personnes
          </p>
          <h1 className="max-w-3xl text-[2.5rem] font-bold md:text-6xl">
            Vous payez des logiciels que personne n&apos;utilise.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-ink/80">
            {site.name} dresse la liste de tous vos abonnements, repère les
            comptes inutilisés et les doublons, et vous prévient avant chaque
            renouvellement annuel.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <CtaButton href="#offre" className="md:self-start">
              Commencer
            </CtaButton>
            <p className="text-sm text-mute">
              {site.priceMonthly} € par mois, sans engagement · Remboursé sous{" "}
              {site.guaranteeDays} jours
            </p>
          </div>
        </section>

        {/* 2. La douleur, chiffrée */}
        <section className="border-y border-rule bg-paper-deep">
          <div className="mx-auto w-full max-w-5xl px-5 py-14 md:py-20">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Personne ne décide de cette facture. Elle monte quand même.
            </h2>
            <p className="mt-5 max-w-2xl">
              Chaque service souscrit ses outils dans son coin. Un salarié part,
              son compte reste payé. Deux équipes paient deux logiciels qui font
              la même chose. Personne n&apos;a la liste complète.
            </p>

            <figure className="mt-8 max-w-3xl border border-ink bg-paper">
              <figcaption className="border-b border-ink bg-ink px-4 py-2 text-sm font-medium text-paper">
                Exemple chiffré · entreprise de 25 personnes
                <span className="text-paper/70"> (illustration, pas une moyenne)</span>
              </figcaption>
              <table className="w-full text-left text-[0.95rem]">
                <thead className="text-xs uppercase tracking-wider text-mute">
                  <tr className="border-b border-rule">
                    <th scope="col" className="px-4 py-2 font-medium">Poste</th>
                    <th scope="col" className="px-4 py-2 text-right font-medium">Par an</th>
                  </tr>
                </thead>
                <tbody>
                  {example.map((r) => (
                    <tr key={r.tool} className="border-b border-rule align-top">
                      <td className="px-4 py-3">
                        <span className="block font-medium">{r.tool}</span>
                        <span className="text-sm text-mute">{r.why}</span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-right">
                        {fmtEUR(r.monthly * 12)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-semibold">
                      Payé pour rien
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 text-right text-lg font-bold text-flame">
                      {fmtEUR(exampleYear)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </figure>
          </div>
        </section>

        {/* 3. Trois bénéfices */}
        <section className="mx-auto w-full max-w-5xl px-5 py-14 md:py-20">
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                t: "Une seule liste, complète",
                d: "Chaque abonnement, son prix, sa date de renouvellement, la personne qui l'utilise. Lu depuis vos relevés ou saisi à la main.",
              },
              {
                t: "Ce qui est payé pour rien, en clair",
                d: "Comptes jamais utilisés, comptes d'anciens salariés, logiciels qui se font concurrence : chacun est signalé avec son coût annuel.",
              },
              {
                t: "Aucun renouvellement par surprise",
                d: "Un rappel avant chaque échéance annuelle, avec le temps de résilier ou de renégocier.",
              },
            ].map((b, i) => (
              <li key={b.t} className="border-t-2 border-ink pt-4">
                <span className="font-serif text-sm font-bold text-flame">
                  0{i + 1}
                </span>
                <h3 className="mt-1 text-2xl font-bold">{b.t}</h3>
                <p className="mt-3 text-ink/80">{b.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 4. L'offre */}
        <section id="offre" className="scroll-mt-4 border-y border-rule bg-paper-deep">
          <div className="mx-auto w-full max-w-5xl px-5 py-14 md:py-20">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
              Votre premier audit, livré sous {site.deliveryHours} heures
            </h2>

            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ["Vous m'envoyez vos relevés", "Vos relevés bancaires des 12 derniers mois, ou la liste de vos outils. Gardez seulement les lignes qui concernent des logiciels : le reste ne m'intéresse pas."],
                ["Je dresse votre inventaire", "Coût annuel par outil et par personne, comptes inutilisés, doublons de fonction. Livré en tableau, prêt à partager."],
                ["Vous êtes prévenu à chaque échéance", "Un rappel avant chaque renouvellement annuel, tant que vous restez abonné."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center bg-ink font-serif text-sm font-bold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{t}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink/80">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 max-w-xl border-2 border-ink bg-paper p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                Abonnement
              </p>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold">
                  {site.priceMonthly} €
                </span>
                <span className="text-lg">par mois</span>
              </p>
              <p className="mt-1 text-mute">
                soit {fmtEUR(pricePerDay, 2)} par jour · {fmtEUR(priceYearly)} par an
              </p>
              <p className="mt-4 text-[0.95rem]">
                Dans l&apos;exemple ci-dessus, {fmtEUR(exampleYear)} par an sont
                payés pour rien, contre {fmtEUR(priceYearly)} d&apos;abonnement.
                Votre situation sera différente : l&apos;audit vous dit de combien.
              </p>

              {/* Garantie : visible juste au-dessus du bouton */}
              <div className="mt-5 border-l-4 border-flame bg-paper-deep p-4">
                <p className="font-bold">
                  Satisfait ou remboursé pendant {site.guaranteeDays} jours
                </p>
                <p className="mt-1 text-[0.95rem]">
                  Si l&apos;audit ne vous apprend rien d&apos;utile, écrivez à{" "}
                  <ContactEmail /> dans les {site.guaranteeDays} jours qui suivent
                  votre paiement. Vous êtes remboursé en totalité sous{" "}
                  {site.refundDelayDays} jours ouvrés, sans avoir à vous justifier.
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <CtaButton href={ctaHref}>
                  Recevoir mon audit · {site.priceMonthly} € / mois
                </CtaButton>
                <p className="text-center text-sm font-medium">
                  Sans engagement, résiliable à tout moment
                </p>
                <p className="text-center text-xs text-mute">
                  Paiement sécurisé par Stripe. Prix hors taxes ; {site.legal.vatNote}.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm text-mute">
              Pendant le lancement, chaque audit est préparé à la main par le
              fondateur à partir de vos relevés. L&apos;outil en ligne suivra, et les
              abonnés du lancement y auront accès.
            </p>
          </div>
        </section>

        {/* 5. Questions fréquentes */}
        <section className="mx-auto w-full max-w-3xl px-5 py-14 md:py-20">
          <h2 className="text-3xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 divide-y divide-rule border-y border-rule">
            {faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="text-2xl text-flame transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3">
            <p className="font-serif text-2xl font-bold">
              Combien payez-vous pour rien ?
            </p>
            <CtaButton href="#offre" className="md:self-start">
              Commencer
            </CtaButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

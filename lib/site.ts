// Toutes les informations modifiables du site sont ici.
// Une valeur `null` s'affiche en surbrillance orange « À COMPLÉTER » sur les pages légales.

export const site = {
  name: "Licences",
  tagline: "Les logiciels payés par l'entreprise et utilisés par personne.",

  // Prix (un seul endroit : change ici, tout le site suit)
  priceMonthly: 79,
  guaranteeDays: 30,
  refundDelayDays: 5, // jours ouvrés
  deliveryHours: 72, // délai de livraison du premier audit

  // Identité légale (micro-entreprise)
  legal: {
    siren: "809 334 097",
    siret: null as string | null, // 14 chiffres : SIREN + numéro d'établissement
    ownerName: "Mathieu LAPLAIGE" as string | null, // Prénom NOM de l'entrepreneur individuel
    address: "Section Kervenou, 97190 Le Gosier" as string | null, // Adresse professionnelle complète
    email: (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact.mentionplus@gmail.com") as string | null, // E-mail public de contact
    phone: null as string | null, // facultatif
    vatNote: "TVA non applicable, article 293 B du CGI", // À confirmer : franchise en base
  },
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },

  // Lien de paiement Stripe (Payment Link), créé dans le tableau de bord Stripe.
  // À coller dans la variable d'environnement NEXT_PUBLIC_STRIPE_PAYMENT_LINK.
  paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ?? null,

  lastLegalUpdate: "1er novembre 2026",
};

export const pricePerDay = (site.priceMonthly * 12) / 365; // ≈ 2,60 €
export const priceYearly = site.priceMonthly * 12;

export const fmtEUR = (n: number, decimals = 0) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Adresse où envoyer le paiement : lien Stripe, sinon e-mail, sinon ancre de la page.
export const ctaHref =
  site.paymentLink ??
  (site.legal.email ? `mailto:${site.legal.email}?subject=Audit%20Licences` : "#offre");

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site, siteUrl } from "@/lib/site";
// Polices auto-hébergées (aucune requête vers Google, plus rapide et conforme RGPD)
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "./globals.css";

const title = "Vous payez des logiciels que personne n'utilise";
const description =
  "Licences repère les comptes inutilisés et les doublons dans les abonnements de votre entreprise, et vous prévient avant chaque renouvellement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — ${title}`, template: `%s — ${site.name}` },
  description,
  openGraph: {
    title,
    description,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body className="min-h-dvh flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

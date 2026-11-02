import type { Metadata } from "next";
import { Footer, SiteHeader } from "@/components/Footer";
import { CtaButton } from "@/components/ui";

export const metadata: Metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-5 px-5 py-16">
        <p className="font-serif text-6xl font-bold text-flame">404</p>
        <h1 className="text-3xl font-bold">Cette page n&apos;existe pas.</h1>
        <p className="text-ink/80">
          Le lien est peut-être ancien ou mal recopié. L&apos;accueil vous
          ramène au début.
        </p>
        <CtaButton href="/" className="sm:self-start">
          Retour à l&apos;accueil
        </CtaButton>
      </main>
      <Footer />
    </>
  );
}

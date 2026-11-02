import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-baseline gap-1 font-serif text-2xl font-bold tracking-tight"
      aria-label={`${site.name}, retour à l'accueil`}
    >
      {site.name}
      <span aria-hidden className="inline-block size-2 bg-flame" />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4">
      <Wordmark />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-paper-deep">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-mute md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {site.name} · Micro-entreprise SIREN{" "}
          {site.legal.siren}
        </p>
        <nav aria-label="Informations légales">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link className="underline underline-offset-4" href="/mentions-legales">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/cgv">
                CGV
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/confidentialite">
                Confidentialité
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

import type { ReactNode } from "react";
import { site } from "@/lib/site";

/** Valeur légale manquante : affichée en surbrillance pour ne pas être oubliée. */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">[À COMPLÉTER : {children}]</span>;
}

/** Affiche la valeur si elle existe, sinon un repère « À COMPLÉTER ». */
export function Field({ value, label }: { value: string | null; label: string }) {
  return value ? <>{value}</> : <Todo>{label}</Todo>;
}

export function ContactEmail() {
  const email = site.legal.email;
  return email ? (
    <a className="underline underline-offset-4" href={`mailto:${email}`}>
      {email}
    </a>
  ) : (
    <Todo>adresse e-mail de contact</Todo>
  );
}

export function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-14 w-full items-center justify-center bg-flame px-8 text-lg font-semibold text-white transition-colors hover:bg-ink focus-visible:bg-ink sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

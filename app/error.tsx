"use client"; // Les pages d'erreur doivent être des composants client

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col justify-center gap-5 px-5 py-16">
      <h1 className="text-3xl font-bold">Un problème est survenu de notre côté.</h1>
      <p className="text-ink/80">
        Rien n&apos;a été débité. Vous pouvez réessayer, ou revenir à l&apos;accueil.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => retry()}
          className="inline-flex min-h-14 items-center justify-center bg-flame px-8 text-lg font-semibold text-white hover:bg-ink"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex min-h-14 items-center justify-center border-2 border-ink px-8 text-lg font-semibold hover:bg-ink hover:text-paper"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}

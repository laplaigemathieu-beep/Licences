import { Footer, SiteHeader } from "@/components/Footer";

export default function LegalLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10">
        <article className="[&_a]:underline [&_a]:underline-offset-4 [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:mt-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}

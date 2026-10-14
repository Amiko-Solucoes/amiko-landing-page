import Header from "@/sections/header";
import Footer from "@/sections/footer";
import { WhatsAppButton } from "@/components/whatsappButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/site";

interface PageShellProps {
  children: React.ReactNode;
  /** Trilha de navegação (sem a home, que é adicionada automaticamente). */
  breadcrumbs?: { name: string; path: string }[];
}

/** Estrutura padrão das páginas de conteúdo: cabeçalho fixo, conteúdo, rodapé e botão de WhatsApp. */
export function PageShell({ children, breadcrumbs }: PageShellProps) {
  const trail = breadcrumbs ? [{ name: "Início", path: "/" }, ...breadcrumbs] : undefined;
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <main className="pt-24 w-full flex flex-col items-center">
          {trail && (
            <nav aria-label="Trilha de navegação" className="w-full max-w-[1100px] px-6 pt-4 text-sm text-zinc-500">
              <ol className="flex flex-wrap gap-1">
                {trail.map((item, i) => (
                  <li key={item.path} className="flex gap-1">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < trail.length - 1 ? (
                      <a href={item.path} className="hover:underline">{item.name}</a>
                    ) : (
                      <span aria-current="page">{item.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      {trail && <JsonLd data={breadcrumbSchema(trail)} />}
    </div>
  );
}

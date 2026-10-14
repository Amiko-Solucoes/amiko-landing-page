
import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import Services from "@/sections/services";
import Footer from "@/sections/footer";
import { pageMetadata } from "@/lib/site";


export const metadata = pageMetadata({
  title: "Soluções hospitalares: MOARA, SIMOH e SOTEH",
  description: "Conheça as soluções da Amiko para hospitais: MOARA (concierge hospitalar digital e assistente virtual beira-leito), SIMOH (monitoramento IoT) e SOTEH (software e hardware sob medida).",
  path: "/solucoes-hospitalares",
});

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <h1 className="sr-only">Soluções Hospitalares da Amiko: MOARA, SIMOH e SOTEH</h1>
        <Services />
        <Footer />
        <WhatsAppButton />
        
        </div>
      </div>
    </div>
  );
}

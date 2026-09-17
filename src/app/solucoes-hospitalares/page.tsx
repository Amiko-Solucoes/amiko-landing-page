
import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Services from "@/pages/services";
import Footer from "@/pages/footer";


export const metadata = {
  title: "Soluções Hospitalares: MOARA, SIMOH e SOTEH | Amiko Soluções",
  description: "Conheça as soluções da Amiko para hospitais: MOARA (concierge hospitalar com IA), SIMOH (monitoramento IoT) e SOTEH (software e hardware sob medida) para tornar a operação hospitalar mais eficiente e humana.",
  alternates: {
    canonical: "/solucoes-hospitalares",
  },
};

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

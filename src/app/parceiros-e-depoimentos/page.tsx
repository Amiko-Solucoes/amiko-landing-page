

import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import Partners from "@/sections/partners";
import Feedbacks from "@/sections/feedbacks";
import Footer from "@/sections/footer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Parceiros e depoimentos sobre a MOARA",
  description: "Veja o que equipes, pacientes e gestores da Santa Casa de Passos, Hospital São Lucas e outros hospitais dizem sobre a MOARA, e conheça os parceiros da Amiko Soluções.",
  path: "/parceiros-e-depoimentos",
});

export default function PartnersTestimonials() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <h1 className="sr-only">Parceiros e Depoimentos da Amiko Soluções</h1>
        <Partners />
        <Feedbacks />
        <WhatsAppButton />
        <Footer />
        </div>
      </div>
    </div>
  );
}
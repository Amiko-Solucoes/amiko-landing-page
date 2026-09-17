

import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Partners from "@/pages/partners";
import Feedbacks from "@/pages/feedbacks";
import Footer from "@/pages/footer";

export const metadata = {
  title: "Parceiros e Depoimentos | Amiko Soluções",
  description: "Veja o que hospitais como a Santa Casa de Passos e o Hospital São Lucas dizem sobre a MOARA e conheça os parceiros da Amiko Soluções.",
  alternates: {
    canonical: "/parceiros-e-depoimentos",
  },
};

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
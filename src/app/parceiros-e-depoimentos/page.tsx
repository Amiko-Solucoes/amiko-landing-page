

import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Partners from "@/pages/partners";
import Feedbacks from "@/pages/feedbacks";
import Footer from "@/pages/footer";

export const metadata = {
  title: "Parceiros e Depoimentos | Amiko Soluções",
  description: "Conheça os parceiros e depoimentos da Amiko Soluções para hospitais e clínicas.",
};

export default function PartnersTestimonials() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <Partners />
        <Feedbacks />
        <WhatsAppButton />
        <Footer />
        </div>
      </div>
    </div>
  );
}
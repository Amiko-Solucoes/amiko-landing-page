import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Contact from "@/pages/contact";
import Footer from "@/pages/footer";

export const metadata = {
  title: "Contato | Amiko Soluções",
  description: "Fale com a Amiko Soluções e solicite uma demonstração da MOARA, do SIMOH ou do SOTEH para o seu hospital.",
  alternates: {
    canonical: "/contato",
  },
};
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 flex-1 w-full">
        <h1 className="sr-only">Contato | Amiko Soluções</h1>
        <Contact />
        <WhatsAppButton />
        <Footer />
        </div>
      </div>
    </div>
  );
}
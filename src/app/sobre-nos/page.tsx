import { WhatsAppButton } from "@/components/whatsappButton";
import AboutUs from "@/pages/aboutUs";
import Header from "@/pages/header";
import Footer from "@/pages/footer";

export const metadata = {
  title: "Sobre nós | Amiko Soluções",
  description: "Conheça os serviços oferecidos pela Amiko Soluções para hospitais e clínicas.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <AboutUs />
        <Footer />
        <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

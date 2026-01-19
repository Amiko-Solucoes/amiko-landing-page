import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Contact from "@/pages/contact";
import Footer from "@/pages/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 flex-1 w-full">
        <Contact />
        <WhatsAppButton />
        <Footer />
        </div>
      </div>
    </div>
  );
}
"use client";
import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import Services from "@/pages/services";
import Footer from "@/pages/footer";


export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <Services />
        <Footer />
        <WhatsAppButton />
        
        </div>
      </div>
    </div>
  );
}
import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import TermsSection from "@/sections/terms-section";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Termos de uso",
  description: "Termos de uso dos serviços e do site da Amiko Soluções.",
  path: "/terms",
});
export default function Terms() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <TermsSection />
        <WhatsAppButton />
      </div>
    </div>
  );
}

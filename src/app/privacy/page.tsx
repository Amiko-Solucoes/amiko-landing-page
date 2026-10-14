import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import PrivacySection from "@/sections/privacy-section";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Política de privacidade",
  description: "Política de privacidade e tratamento de dados pessoais da Amiko Soluções (LGPD).",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <PrivacySection />
        <WhatsAppButton />
      </div>
    </div>
  );
}

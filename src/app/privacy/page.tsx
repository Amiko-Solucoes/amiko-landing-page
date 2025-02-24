import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import PrivacySection from "@/pages/privacy-section";

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

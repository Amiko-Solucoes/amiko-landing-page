import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import ManagementSectionSCMP from "@/pages/managament-report-scmp";

export default function ManagementSCMP() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <ManagementSectionSCMP />
        <WhatsAppButton />
      </div>
    </div>
  );
}

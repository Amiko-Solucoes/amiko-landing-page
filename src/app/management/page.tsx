import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/pages/header";
import { ManagementSection } from "@/pages/managament_report";

export default function Management() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <ManagementSection/>
        <WhatsAppButton />
      </div>
    </div>
  );
}

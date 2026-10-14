import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import ManagementSectionSCMP from "@/sections/managament-report-scmp";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Relatório gerencial SCMP",
  description: "Relatório gerencial de uso da MOARA na Santa Casa de Passos.",
  path: "/management-report-scmp",
  noindex: true,
});

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

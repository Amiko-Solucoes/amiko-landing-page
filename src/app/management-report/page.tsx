import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import ManagementSection from "@/sections/managament-report";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Relatório gerencial",
  description: "Relatório gerencial de uso da MOARA.",
  path: "/management-report",
  noindex: true,
});

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

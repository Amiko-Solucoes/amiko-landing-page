import { WhatsAppButton } from "@/components/whatsappButton";
import FeedbackRedirect from "@/pages/feedbackRedirect";
import Header from "@/pages/header";

export default function Report() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <FeedbackRedirect />
        <WhatsAppButton />
      </div>
    </div>
  );
}

import { WhatsAppButton } from "@/components/whatsappButton";
import FeedbackRedirect from "@/sections/feedbackRedirect";
import Header from "@/sections/header";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sugestões e feedbacks",
  description: "Envie sugestões e feedbacks para a Amiko Soluções.",
  path: "/report",
  noindex: true,
});

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

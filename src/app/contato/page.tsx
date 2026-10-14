import { WhatsAppButton } from "@/components/whatsappButton";
import Header from "@/sections/header";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contato: agende uma demonstração da MOARA",
  description: "Fale com a Amiko Soluções e agende uma demonstração da MOARA, concierge hospitalar digital e assistente virtual beira-leito. E-mail contato@amikosolucoes.com, WhatsApp +55 35 99996-8808.",
  path: "/contato",
});
export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 flex-1 w-full">
        <h1 className="sr-only">Fale com a Amiko Soluções e agende uma demonstração da MOARA</h1>
        <Contact />
        <WhatsAppButton />
        <Footer />
        </div>
      </div>
    </div>
  );
}
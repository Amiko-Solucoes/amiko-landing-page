import { WhatsAppButton } from "@/components/whatsappButton";
import { JsonLd } from "@/components/JsonLd";
import AboutUs from "@/sections/aboutUs";
import Contact from "@/sections/contact";
import Feedbacks from "@/sections/feedbacks";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import MoaraInfo from "@/sections/moara";
import Partners from "@/sections/partners";
import Services from "@/sections/services";
import { MOARA_ONE_LINER, PASSOS, moaraProductSchema, pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Concierge hospitalar digital e atendimento beira-leito | Amiko Soluções",
    description:
      "A Amiko Soluções criou a MOARA, concierge hospitalar digital com IA: pacientes pedem ajuda pelo WhatsApp e cada solicitação chega direto à equipe certa. Atendimento beira-leito mais rápido e com dados para a gestão.",
    path: "/",
  }),
  // O título da home não usa o sufixo "| Amiko Soluções" do template.
  title: { absolute: "Concierge hospitalar digital e atendimento beira-leito | Amiko Soluções" },
};

const destaques = [
  {
    href: "/atendimento-beira-leito",
    titulo: "Atendimento beira-leito",
    texto: "O paciente pede ajuda do leito, com as próprias palavras, sem depender de alguém passar pelo quarto.",
  },
  {
    href: "/concierge-hospitalar",
    titulo: "Concierge hospitalar digital",
    texto: "Uma porta de entrada única, 24 horas por dia, que encaminha cada pedido para a equipe responsável.",
  },
  {
    href: "/chamada-de-enfermagem",
    titulo: "Chamada de enfermagem inteligente",
    texto: "Menos chamados que não são da enfermagem: hotelaria, nutrição e manutenção recebem direto.",
  },
  {
    href: "/concierge-virtual",
    titulo: "Concierge virtual também para eventos",
    texto: "A mesma tecnologia atendeu participantes e equipes do HackTown 2026 como a assistente Margarida.",
  },
];

function MoaraIntro() {
  return (
    <section aria-labelledby="o-que-e-moara" className="w-full bg-white py-14">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 id="o-que-e-moara" className="text-3xl font-bold text-sky-900">O que é a MOARA?</h2>
          <p className="text-lg text-zinc-700">{MOARA_ONE_LINER}</p>
          <p className="text-zinc-700">
            No piloto na {PASSOS.hospital}, {PASSOS.semPassarPelaEnfermagem} das {PASSOS.chamados} solicitações registradas não
            precisaram passar pela enfermagem: {PASSOS.resolvidosAutomaticamente} foram respondidas pela própria MOARA e{" "}
            {PASSOS.direcionadosEquipesComplementares} foram direto para hotelaria, nutrição, limpeza e outras equipes.{" "}
            <a href="/resultados" className="text-sky-700 font-bold underline">Veja os resultados</a>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {destaques.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5 hover:border-sky-400 transition"
            >
              <h3 className="font-bold text-sky-900">{item.titulo}</h3>
              <p className="text-zinc-700 text-sm">{item.texto}</p>
              <span className="text-sky-700 text-sm font-bold mt-auto">Saiba mais →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[40] w-full">
          <Header />
        </div>
        <main className="pt-20 bg-[#F3FCFF] w-full">
          <Hero />
          <MoaraIntro />
          <MoaraInfo />
          <Services />
          <AboutUs />
          <Partners />
          <Feedbacks />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      <JsonLd data={moaraProductSchema} />
    </div>
  );
}

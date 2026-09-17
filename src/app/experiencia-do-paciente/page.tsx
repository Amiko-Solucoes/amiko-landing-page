import Image from "next/image";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import { WhatsAppButton } from "@/components/whatsappButton";

export const metadata = {
  title: "Experiência do Paciente em Hospitais | Amiko Soluções",
  description: "Como melhorar a experiência do paciente em hospitais com tecnologia: comunicação mais rápida, menos atrito na jornada de internação e dados reais sobre a operação hospitalar.",
  alternates: {
    canonical: "/experiencia-do-paciente",
  },
};

const faqs = [
  {
    q: "O que é experiência do paciente?",
    a: "É a percepção do paciente sobre toda a sua jornada no hospital — não só o atendimento clínico, mas o tempo para conseguir ajuda, a clareza das informações, a facilidade para solicitar algo e a sensação de estar sendo cuidado.",
  },
  {
    q: "Como melhorar a experiência do paciente em hospitais?",
    a: "Reduzindo o atrito da jornada: facilitando como o paciente pede ajuda, diminuindo o tempo de resposta e garantindo que cada solicitação chegue à pessoa certa. Tecnologia de atendimento beira-leito, como a MOARA, ajuda a medir e reduzir esse atrito.",
  },
  {
    q: "Como medir o tempo de atendimento hospitalar?",
    a: "Registrando cada solicitação do paciente como um dado — horário do pedido, setor responsável e horário da resolução. Isso permite calcular tempo médio de resposta por tipo de demanda e identificar gargalos.",
  },
  {
    q: "Como melhorar a comunicação com pacientes internados?",
    a: "Oferecendo um canal simples e sempre disponível (como WhatsApp) para que o paciente ou acompanhante possa pedir ajuda ou tirar dúvidas sem depender de encontrar um profissional disponível fisicamente.",
  },
];

export default function ExperienciaDoPacientePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>

        <div className="pt-24 w-full flex flex-col items-center">
          {/* Hero */}
          <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-[1200px] px-6 py-12">
            <div className="flex flex-col gap-5 max-w-xl">
              <h1 className="text-sky-900 text-4xl font-bold leading-tight">
                Experiência do Paciente: guia para hospitais
              </h1>
              <p className="text-lg text-zinc-700">
                Cada solicitação de um paciente durante a internação — de um travesseiro a uma dúvida sobre horários — é um ponto de contato que define sua experiência com o hospital. Entenda o que realmente influencia essa jornada e como a tecnologia pode ajudar a melhorá-la.
              </p>
              <a href="/contato" className="w-fit">
                <button className="bg-sky-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition">
                  Fale com a Amiko
                </button>
              </a>
            </div>
            <Image src="/moara_half.svg" alt="Experiência do paciente em hospitais" width={200} height={280} />
          </section>

          {/* O que é */}
          <section className="w-full bg-sky-50 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-sky-900">O que forma a experiência do paciente</h2>
              <p className="text-zinc-700">
                Experiência do paciente não se resume a atendimento cordial ou pesquisa de satisfação no final da internação. Ela é construída em cada interação: o tempo para conseguir ajuda, a clareza das informações recebidas, a facilidade para solicitar algo, a velocidade de resposta e a sensação de estar sendo cuidado.
              </p>
              <p className="text-zinc-700">
                Transformar essas interações em dados ajuda o hospital a identificar os principais motivos de contato, os horários de maior volume, o tempo médio de atendimento e os gargalos que hoje são invisíveis para a gestão.
              </p>
            </div>
          </section>

          {/* Fatores */}
          <section className="w-full max-w-[1100px] px-6 py-14 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-sky-900 text-center">O que mais pesa na jornada do paciente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Tempo de resposta</span>
                <p className="text-zinc-700 text-sm">Quanto tempo o paciente espera entre pedir ajuda e ser atendido — e se ele sabe o que está acontecendo enquanto espera.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Clareza da comunicação</span>
                <p className="text-zinc-700 text-sm">Se o paciente entende para quem pedir cada tipo de ajuda, sem precisar adivinhar ou insistir com a equipe errada.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Facilidade para solicitar</span>
                <p className="text-zinc-700 text-sm">Se abrir um pedido exige esperar alguém passar pelo quarto ou pode ser feito a qualquer momento, por um canal simples.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Consistência do atendimento</span>
                <p className="text-zinc-700 text-sm">Se a qualidade do atendimento depende de qual profissional está de plantão naquele turno.</p>
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section className="w-full bg-sky-900 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4 text-white">
              <h2 className="text-2xl font-bold">O que a tecnologia beira-leito pode mudar</h2>
              <p className="text-sky-100">
                Na Santa Casa de Misericórdia de Passos (MG), entre agosto de 2024 e abril de 2025, solicitações que antes levavam de 16 a 22 minutos para chegar ao setor correto passaram a levar entre 3 e 10 minutos com o uso da MOARA como concierge digital — reduzindo a espera do paciente e dando à equipe mais visibilidade sobre cada pedido.
              </p>
              <p className="text-sky-200 text-sm">
                Resultado observado nesse piloto específico; a magnitude do ganho varia conforme o hospital e o processo já existente.
              </p>
              <a href="/resultados" className="text-white font-bold hover:underline w-fit">Leia o case completo →</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-sky-900 mb-2">Perguntas frequentes</h2>
            {faqs.map((item) => (
              <details key={item.q} className="border border-zinc-200 rounded-lg p-4">
                <summary className="font-bold text-sky-900 cursor-pointer">{item.q}</summary>
                <p className="text-zinc-700 mt-2 text-sm">{item.a}</p>
              </details>
            ))}
          </section>

          {/* Links cruzados */}
          <section className="w-full max-w-[900px] px-6 pb-14 flex flex-col gap-2">
            <h2 className="text-lg font-bold text-sky-900">Veja também</h2>
            <div className="flex flex-wrap gap-4 text-sky-700 underline">
              <a href="/concierge-hospitalar">Concierge hospitalar digital: MOARA</a>
              <a href="/automacao-hospitalar">Automação e eficiência operacional hospitalar</a>
              <a href="/solucoes-hospitalares">Todas as soluções da Amiko</a>
              <a href="/blog/como-medir-tempo-resposta-hospitalar">Como medir o tempo de resposta hospitalar</a>
            </div>
          </section>

          <Footer />
          <WhatsAppButton />
        </div>
      </div>

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

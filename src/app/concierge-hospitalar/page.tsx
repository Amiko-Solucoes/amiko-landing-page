import Image from "next/image";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import { WhatsAppButton } from "@/components/whatsappButton";

export const metadata = {
  title: "Concierge Hospitalar Digital com IA | MOARA - Amiko Soluções",
  description: "MOARA é o concierge hospitalar digital da Amiko: uma assistente virtual beira-leito que usa inteligência artificial para entender, priorizar e encaminhar cada solicitação de paciente à equipe certa, 24h por dia.",
  alternates: {
    canonical: "/concierge-hospitalar",
  },
};

const faqs = [
  {
    q: "O que é um concierge hospitalar digital?",
    a: "É uma camada de atendimento disponível 24 horas por dia que recebe as solicitações de pacientes e acompanhantes (por WhatsApp ou outros canais digitais), entende a necessidade em linguagem natural e direciona cada demanda para a equipe responsável, sem que o paciente precise descobrir sozinho quem chamar.",
  },
  {
    q: "A MOARA é só um chatbot?",
    a: "Não. Um chatbot responde perguntas. A MOARA vai além: ela interpreta a solicitação, classifica, prioriza, encaminha para o setor certo (enfermagem, hotelaria, manutenção etc.) e transforma cada interação em dado para a gestão do hospital acompanhar volume, tempo de resposta e gargalos.",
  },
  {
    q: "O WhatsApp pode ser usado para atendimento hospitalar?",
    a: "Sim. É um dos canais em que a MOARA opera, já que é o aplicativo que pacientes e acompanhantes já usam no dia a dia — reduz a barreira de adoção e permite abrir uma solicitação sem precisar instalar um novo aplicativo.",
  },
  {
    q: "A MOARA substitui a equipe de enfermagem ou assistencial?",
    a: "Não. A MOARA é uma camada de apoio: ela absorve o atrito operacional de direcionar solicitações simples (como hotelaria ou manutenção) para que a equipe assistencial tenha mais tempo disponível para o que exige presença humana.",
  },
];

export default function ConciergeHospitalarPage() {
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
                Concierge Hospitalar Digital: conheça a MOARA
              </h1>
              <p className="text-lg text-zinc-700">
                A MOARA é a assistente virtual beira-leito da Amiko: um concierge hospitalar com inteligência artificial que entende cada solicitação de paciente, prioriza e encaminha direto para a equipe responsável — reduzindo interrupções e melhorando a experiência de quem está internado.
              </p>
              <a href="/contato" className="w-fit">
                <button className="bg-sky-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition">
                  Solicitar uma demonstração
                </button>
              </a>
            </div>
            <Image src="/moara_full.svg" alt="MOARA, concierge hospitalar digital da Amiko" width={220} height={420} />
          </section>

          {/* Problema */}
          <section className="w-full bg-sky-50 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-sky-900">O problema que a MOARA resolve</h2>
              <p className="text-zinc-700">
                Dentro de um hospital, dezenas de necessidades diferentes surgem durante a internação: um travesseiro, um problema no ar-condicionado, uma dúvida sobre horário de visita. Como o paciente não sabe quem deve resolver cada pedido, é comum que ele acione a enfermagem — mesmo quando o pedido é de hotelaria ou manutenção.
              </p>
              <p className="text-zinc-700">
                O resultado é interrupção constante das equipes, mais tempo de resposta, perda de rastreabilidade e uma experiência pior para o paciente. A MOARA funciona como um ponto central de entrada para essas solicitações, evitando que o paciente precise descobrir sozinho qual setor procurar.
              </p>
            </div>
          </section>

          {/* Como funciona */}
          <section className="w-full max-w-[1100px] px-6 py-14 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-sky-900 text-center">Como a MOARA funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">1. O pedido</span>
                <p className="text-zinc-700 text-sm">Paciente ou acompanhante faz uma solicitação em linguagem natural, por WhatsApp ou canal digital, a qualquer hora do dia.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">2. A interpretação</span>
                <p className="text-zinc-700 text-sm">A IA da MOARA entende a necessidade, classifica e prioriza a solicitação automaticamente.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">3. O encaminhamento</span>
                <p className="text-zinc-700 text-sm">A demanda chega direto à equipe responsável (enfermagem, hotelaria, manutenção...) já com o contexto necessário.</p>
              </div>
            </div>
          </section>

          {/* Benefícios */}
          <section className="w-full bg-sky-900 py-14">
            <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <h3 className="font-bold text-xl mb-2">Para o paciente</h3>
                <p className="text-sky-100 text-sm">Facilidade para conseguir ajuda, a qualquer hora, sem precisar saber quem chamar.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Para as equipes</h3>
                <p className="text-sky-100 text-sm">Menos interrupções por solicitações que não são da sua área e melhor direcionamento de demandas.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Para a gestão</h3>
                <p className="text-sky-100 text-sm">Dados e visibilidade real sobre volume de chamados, tempo de resposta e gargalos da operação.</p>
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-2xl font-bold text-sky-900">Resultados em ambiente hospitalar real</h2>
              <span className="w-fit text-sm font-bold text-white bg-sky-700 px-3 py-1 rounded-full">85% de otimização média</span>
            </div>
            <p className="text-zinc-700">
              Entre agosto de 2024 e abril de 2025, a MOARA foi utilizada na Santa Casa de Misericórdia de Passos (MG), registrando aproximadamente 733 chamados — 36,8% para enfermagem, 23,9% para hotelaria e 15,8% assistenciais. Solicitações que antes levavam de 6 a 12 minutos para chegar ao setor correto passaram a ser encaminhadas em cerca de 10 segundos. No Hospital São Lucas (BH), a MOARA também passou a controlar iluminação e ar-condicionado do quarto por comando de voz.
            </p>
            <p className="text-sm text-zinc-500">
              Resultados observados nesse piloto específico, em um único hospital e período. Não representam uma promessa universal de resultado para qualquer instituição.
            </p>
            <a href="/resultados" className="text-sky-700 font-bold hover:underline w-fit">Leia o case completo →</a>
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
              <a href="/experiencia-do-paciente">Experiência do paciente em hospitais</a>
              <a href="/automacao-hospitalar">Automação e eficiência operacional hospitalar</a>
              <a href="/solucoes-hospitalares">Todas as soluções da Amiko</a>
              <a href="/blog/o-que-e-concierge-hospitalar-digital">O que é concierge hospitalar digital?</a>
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

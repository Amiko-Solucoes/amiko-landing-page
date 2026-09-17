import Image from "next/image";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import { WhatsAppButton } from "@/components/whatsappButton";

export const metadata = {
  title: "Automação Hospitalar: Eficiência Operacional | Amiko Soluções",
  description: "Como a automação com inteligência artificial reduz sobrecarga da enfermagem, organiza solicitações e gera indicadores para a gestão hospitalar tomar decisões melhores.",
  alternates: {
    canonical: "/automacao-hospitalar",
  },
};

const faqs = [
  {
    q: "Como reduzir chamadas desnecessárias para a enfermagem?",
    a: "Dando ao paciente um canal claro para cada tipo de solicitação, para que pedidos de hotelaria, manutenção ou informação não precisem passar pela enfermagem antes de chegar ao setor certo. Isso é feito automaticamente por uma camada de triagem com inteligência artificial, como a MOARA.",
  },
  {
    q: "Como organizar solicitações de pacientes?",
    a: "Centralizando todos os pedidos em um único canal digital, que classifica automaticamente cada solicitação por tipo e prioridade e a encaminha direto para a equipe responsável, com rastreabilidade do início ao fim.",
  },
  {
    q: "Como automatizar a hotelaria hospitalar?",
    a: "Direcionando pedidos de enxoval, limpeza, alimentação e conforto diretamente à equipe de hotelaria assim que o paciente solicita, sem depender de um intermediário para repassar a demanda.",
  },
  {
    q: "Automação hospitalar substitui o trabalho das equipes?",
    a: "Não. O objetivo é remover tarefas administrativas e de encaminhamento que hoje ocupam tempo das equipes, para que elas possam dedicar mais atenção a atividades que exigem presença humana.",
  },
];

export default function AutomacaoHospitalarPage() {
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
                Automação Hospitalar e Eficiência Operacional
              </h1>
              <p className="text-lg text-zinc-700">
                Nem toda demanda de um paciente precisa chegar à enfermagem. Veja como automatizar o direcionamento de solicitações reduz sobrecarga das equipes e transforma cada chamado em dado de gestão para o hospital.
              </p>
              <a href="/contato" className="w-fit">
                <button className="bg-sky-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition">
                  Fale com a Amiko
                </button>
              </a>
            </div>
            <Image src="/simoh_img_section.svg" alt="Automação e eficiência operacional hospitalar" width={260} height={280} />
          </section>

          {/* Problema */}
          <section className="w-full bg-sky-50 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-sky-900">A sobrecarga operacional invisível</h2>
              <p className="text-zinc-700">
                Em muitos hospitais, solicitações simples — um travesseiro, um reparo, uma dúvida — acabam chegando ao canal errado, normalmente a enfermagem, porque é quem o paciente sabe chamar. A equipe assistencial precisa então interromper sua rotina para identificar o pedido e repassá-lo ao setor correto.
              </p>
              <p className="text-zinc-700">
                O resultado é sobrecarga, tempo de resposta maior, falta de rastreabilidade e, para a gestão, uma operação sem dados suficientes para identificar onde estão os gargalos.
              </p>
            </div>
          </section>

          {/* Como a automação ajuda */}
          <section className="w-full max-w-[1100px] px-6 py-14 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-sky-900 text-center">Inteligência operacional na prática</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Triagem automática</span>
                <p className="text-zinc-700 text-sm">Cada solicitação é classificada e priorizada por inteligência artificial no momento em que chega, sem depender de um profissional para decidir o encaminhamento.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Encaminhamento direto</span>
                <p className="text-zinc-700 text-sm">A demanda chega direto à equipe responsável — enfermagem, hotelaria, manutenção ou facilities — já com o contexto necessário.</p>
              </div>
              <div className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
                <span className="font-bold text-sky-900">Indicadores de gestão</span>
                <p className="text-zinc-700 text-sm">Cada solicitação vira dado: volume por setor, horários de pico, tempo médio de resposta e padrões recorrentes ficam visíveis para a gestão.</p>
              </div>
            </div>
          </section>

          {/* Resultados */}
          <section className="w-full bg-sky-900 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4 text-white">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl font-bold">O impacto de direcionar cada chamado certo</h2>
                <span className="w-fit text-sm font-bold text-sky-900 bg-white px-3 py-1 rounded-full">85% de otimização média</span>
              </div>
              <p className="text-sky-100">
                No piloto realizado na Santa Casa de Misericórdia de Passos (MG), entre agosto de 2024 e abril de 2025, dos 733 chamados registrados, 36,8% eram de enfermagem e 23,9% de hotelaria. Em determinados cenários observados, houve redução próxima de 70% em demandas simples que antes chegavam às equipes de forma desnecessária ou indireta.
              </p>
              <p className="text-sky-200 text-sm">
                Números referentes a esse piloto específico, com metodologia e período definidos — não representam garantia de resultado para qualquer hospital.
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
              <a href="/experiencia-do-paciente">Experiência do paciente em hospitais</a>
              <a href="/solucoes-hospitalares">Todas as soluções da Amiko</a>
              <a href="/blog/reduzir-chamados-desnecessarios-enfermagem">5 formas de reduzir chamados para a enfermagem</a>
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

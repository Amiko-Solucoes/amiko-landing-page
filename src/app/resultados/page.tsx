import Header from "@/pages/header";
import Footer from "@/pages/footer";
import { WhatsAppButton } from "@/components/whatsappButton";

export const metadata = {
  title: "Cases MOARA: Santa Casa de Passos e Hospital São Lucas | Amiko Soluções",
  description: "Resultados reais da MOARA em hospitais brasileiros: Santa Casa de Misericórdia de Passos (733 chamados, 85% de otimização no tempo de resposta) e Hospital São Lucas (controle de quarto por voz).",
  alternates: {
    canonical: "/resultados",
  },
};

const comparativo = [
  { tarefa: "Ligar/desligar luz ou ar-condicionado", antes: "6 a 12 minutos", depois: "10 segundos" },
  { tarefa: "Dúvidas sobre a internação", antes: "6 a 12 minutos", depois: "10 segundos" },
  { tarefa: "Ida ao banheiro", antes: "6 a 12 min para identificar + 10 min acompanhando", depois: "Identificação instantânea, < 3 min sendo atendido" },
  { tarefa: "Copo de água", antes: "6 a 12 min para identificar, transferir para outra equipe + 10 min", depois: "Equipe responsável recebe na hora, < 10 min para atender" },
];

export default function ResultadosPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>

        <div className="pt-24 w-full flex flex-col items-center">
          {/* Hero */}
          <section className="w-full max-w-[900px] px-6 py-12 flex flex-col gap-4">
            <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
              Cases de implantação
            </span>
            <h1 className="text-sky-900 text-4xl font-bold leading-tight">
              Resultados reais da MOARA em hospitais brasileiros
            </h1>
            <p className="text-lg text-zinc-700">
              Veja como a MOARA funciona na prática na Santa Casa de Misericórdia de Passos (MG) e no Hospital São Lucas (BH), com números, depoimentos e contexto de cada implantação.
            </p>
          </section>

          {/* ============ CASE 1: SANTA CASA DE PASSOS ============ */}
          <section className="w-full bg-sky-50 py-10">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Case 1</span>
              <h2 className="text-xl font-bold text-sky-900">Santa Casa de Misericórdia de Passos (MG)</h2>
              <p className="text-zinc-700 text-sm">
                <strong>Período:</strong> agosto de 2024 a abril de 2025 &nbsp;·&nbsp;
                <strong> Canal:</strong> WhatsApp e canais digitais integrados &nbsp;·&nbsp;
                <strong> Volume no período:</strong> aproximadamente 733 chamados registrados
              </p>
            </div>
          </section>

          <section className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-sky-900">733</span>
                <span className="text-sm text-zinc-600">chamados registrados</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-sky-900">36,8%</span>
                <span className="text-sm text-zinc-600">dos chamados eram de enfermagem</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-sky-900">23,9%</span>
                <span className="text-sm text-zinc-600">dos chamados eram de hotelaria</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-sky-900">15,8%</span>
                <span className="text-sm text-zinc-600">dos chamados eram assistenciais</span>
              </div>
            </div>

            {/* Tabela comparativa */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-bold text-sky-900">Atendimento tradicional x MOARA, por tipo de solicitação</h3>
                <span className="w-fit text-sm font-bold text-white bg-sky-700 px-3 py-1 rounded-full">85% de otimização média</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left border-b border-zinc-200">
                      <th className="py-2 pr-4 text-sky-900">Solicitação</th>
                      <th className="py-2 pr-4 text-zinc-500">Atendimento tradicional</th>
                      <th className="py-2 text-sky-900">Com a MOARA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativo.map((linha) => (
                      <tr key={linha.tarefa} className="border-b border-zinc-100">
                        <td className="py-3 pr-4 font-bold text-zinc-800">{linha.tarefa}</td>
                        <td className="py-3 pr-4 text-zinc-500">{linha.antes}</td>
                        <td className="py-3 text-sky-800 font-bold">{linha.depois}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-zinc-200 rounded-xl p-6 flex flex-col gap-2">
              <span className="font-bold text-sky-900">Demandas simples desviadas de outras equipes</span>
              <p className="text-zinc-700 text-sm">
                Em determinados cenários observados durante o piloto, houve redução próxima de <strong>70%</strong> em demandas simples que anteriormente chegavam às equipes de forma desnecessária ou indireta — como pedidos de hotelaria que acabavam sendo direcionados à enfermagem.
              </p>
            </div>
            <p className="text-sm text-zinc-500 text-center max-w-2xl mx-auto">
              Resultados observados neste piloto específico, em um único hospital e período definido. Não representam uma promessa de resultado idêntico para qualquer outra instituição — cada hospital tem fluxos e volume de demanda diferentes.
            </p>
          </section>

          <section className="w-full bg-sky-900 py-14">
            <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-8 text-white">
              <h3 className="text-xl font-bold text-center">O que a equipe da Santa Casa de Passos diz</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <blockquote className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
                  <p className="text-sky-100 text-sm italic">
                    "Estamos utilizando o sistema MOARA e está sendo muito útil pra nosso trabalho, facilita e otimiza nossas funções. O paciente solicita algo e pelo sistema já conseguimos ver o que ele está precisando, sem a necessidade de ir até o quarto duas vezes."
                  </p>
                  <span className="text-sm font-bold">Joyce Cristina — Hotelaria, Santa Casa de Misericórdia de Passos</span>
                </blockquote>
                <blockquote className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
                  <p className="text-sky-100 text-sm italic">
                    "Essa semana foi instalada a MOARA, que vai contribuir muito, tanto para o paciente quanto para os colaboradores da enfermagem e hotelaria, otimizando o tempo de atendimento. Os pacientes que já utilizaram o sistema estão encantados com a inovação."
                  </p>
                  <span className="text-sm font-bold">Emilene — Hotelaria, Santa Casa de Misericórdia de Passos</span>
                </blockquote>
              </div>
            </div>
          </section>

          {/* ============ CASE 2: HOSPITAL SÃO LUCAS ============ */}
          <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Case 2</span>
            <h2 className="text-2xl font-bold text-sky-900">Hospital São Lucas (Belo Horizonte)</h2>
            <p className="text-zinc-700">
              O Hospital São Lucas foi o primeiro hospital de grande porte a adotar a MOARA como assistente de quarto por voz, dentro da iniciativa de "Hospital do Futuro" da instituição. Pelo comando de voz, o paciente pode solicitar itens de conforto, controlar a iluminação, a temperatura do ar-condicionado e dispositivos eletrônicos do quarto — recurso especialmente útil durante a recuperação pós-operatória, quando a mobilidade do paciente é limitada.
            </p>
            <p className="text-zinc-700">
              A tecnologia permite que a equipe de enfermagem antecipe necessidades dos pacientes e reduza deslocamentos desnecessários até o leito, liberando mais tempo para o cuidado assistencial.
            </p>
            <blockquote className="bg-sky-50 border border-sky-100 rounded-xl p-5 flex flex-col gap-2">
              <p className="text-zinc-700 text-sm italic">
                "A tecnologia MOARA tem facilitado muito nosso trabalho. É um aparelho fácil de utilizar, então a adaptação tem sido bem tranquila. Quando o paciente nos chama com um problema, a gente já pode chegar com uma solução."
              </p>
              <span className="text-sm font-bold text-sky-900">Bruna de Oliveira — Técnica de Enfermagem, Hospital São Lucas</span>
            </blockquote>
          </section>

          {/* CTA */}
          <section className="w-full max-w-[900px] px-6 py-14 flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold text-sky-900">Quer ver um resultado parecido no seu hospital?</h2>
            <p className="text-zinc-700 max-w-xl">
              Cada hospital tem uma operação diferente. Fale com o time da Amiko para entender como a MOARA se aplicaria à realidade da sua instituição.
            </p>
            <a href="/contato">
              <button className="bg-sky-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition">
                Solicitar uma demonstração
              </button>
            </a>
            <div className="flex flex-wrap gap-4 text-sky-700 underline pt-4">
              <a href="/concierge-hospitalar">Concierge hospitalar digital: MOARA</a>
              <a href="/parceiros-e-depoimentos">Mais depoimentos e parceiros</a>
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
            "@type": "Article",
            headline: "Resultados reais da MOARA em hospitais brasileiros",
            description: "Cases de implantação da MOARA na Santa Casa de Misericórdia de Passos (MG) e no Hospital São Lucas (BH).",
            author: {
              "@type": "Person",
              name: "Roberto Luiz Assad Pinheiro",
            },
            publisher: {
              "@type": "Organization",
              name: "Amiko Soluções",
              url: "https://www.amikosolucoes.com.br",
            },
            about: {
              "@type": "Product",
              name: "MOARA",
            },
            datePublished: "2025-04-30",
          }),
        }}
      />
    </div>
  );
}

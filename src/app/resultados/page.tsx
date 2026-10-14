import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { HACKTOWN, MOARA_ID, ORG_ID, PASSOS, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cases da MOARA: Santa Casa de Passos, São Lucas e HackTown",
  description:
    "Resultados medidos da MOARA: 522 solicitações na Santa Casa de Passos com 71,8% sem passar pela enfermagem, assistente de quarto por voz no Hospital São Lucas e 661 consultas no HackTown 2026.",
  path: "/resultados",
});

const distribuicao = [
  { area: "Resolvidas pela própria MOARA", valor: PASSOS.sistema },
  { area: "Enfermagem", valor: PASSOS.enfermagem },
  { area: "Hotelaria", valor: PASSOS.hotelaria },
  { area: "Apoio assistencial", valor: PASSOS.assistencial },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Resultados reais da MOARA em hospitais e eventos",
  description:
    "Cases da MOARA na Santa Casa de Misericórdia de Passos (MG), no Hospital São Lucas (BH) e no HackTown 2026.",
  author: { "@type": "Person", name: "Roberto Luiz Assad Pinheiro", url: `${SITE_URL}/sobre-nos` },
  publisher: { "@id": ORG_ID },
  about: { "@id": MOARA_ID },
  datePublished: "2025-04-30",
  dateModified: "2026-10-11",
  mainEntityOfPage: `${SITE_URL}/resultados`,
  inLanguage: "pt-BR",
};

export default function ResultadosPage() {
  return (
    <PageShell breadcrumbs={[{ name: "Cases e resultados", path: "/resultados" }]}>
      <section className="w-full max-w-[900px] px-6 py-12 flex flex-col gap-4">
        <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
          Cases de implantação
        </span>
        <h1 className="text-sky-900 text-4xl font-bold leading-tight">Resultados reais da MOARA</h1>
        <p className="text-lg text-zinc-700">
          Números medidos nos relatórios de utilização da Amiko Soluções: o piloto na Santa Casa de Misericórdia de Passos (MG), a
          assistente de quarto por voz no Hospital São Lucas (BH) e o concierge virtual do HackTown 2026.
        </p>
      </section>

      {/* ============ CASE 1: SANTA CASA DE PASSOS ============ */}
      <section className="w-full bg-sky-50 py-10">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Case 1 · Hospital</span>
          <h2 className="text-2xl font-bold text-sky-900">{PASSOS.hospital}</h2>
          <p className="text-zinc-700 text-sm">
            <strong>Período:</strong> {PASSOS.periodo} · <strong>Canais:</strong> versão virtual e, a partir de fevereiro de 2025,
            WhatsApp · <strong>Volume:</strong> {PASSOS.chamados} solicitações registradas ·{" "}
            <strong>Equipe envolvida:</strong> {PASSOS.colaboradoresEnvolvidos} colaboradores do hospital
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-sky-900">{PASSOS.chamados}</span>
            <span className="text-sm text-zinc-600">solicitações registradas</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-sky-900">{PASSOS.semPassarPelaEnfermagem}</span>
            <span className="text-sm text-zinc-600">não precisaram ser intermediadas pela enfermagem</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-sky-900">{PASSOS.resolvidosAutomaticamente}</span>
            <span className="text-sm text-zinc-600">resolvidas automaticamente, sem intervenção humana</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-sky-900">3,5×</span>
            <span className="text-sm text-zinc-600">mais uso na Ala B após a migração para o WhatsApp</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-sky-900">Para onde foram os pedidos</h3>
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Distribuição das solicitações por área</caption>
              <tbody>
                {distribuicao.map((d) => (
                  <tr key={d.area} className="border-b border-zinc-100">
                    <th scope="row" className="py-2 pr-4 text-left text-zinc-800 font-normal">{d.area}</th>
                    <td className="py-2 text-sky-900 font-bold text-right">{d.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-zinc-700 text-sm">
              Somando as {PASSOS.resolvidosAutomaticamente} respostas automáticas e os {PASSOS.direcionadosEquipesComplementares}{" "}
              pedidos enviados direto a hotelaria, nutrição, limpeza e outras equipes, {PASSOS.semPassarPelaEnfermagem} das
              interações deixaram de depender da enfermagem.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-sky-900">O efeito do WhatsApp</h3>
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Média de chamados por dia antes e depois da migração para o WhatsApp</caption>
              <thead>
                <tr className="text-left border-b border-zinc-200">
                  <th scope="col" className="py-2 pr-4 text-zinc-500">Ala</th>
                  <th scope="col" className="py-2 pr-4 text-zinc-500">Versão virtual</th>
                  <th scope="col" className="py-2 text-sky-900">WhatsApp</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <th scope="row" className="py-2 pr-4 text-left font-normal">Ala B</th>
                  <td className="py-2 pr-4">{PASSOS.alaB.antes} chamados/dia</td>
                  <td className="py-2 font-bold text-sky-900">{PASSOS.alaB.depois} chamados/dia</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <th scope="row" className="py-2 pr-4 text-left font-normal">Ala Pediátrica</th>
                  <td className="py-2 pr-4">{PASSOS.pediatria.antes} chamados/dia</td>
                  <td className="py-2 font-bold text-sky-900">{PASSOS.pediatria.depois} chamados/dia</td>
                </tr>
              </tbody>
            </table>
            <p className="text-zinc-700 text-sm">
              A migração para um aplicativo que pacientes e acompanhantes já usavam foi decisiva para a adesão, especialmente na
              pediatria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">Picos de demanda</h3>
            <p className="text-zinc-700 text-sm">
              {PASSOS.picos}. Durante a semana predominaram pedidos de higiene, refeições e ajustes de quarto; nos fins de semana,
              interações de conforto emocional.
            </p>
          </div>
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">Tempo de resposta</h3>
            <p className="text-zinc-700 text-sm">
              A enfermagem teve média de resposta de {PASSOS.respostaMediaEnfermagem}. A média foi afetada por chamados que
              ficaram abertos por longos períodos, principalmente à noite.
            </p>
          </div>
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">Demanda descoberta</h3>
            <p className="text-zinc-700 text-sm">
              Mesmo sem integração com os equipamentos do quarto no piloto, muitos pedidos eram de ar-condicionado, TV e cortinas
              — sinal de que pacientes querem mais autonomia sobre o ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-sky-900 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-8 text-white">
          <h3 className="text-xl font-bold text-center">O que dizem pacientes e equipe da Santa Casa de Passos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sky-100 italic">
            <p>“Muito melhor do que ficar esperando a campainha.”</p>
            <p>“Dá sensação de que se preocupam com a gente.”</p>
            <p>“Achei muito moderno.”</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
              <p className="text-sky-100 text-sm italic">
                “Estamos utilizando o sistema MOARA e está sendo muito útil pra nosso trabalho, facilita e otimiza nossas funções. O
                paciente solicita algo e pelo sistema já conseguimos ver o que ele está precisando, sem a necessidade de ir até o
                quarto duas vezes.”
              </p>
              <span className="text-sm font-bold">Joyce Cristina — Hotelaria, Santa Casa de Misericórdia de Passos</span>
            </blockquote>
            <blockquote className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
              <p className="text-sky-100 text-sm italic">
                “Hoje eu estava com paciente e não podia deixar ele sozinho, aí mandei na MOARA pedindo um suco. Foi super rápido e
                logo as meninas já levaram para mim.”
              </p>
              <span className="text-sm font-bold">Lo-Ami — Acompanhante, Santa Casa de Misericórdia de Passos</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ CASE 2: HOSPITAL SÃO LUCAS ============ */}
      <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Case 2 · Hospital</span>
        <h2 className="text-2xl font-bold text-sky-900">Hospital São Lucas (Belo Horizonte)</h2>
        <p className="text-zinc-700">
          O Hospital São Lucas adotou a MOARA como assistente de quarto por voz, dentro da iniciativa de “Hospital do Futuro” da
          instituição. Por comando de voz, o paciente solicita itens de conforto e controla iluminação, temperatura do
          ar-condicionado e dispositivos do quarto — recurso especialmente útil na recuperação pós-operatória, quando a mobilidade é
          limitada.
        </p>
        <p className="text-zinc-700">
          A equipe de enfermagem passa a chegar ao leito já sabendo o que o paciente precisa e evita deslocamentos desnecessários.
        </p>
        <blockquote className="bg-sky-50 border border-sky-100 rounded-xl p-5 flex flex-col gap-2">
          <p className="text-zinc-700 text-sm italic">
            “A tecnologia MOARA tem facilitado muito nosso trabalho. É um aparelho fácil de utilizar, então a adaptação tem sido bem
            tranquila. Quando o paciente nos chama com um problema, a gente já pode chegar com uma solução.”
          </p>
          <span className="text-sm font-bold text-sky-900">Bruna de Oliveira — Técnica de Enfermagem, Hospital São Lucas</span>
        </blockquote>
      </section>

      {/* ============ CASE 3: HACKTOWN ============ */}
      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Case 3 · Evento</span>
          <h2 className="text-2xl font-bold text-sky-900">HackTown 2026: a MOARA como concierge virtual de evento</h2>
          <p className="text-zinc-700">
            De {HACKTOWN.periodo}, a tecnologia MOARA operou no HackTown com a persona Margarida. Para os participantes, respondeu{" "}
            {HACKTOWN.faq.consultas} consultas em {HACKTOWN.faq.sessoes} sessões — {HACKTOWN.faq.programacaoLocalizacaoPct} sobre
            programação e localização — e enviou {HACKTOWN.faq.respostasComMapa} respostas com link de mapa. Para o staff,
            funcionou como concierge operacional: {HACKTOWN.concierge.sessoes} sessões no WhatsApp geraram{" "}
            {HACKTOWN.concierge.solicitacoes} solicitações operacionais, todas encerradas, com mediana de{" "}
            {HACKTOWN.concierge.medianaInicio} até o início do atendimento.
          </p>
          <a href="/blog/concierge-virtual-para-eventos-hacktown" className="text-sky-700 font-bold hover:underline w-fit">
            Leia o case completo do HackTown →
          </a>
        </div>
      </section>

      <section className="w-full max-w-[900px] px-6 py-14 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-sky-900">Quer ver um resultado parecido no seu hospital?</h2>
        <p className="text-zinc-700 max-w-xl">
          Os números acima são de projetos específicos. Cada hospital tem fluxos e volumes diferentes. Fale com a Amiko para entender
          como a MOARA se aplica à sua instituição.
        </p>
        <CtaButton>Solicitar uma demonstração</CtaButton>
      </section>

      <RelatedLinks
        links={[
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/chamada-de-enfermagem", label: "Comparativo de fluxo: tradicional × MOARA" },
          { href: "/blog/o-que-pacientes-pedem-no-leito", label: "O que os pacientes pedem do leito" },
          { href: "/parceiros-e-depoimentos", label: "Mais depoimentos e parceiros" },
        ]}
      />
      <JsonLd data={articleSchema} />
    </PageShell>
  );
}

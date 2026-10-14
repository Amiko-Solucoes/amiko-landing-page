import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { ORG_ID, PASSOS, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Chamada de enfermagem: campainha, app ou assistente virtual?",
  description:
    "Comparativo entre campainha de enfermagem tradicional, aplicativo do hospital e assistente virtual com IA pelo WhatsApp: o que cada um identifica, para onde encaminha e que dados gera.",
  path: "/chamada-de-enfermagem",
});

type Linha = { criterio: string; campainha: string; app: string; assistente: string };

const comparativo: Linha[] = [
  {
    criterio: "Como o paciente pede",
    campainha: "Aperta um botão",
    app: "Escolhe uma opção em menu no aplicativo do hospital",
    assistente: "Escreve ou fala com as próprias palavras (WhatsApp ou voz)",
  },
  {
    criterio: "A equipe sabe o que é antes de ir ao quarto?",
    campainha: "Não",
    app: "Sim, se o pedido estiver no menu",
    assistente: "Sim, a IA interpreta o pedido",
  },
  {
    criterio: "Quem recebe o chamado",
    campainha: "Enfermagem, quase sempre",
    app: "O setor da opção escolhida",
    assistente: "O setor responsável, escolhido automaticamente",
  },
  {
    criterio: "Responde dúvidas sozinho",
    campainha: "Não",
    app: "Em parte (telas informativas)",
    assistente: "Sim (refeições, visitas, internet, rotina)",
  },
  {
    criterio: "Precisa instalar algo",
    campainha: "Infraestrutura no quarto",
    app: "Aplicativo no celular ou tablet",
    assistente: "Nada: usa o WhatsApp (ou dispositivo de voz)",
  },
  {
    criterio: "Acompanhante pode pedir",
    campainha: "Só se estiver no quarto",
    app: "Se tiver o aplicativo e o login",
    assistente: "Sim, pelo próprio WhatsApp",
  },
  {
    criterio: "Dados para a gestão",
    campainha: "Em geral, só o registro do toque",
    app: "Pedidos por categoria",
    assistente: "Pedidos, setores, tempos e frases dos pacientes",
  },
  {
    criterio: "Melhor uso",
    campainha: "Emergências e chamados assistenciais imediatos",
    app: "Hospitais com aplicativo próprio bem adotado",
    assistente: "Organizar a maior parte dos pedidos do dia a dia",
  },
];

const fluxo = [
  { pedido: "Ligar ou desligar luz e ar-condicionado", tradicional: "6 a 12 minutos", moara: "10 segundos (quarto integrado, por voz)" },
  { pedido: "Dúvidas sobre a internação", tradicional: "6 a 12 minutos", moara: "10 segundos" },
  { pedido: "Ida ao banheiro", tradicional: "6 a 12 min para identificar + 10 min acompanhando", moara: "Identificação instantânea; menos de 3 min até o atendimento" },
  { pedido: "Copo de água", tradicional: "6 a 12 min para identificar, transferir para outra equipe + 10 min", moara: "Equipe responsável recebe na hora; menos de 10 min para atender" },
];

const faqs = [
  {
    q: "O que é chamada de enfermagem?",
    a: "É o sistema que o paciente internado usa para pedir ajuda à equipe — tradicionalmente uma campainha ou botão ao lado do leito que acende um sinal no posto de enfermagem.",
  },
  {
    q: "Assistente virtual substitui a campainha de enfermagem?",
    a: "Não deve. A campainha e os protocolos de emergência continuam necessários. O assistente virtual organiza a maior parte dos pedidos do dia a dia — conforto, hotelaria, nutrição, dúvidas — para que a campainha e a enfermagem fiquem com o que é realmente assistencial.",
  },
  {
    q: "Como reduzir chamados desnecessários para a enfermagem?",
    a: "Dando ao paciente um canal que identifica o tipo de pedido e o envia direto ao setor responsável. Na Santa Casa de Passos, com a MOARA, 71,8% das interações não precisaram ser intermediadas pela enfermagem.",
  },
  {
    q: "Qual a diferença entre campainha digital e assistente virtual?",
    a: "Campainha digital normalmente é um botão ou menu com opções fixas. O assistente virtual com inteligência artificial entende frases livres, responde dúvidas e decide o encaminhamento, inclusive para pedidos que não estavam previstos em um menu.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chamada de enfermagem: campainha, aplicativo ou assistente virtual?",
  author: { "@type": "Person", name: "Roberto Luiz Assad Pinheiro", url: `${SITE_URL}/sobre-nos` },
  publisher: { "@id": ORG_ID },
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  mainEntityOfPage: `${SITE_URL}/chamada-de-enfermagem`,
  inLanguage: "pt-BR",
};

export default function ChamadaDeEnfermagemPage() {
  return (
    <PageShell breadcrumbs={[{ name: "Chamada de enfermagem", path: "/chamada-de-enfermagem" }]}>
      <section className="w-full max-w-[1000px] px-6 py-12 flex flex-col gap-5">
        <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
          Comparativo
        </span>
        <h1 className="text-sky-900 text-4xl font-bold leading-tight">
          Chamada de enfermagem: campainha, aplicativo ou assistente virtual?
        </h1>
        <p className="text-lg text-zinc-700 max-w-3xl">
          Existem hoje três formas principais de o paciente internado pedir ajuda: a campainha tradicional, o aplicativo do
          hospital e o assistente virtual com inteligência artificial. Elas não são excludentes. Veja o que cada uma faz bem e onde
          cada uma deixa a equipe sem informação.
        </p>
      </section>

      <section className="w-full max-w-[1100px] px-6 pb-14 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-sky-900">Comparativo lado a lado</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[720px]">
            <caption className="sr-only">Comparativo entre campainha de enfermagem, aplicativo do hospital e assistente virtual</caption>
            <thead>
              <tr className="text-left border-b-2 border-zinc-200">
                <th scope="col" className="py-3 pr-4 text-zinc-500">Critério</th>
                <th scope="col" className="py-3 pr-4 text-sky-900">Campainha tradicional</th>
                <th scope="col" className="py-3 pr-4 text-sky-900">Aplicativo do hospital</th>
                <th scope="col" className="py-3 text-sky-900">Assistente virtual (ex.: MOARA)</th>
              </tr>
            </thead>
            <tbody>
              {comparativo.map((l) => (
                <tr key={l.criterio} className="border-b border-zinc-100 align-top">
                  <th scope="row" className="py-3 pr-4 font-bold text-zinc-800 text-left">{l.criterio}</th>
                  <td className="py-3 pr-4 text-zinc-700">{l.campainha}</td>
                  <td className="py-3 pr-4 text-zinc-700">{l.app}</td>
                  <td className="py-3 text-sky-900 font-semibold">{l.assistente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-sky-900">O caminho de um pedido: atendimento tradicional × MOARA</h2>
          <p className="text-zinc-700">
            Com a campainha, o tempo maior não está no atendimento em si, mas em descobrir o que o paciente quer e repassar para
            quem resolve. O comparativo abaixo, uma estimativa da Amiko baseada na experiência das implantações, mostra esse caminho para quatro pedidos comuns.
          </p>
          <Image
            src="/moara-comparativo-atendimento.webp"
            alt="Comparativo entre atendimento tradicional e MOARA para luz e ar-condicionado, dúvidas, ida ao banheiro e copo de água"
            width={1600}
            height={911}
            className="rounded-xl border border-sky-100"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-xl">
              <caption className="sr-only">Tempo estimado por tipo de pedido no atendimento tradicional e com a MOARA</caption>
              <thead>
                <tr className="text-left border-b border-zinc-200">
                  <th scope="col" className="py-2 px-3 text-sky-900">Pedido</th>
                  <th scope="col" className="py-2 px-3 text-zinc-500">Atendimento tradicional</th>
                  <th scope="col" className="py-2 px-3 text-sky-900">Com a MOARA</th>
                </tr>
              </thead>
              <tbody>
                {fluxo.map((f) => (
                  <tr key={f.pedido} className="border-b border-zinc-100">
                    <th scope="row" className="py-2 px-3 text-left text-zinc-800">{f.pedido}</th>
                    <td className="py-2 px-3 text-zinc-600">{f.tradicional}</td>
                    <td className="py-2 px-3 text-sky-800 font-semibold">{f.moara}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500">
            Comparativo elaborado pela Amiko Soluções; os tempos e a otimização de 85% são estimativas baseadas na experiência da equipe em implantações hospitalares. Os resultados medidos no piloto
            da Santa Casa de Passos estão na página de{" "}
            <a href="/resultados" className="underline">resultados</a>.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-sky-900">Qual escolher?</h2>
        <p className="text-zinc-700">
          Na prática, a combinação mais comum é manter a campainha para emergências e chamados assistenciais imediatos e usar um
          assistente virtual para os demais pedidos. Na {PASSOS.hospital}, os {PASSOS.chamados} pedidos registrados pela MOARA se
          dividiram em {PASSOS.enfermagem} enfermagem, {PASSOS.hotelaria} hotelaria, {PASSOS.assistencial} apoio assistencial e{" "}
          {PASSOS.sistema} resolvidos automaticamente — ou seja, a maior parte do que o paciente pede não é tarefa da enfermagem.
        </p>
        <p className="text-zinc-700">
          Pacientes de Passos resumiram a diferença em frases como “muito melhor do que ficar esperando a campainha” e “dá
          sensação de que se preocupam com a gente”.
        </p>
        <CtaButton>Falar com a Amiko</CtaButton>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: "/atendimento-beira-leito", label: "Atendimento beira-leito com IA" },
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/blog/reduzir-chamados-desnecessarios-enfermagem", label: "5 formas de reduzir chamados para a enfermagem" },
          { href: "/automacao-hospitalar", label: "Automação hospitalar" },
        ]}
      />
      <JsonLd data={articleSchema} />
    </PageShell>
  );
}

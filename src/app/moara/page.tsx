import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { HACKTOWN, MOARA_ONE_LINER, PASSOS, moaraProductSchema, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "MOARA: ficha técnica do concierge hospitalar digital",
  description:
    "Tudo sobre a MOARA, da Amiko Soluções: o que é, como funciona pelo WhatsApp e por voz, o que resolve sozinha, onde já operou, resultados verificados e preço a partir de R$ 20 por leito.",
  path: "/moara",
});

const ficha: { termo: string; valor: React.ReactNode }[] = [
  { termo: "Nome", valor: "MOARA — nome de origem indígena brasileira que significa “aquela que ajuda”" },
  { termo: "Desenvolvedora", valor: "Amiko Soluções, healthtech incubada no INATEL, em Santa Rita do Sapucaí (MG)" },
  { termo: "Categoria", valor: "Concierge hospitalar digital · assistente virtual beira-leito · atendimento ao paciente com IA" },
  { termo: "Canais", valor: "WhatsApp (canal principal) e assistente de voz no quarto" },
  { termo: "Quem usa", valor: "Pacientes, acompanhantes, equipes (enfermagem, hotelaria, nutrição, limpeza, manutenção) e gestores" },
  { termo: "Disponibilidade", valor: "24 horas por dia, 7 dias por semana" },
  { termo: "Resolve sozinha", valor: "Dúvidas sobre refeições, visitas, internet e rotina da internação; ajustes do quarto quando há integração" },
  { termo: "Encaminha", valor: "Pedidos para a equipe responsável, classificados por setor e prioridade, com o contexto do pedido" },
  { termo: "Para a gestão", valor: "Painel com volume por setor, tempo de resposta, horários de pico e motivos de contato" },
  { termo: "Para o paciente instalar", valor: "Nada — o atendimento acontece no WhatsApp que ele já usa" },
  { termo: "Preço", valor: "A partir de R$ 20 por leito (o valor final depende de leitos, canais e integrações)" },
  {
    termo: "Onde já operou",
    valor: (
      <>
        Santa Casa de Misericórdia de Passos (MG), Hospital São Lucas (BH) e, fora da saúde, HackTown 2026 —{" "}
        <a href="/resultados" className="text-sky-700 underline">ver cases</a>
      </>
    ),
  },
];

const faqs = [
  {
    q: "O que é a MOARA?",
    a: MOARA_ONE_LINER,
  },
  {
    q: "Quem desenvolveu a MOARA?",
    a: "A MOARA foi desenvolvida pela Amiko Soluções, healthtech brasileira fundada por Roberto Luiz Assad Pinheiro e incubada no INATEL, em Santa Rita do Sapucaí (MG).",
  },
  {
    q: "A MOARA precisa de aplicativo?",
    a: "Não. O paciente ou acompanhante conversa com a MOARA pelo WhatsApp. Nos quartos com assistente de voz, basta falar.",
  },
  {
    q: "O que a MOARA não faz?",
    a: "A MOARA não faz diagnóstico, não dá orientação clínica e não substitui a equipe assistencial nem os protocolos e sistemas de chamada de emergência do hospital. Ela organiza e encaminha pedidos para as pessoas certas.",
  },
  {
    q: "Quanto custa a MOARA?",
    a: "Os planos começam em R$ 20 por leito. O valor final depende do número de leitos, dos canais (WhatsApp, voz) e das integrações com sistemas e dispositivos do hospital.",
  },
  {
    q: "A MOARA funciona fora de hospitais?",
    a: "Sim. A mesma tecnologia é usada como concierge virtual em eventos — no HackTown 2026 ela atendeu participantes e equipes com a persona Margarida — e em residências, com a MOARA Home.",
  },
];

export default function MoaraPage() {
  return (
    <PageShell breadcrumbs={[{ name: "MOARA", path: "/moara" }]}>
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Ficha técnica
          </span>
          <h1 className="text-sky-900 text-4xl font-bold leading-tight">
            MOARA: concierge hospitalar digital e assistente virtual beira-leito
          </h1>
          <p className="text-lg text-zinc-700">{MOARA_ONE_LINER}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <CtaButton>Agendar demonstração</CtaButton>
            <a href="/concierge-hospitalar" className="text-sky-700 font-bold underline">
              Como funciona no hospital →
            </a>
          </div>
        </div>
        <Image src="/moara_full.svg" alt="Ilustração da MOARA, assistente virtual beira-leito" width={200} height={380} />
      </section>

      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-sky-900">Resumo da MOARA</h2>
          <dl className="grid grid-cols-1 md:grid-cols-[220px_1fr] border border-sky-100 rounded-xl overflow-hidden bg-white">
            {ficha.map((item) => (
              <div key={item.termo} className="contents">
                <dt className="font-bold text-sky-900 px-4 py-3 md:border-b border-sky-100 bg-sky-50/60">{item.termo}</dt>
                <dd className="text-zinc-700 px-4 py-3 border-b border-sky-100">{item.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-sky-900">O que a MOARA faz</h2>
          <ul className="list-disc pl-5 text-zinc-700 flex flex-col gap-2">
            <li>Recebe pedidos de pacientes e acompanhantes pelo WhatsApp, 24 horas por dia.</li>
            <li>Entende frases do dia a dia, como “acabou o soro”, “quero ir ao banheiro” ou “pode chamar a limpeza?”.</li>
            <li>Responde sozinha dúvidas frequentes: horário das refeições, regras de visita, senha da internet.</li>
            <li>Encaminha cada pedido à equipe responsável, com prioridade e contexto.</li>
            <li>Por voz, permite controlar luz e ar-condicionado em quartos integrados.</li>
            <li>Gera indicadores para a gestão: volume por setor, tempo de resposta e horários de pico.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-sky-900">O que a MOARA não faz</h2>
          <ul className="list-disc pl-5 text-zinc-700 flex flex-col gap-2">
            <li>Não faz diagnóstico nem dá orientação clínica.</li>
            <li>Não substitui a equipe de enfermagem nem o cuidado presencial.</li>
            <li>Não substitui os protocolos e sistemas de chamada de emergência do hospital.</li>
            <li>Não exige que o paciente instale um aplicativo novo.</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-sky-900 py-14">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-6 text-white">
          <h2 className="text-2xl font-bold">Números verificados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold">{PASSOS.chamados}</p>
              <p className="text-sky-100 text-sm">solicitações de pacientes registradas na Santa Casa de Passos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{PASSOS.semPassarPelaEnfermagem}</p>
              <p className="text-sky-100 text-sm">das interações não precisaram ser intermediadas pela enfermagem</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3,5×</p>
              <p className="text-sky-100 text-sm">mais uso por dia na Ala B depois da migração para o WhatsApp</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{HACKTOWN.faq.consultas}</p>
              <p className="text-sky-100 text-sm">consultas atendidas no HackTown 2026, em {HACKTOWN.faq.sessoes} sessões</p>
            </div>
          </div>
          <p className="text-sky-200 text-sm">
            Fonte: relatórios de utilização da Amiko Soluções — Santa Casa de Passos ({PASSOS.periodo}) e HackTown 2026 (
            {HACKTOWN.periodo}).
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-sky-900">Onde a MOARA atua</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/concierge-hospitalar" className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2 hover:border-sky-400">
            <h3 className="font-bold text-sky-900">Hospitais</h3>
            <p className="text-zinc-700 text-sm">
              Concierge hospitalar digital e atendimento beira-leito para hospitais, Santas Casas e clínicas com internação. É o
              foco principal da Amiko.
            </p>
          </a>
          <a href="/concierge-virtual#eventos" className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2 hover:border-sky-400">
            <h3 className="font-bold text-sky-900">Eventos</h3>
            <p className="text-zinc-700 text-sm">
              Concierge virtual para participantes e equipes, com persona própria do evento — como a Margarida no HackTown 2026.
            </p>
          </a>
          <a href="/concierge-virtual#residencias" className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2 hover:border-sky-400">
            <h3 className="font-bold text-sky-900">Residências</h3>
            <p className="text-zinc-700 text-sm">
              MOARA Home: automação residencial controlada por mensagens no WhatsApp.
            </p>
          </a>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Perguntas frequentes sobre a MOARA" />

      <RelatedLinks
        links={[
          { href: "/concierge-hospitalar", label: "Concierge hospitalar digital" },
          { href: "/atendimento-beira-leito", label: "Atendimento beira-leito" },
          { href: "/chamada-de-enfermagem", label: "Chamada de enfermagem: comparativo" },
          { href: "/resultados", label: "Cases e resultados" },
          { href: "/sobre-nos", label: "Sobre a Amiko Soluções" },
        ]}
      />
      <JsonLd data={moaraProductSchema} />
    </PageShell>
  );
}

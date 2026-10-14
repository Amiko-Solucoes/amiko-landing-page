import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { HACKTOWN, ORG_ID, MOARA_ID, PASSOS, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Concierge virtual com IA no WhatsApp: hospitais e eventos",
  description:
    "Concierge virtual é um atendente digital que entende pedidos em linguagem natural e encaminha à equipe certa. Veja como a MOARA atua em hospitais, eventos (HackTown 2026) e residências.",
  path: "/concierge-virtual",
});

const faqs = [
  {
    q: "O que é um concierge virtual?",
    a: "É um atendente digital, normalmente no WhatsApp ou em um totem, que recebe pedidos e dúvidas em linguagem natural, responde o que é informativo e encaminha o que precisa de ação para a equipe responsável. Diferente de um chatbot de FAQ, ele organiza a operação: classifica, prioriza, registra e acompanha cada solicitação.",
  },
  {
    q: "Concierge virtual e chatbot são a mesma coisa?",
    a: "Não. O chatbot responde perguntas. O concierge virtual também abre e encaminha solicitações para as pessoas certas e gera dados sobre a operação — por exemplo, quantos pedidos cada equipe recebeu e quanto tempo levou para atender.",
  },
  {
    q: "Quanto custa um concierge virtual para hospital?",
    a: "A MOARA, concierge virtual da Amiko para hospitais, tem planos a partir de R$ 20 por leito por mês, variando conforme o plano e o número de leitos. Para eventos e outras operações, o valor depende do volume esperado, dos canais e das integrações.",
  },
  {
    q: "O concierge virtual pode ter o nome e a personalidade da minha marca?",
    a: "Sim. No HackTown 2026, a tecnologia MOARA operou com a persona Margarida, com linguagem e informações do festival.",
  },
  {
    q: "Quais canais o concierge virtual da Amiko usa?",
    a: "WhatsApp é o canal principal. A MOARA também opera por voz em quartos de hospital e em totens de atendimento em eventos.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/concierge-virtual#servico`,
  name: "Concierge virtual MOARA",
  serviceType: "Concierge virtual com inteligência artificial",
  description:
    "Concierge virtual com IA que atende pelo WhatsApp, voz ou totem, responde dúvidas e encaminha solicitações às equipes responsáveis em hospitais, eventos e residências.",
  provider: { "@id": ORG_ID },
  isRelatedTo: { "@id": MOARA_ID },
  areaServed: { "@type": "Country", name: "Brasil" },
  url: `${SITE_URL}/concierge-virtual`,
};

export default function ConciergeVirtualPage() {
  return (
    <PageShell breadcrumbs={[{ name: "Concierge virtual", path: "/concierge-virtual" }]}>
      <section className="w-full max-w-[1000px] px-6 py-12 flex flex-col gap-5">
        <h1 className="text-sky-900 text-4xl font-bold leading-tight">
          Concierge virtual com IA: atendimento que entende o pedido e chama a pessoa certa
        </h1>
        <p className="text-lg text-zinc-700 max-w-3xl">
          Um concierge virtual é um atendente digital que fica disponível o tempo todo — normalmente no WhatsApp — para receber
          pedidos e dúvidas em linguagem natural. Ele responde sozinho o que é informativo e encaminha o que precisa de ação para a
          equipe responsável, registrando tudo. A MOARA, da Amiko Soluções, é um concierge virtual criado para hospitais e hoje
          também usado em eventos e residências.
        </p>
        <CtaButton>Conversar sobre o meu caso</CtaButton>
      </section>

      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-sky-900">O que um bom concierge virtual faz</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-700">
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Entende frases livres</strong>, sem obrigar a pessoa a navegar por menus.</li>
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Responde o que é informativo</strong> na hora: horários, locais, regras.</li>
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Encaminha o que exige ação</strong> à equipe certa, com contexto e prioridade.</li>
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Reconhece os próprios limites</strong> e direciona casos sensíveis para pessoas.</li>
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Transforma conversas em dados</strong>: picos, temas, tempos de atendimento.</li>
            <li className="bg-white rounded-xl p-5 border border-sky-100"><strong className="text-sky-900">Funciona onde o público já está</strong>, como o WhatsApp.</li>
          </ul>
        </div>
      </section>

      <section id="hospitais" className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-4 scroll-mt-28">
        <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Hospitais · foco principal</span>
        <h2 className="text-2xl font-bold text-sky-900">Concierge virtual para hospitais</h2>
        <p className="text-zinc-700">
          No hospital, o concierge virtual vira um concierge hospitalar digital e assistente beira-leito: o paciente ou acompanhante
          pede pelo WhatsApp e o pedido vai direto para enfermagem, hotelaria, nutrição, limpeza ou manutenção. Na {PASSOS.hospital},{" "}
          {PASSOS.semPassarPelaEnfermagem} das {PASSOS.chamados} interações registradas deixaram de ser intermediadas pela
          enfermagem.
        </p>
        <div className="flex flex-wrap gap-4 text-sky-700 font-bold">
          <a href="/concierge-hospitalar" className="underline">Concierge hospitalar digital →</a>
          <a href="/atendimento-beira-leito" className="underline">Atendimento beira-leito →</a>
        </div>
      </section>

      <section id="eventos" className="w-full bg-sky-900 py-14 scroll-mt-28">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-6 text-white">
          <span className="text-xs font-bold uppercase tracking-wide text-sky-200">Eventos · case HackTown 2026</span>
          <h2 className="text-2xl font-bold">Concierge virtual para eventos: a Margarida no HackTown</h2>
          <p className="text-sky-100">
            No HackTown 2026, em Santa Rita do Sapucaí (MG), de {HACKTOWN.periodo}, a tecnologia MOARA operou com a persona
            Margarida em duas frentes: orientação aos participantes e concierge operacional para equipes e líderes de espaço.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-bold text-lg">Orientação aos participantes</h3>
              <ul className="text-sky-100 text-sm flex flex-col gap-1">
                <li>{HACKTOWN.faq.consultas} consultas sobre o evento em {HACKTOWN.faq.sessoes} sessões</li>
                <li>{HACKTOWN.faq.programacaoLocalizacaoPct} sobre programação e localização</li>
                <li>{HACKTOWN.faq.respostasComMapa} respostas com link de mapa</li>
                <li>{HACKTOWN.faq.encaminhamentosHumanos} casos orientados para apoio humano</li>
              </ul>
            </div>
            <div className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-bold text-lg">Concierge operacional para o staff</h3>
              <ul className="text-sky-100 text-sm flex flex-col gap-1">
                <li>{HACKTOWN.concierge.sessoes} sessões ativas no WhatsApp</li>
                <li>{HACKTOWN.concierge.solicitacoes} solicitações operacionais, {HACKTOWN.concierge.encerradas} encerradas</li>
                <li>Mediana de {HACKTOWN.concierge.medianaInicio} até o início do atendimento</li>
                <li>{HACKTOWN.concierge.ate30min} começaram a ser atendidas em até 30 minutos</li>
              </ul>
            </div>
          </div>
          <p className="text-sky-100">
            Além do atendimento, as conversas mostraram os horários de maior demanda, os espaços mais procurados e as informações
            que faltavam — dados para planejar a próxima edição.{" "}
            <a href="/blog/concierge-virtual-para-eventos-hacktown" className="underline font-bold">
              Leia o case completo
            </a>
            .
          </p>
        </div>
      </section>

      <section id="residencias" className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-4 scroll-mt-28">
        <span className="text-xs font-bold uppercase tracking-wide text-sky-700">Residências</span>
        <h2 className="text-2xl font-bold text-sky-900">MOARA Home: a casa controlada pelo WhatsApp</h2>
        <p className="text-zinc-700">
          A MOARA Home é a concierge da casa no WhatsApp: o morador acende luzes e pergunta o que ficou ligado mandando uma
          mensagem, de qualquer lugar do mundo, sem abrir mais um aplicativo e sem falar em voz alta.
        </p>
        <a href="/moara-home" className="text-sky-700 font-bold underline w-fit">Conheça a MOARA Home →</a>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/concierge-hospitalar", label: "Concierge hospitalar digital" },
          { href: "/resultados", label: "Cases e resultados" },
          { href: "/blog/o-que-e-concierge-hospitalar-digital", label: "Concierge digital não é só chatbot" },
        ]}
      />
      <JsonLd data={serviceSchema} />
    </PageShell>
  );
}

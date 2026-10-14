import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { ORG_ID, MOARA_ID, PASSOS, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Concierge hospitalar digital com IA: conheça a MOARA",
  description:
    "Concierge hospitalar digital que atende pacientes pelo WhatsApp 24h, entende cada pedido e encaminha à equipe certa. Na Santa Casa de Passos, 71,8% das solicitações não precisaram passar pela enfermagem.",
  path: "/concierge-hospitalar",
});

const faqs = [
  {
    q: "O que é um concierge hospitalar digital?",
    a: "É uma camada de atendimento disponível 24 horas por dia que recebe as solicitações de pacientes e acompanhantes durante a internação, entende a necessidade em linguagem natural e direciona cada demanda para a equipe responsável — sem que o paciente precise descobrir sozinho quem chamar. A MOARA, da Amiko Soluções, é um concierge hospitalar digital que funciona principalmente pelo WhatsApp.",
  },
  {
    q: "Qual a diferença entre concierge hospitalar presencial e digital?",
    a: "O concierge presencial é uma pessoa da hotelaria que circula pelos andares. O concierge digital fica disponível no celular do paciente o tempo todo, atende vários quartos ao mesmo tempo e registra cada pedido como dado. Os dois se complementam: o digital organiza e encaminha, as equipes humanas executam.",
  },
  {
    q: "A MOARA é só um chatbot?",
    a: "Não. Um chatbot responde perguntas com base em roteiros. A MOARA interpreta o pedido, classifica, prioriza, responde sozinha o que é informativo (horário de refeição, visitas, internet) e encaminha o resto para o setor certo — enfermagem, hotelaria, nutrição, limpeza ou manutenção. Cada interação vira dado para a gestão.",
  },
  {
    q: "Funciona pelo WhatsApp?",
    a: "Sim, e esse é o canal principal. No piloto da Santa Casa de Passos, a troca da versão virtual pelo WhatsApp aumentou o uso de 1,5 para 5,2 chamados por dia na Ala B e de 0,9 para 4,3 na Ala Pediátrica, porque o paciente usa um aplicativo que já conhece e não precisa instalar nada.",
  },
  {
    q: "A MOARA também funciona por voz?",
    a: "Sim. Além do WhatsApp, a MOARA pode operar como assistente de quarto por comando de voz, como no Hospital São Lucas (BH), onde o paciente também controla iluminação e ar-condicionado quando o quarto tem essa integração.",
  },
  {
    q: "A MOARA substitui a equipe de enfermagem ou a campainha?",
    a: "Não. A MOARA é uma camada de apoio que absorve o atrito de direcionar pedidos simples, para que a enfermagem tenha mais tempo para o que exige presença humana. Situações de emergência continuam seguindo os protocolos e sistemas de chamada do hospital.",
  },
  {
    q: "Quanto custa um concierge hospitalar digital?",
    a: "Na Amiko, a MOARA tem planos a partir de R$ 20 por leito. O valor final depende do número de leitos, dos canais (WhatsApp, voz) e das integrações desejadas. Fale com a equipe para uma proposta.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/concierge-hospitalar#servico`,
  name: "Concierge hospitalar digital MOARA",
  serviceType: "Concierge hospitalar digital",
  description:
    "Atendimento digital a pacientes internados e acompanhantes, 24 horas, pelo WhatsApp ou por voz, com interpretação por inteligência artificial e encaminhamento automático à equipe responsável.",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "Brasil" },
  audience: { "@type": "Audience", audienceType: "Hospitais, Santas Casas e clínicas com internação" },
  isRelatedTo: { "@id": MOARA_ID },
  url: `${SITE_URL}/concierge-hospitalar`,
};

export default function ConciergeHospitalarPage() {
  return (
    <PageShell breadcrumbs={[{ name: "Concierge hospitalar digital", path: "/concierge-hospitalar" }]}>
      {/* Hero */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="text-sky-900 text-4xl font-bold leading-tight">Concierge hospitalar digital: conheça a MOARA</h1>
          <p className="text-lg text-zinc-700">
            A MOARA é o concierge hospitalar digital da Amiko Soluções: uma assistente virtual beira-leito com inteligência
            artificial que atende pacientes e acompanhantes pelo WhatsApp, entende cada pedido e encaminha direto para a equipe
            responsável — reduzindo interrupções da enfermagem e o tempo de espera de quem está internado.
          </p>
          <CtaButton>Solicitar uma demonstração</CtaButton>
        </div>
        <Image src="/moara_full.svg" alt="MOARA, concierge hospitalar digital da Amiko" width={220} height={420} />
      </section>

      {/* Problema */}
      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-sky-900">O problema que um concierge hospitalar resolve</h2>
          <p className="text-zinc-700">
            Durante a internação surgem dezenas de necessidades diferentes: um cobertor, a limpeza do quarto, um problema no
            ar-condicionado, uma dúvida sobre o horário de visita. Como o paciente não sabe quem resolve cada pedido, ele aperta a
            campainha ou chama quem estiver por perto — quase sempre a enfermagem.
          </p>
          <p className="text-zinc-700">
            O resultado é interrupção constante da equipe assistencial, mais tempo de resposta, nenhum registro do que foi pedido
            e uma experiência pior para o paciente. Um concierge hospitalar digital funciona como porta de entrada única para essas
            solicitações e faz a triagem antes que elas cheguem à pessoa errada.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="w-full max-w-[1100px] px-6 py-14 flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-sky-900 text-center">Como a MOARA funciona</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
            <span className="font-bold text-sky-900">1. O pedido</span>
            <p className="text-zinc-700 text-sm">
              Paciente ou acompanhante escreve o que precisa pelo WhatsApp (ou fala, nos quartos com assistente de voz), a
              qualquer hora: “acabou o soro”, “pode chamar a limpeza?”, “qual o horário do almoço?”.
            </p>
          </li>
          <li className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
            <span className="font-bold text-sky-900">2. A interpretação</span>
            <p className="text-zinc-700 text-sm">
              A inteligência artificial entende a necessidade, classifica por setor e prioridade e responde na hora o que é apenas
              informativo.
            </p>
          </li>
          <li className="flex flex-col gap-2 border border-zinc-200 rounded-xl p-5">
            <span className="font-bold text-sky-900">3. O encaminhamento</span>
            <p className="text-zinc-700 text-sm">
              O restante chega direto à equipe responsável (enfermagem, hotelaria, nutrição, limpeza, manutenção) já com o
              contexto do pedido. A gestão acompanha tudo em um painel.
            </p>
          </li>
        </ol>
      </section>

      {/* Benefícios */}
      <section className="w-full bg-sky-900 py-14">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-bold text-xl mb-2">Para o paciente</h3>
            <p className="text-sky-100 text-sm">Pede ajuda a qualquer hora, pelo celular, sem precisar saber quem chamar.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Para as equipes</h3>
            <p className="text-sky-100 text-sm">
              Menos interrupções por pedidos que não são da sua área e chegada ao quarto já sabendo o que o paciente precisa.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Para a gestão</h3>
            <p className="text-sky-100 text-sm">
              Dados reais sobre volume de chamados por setor, tempo de resposta e horários de pico.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-sky-900">Resultados em ambiente hospitalar real</h2>
        <p className="text-zinc-700">
          Na {PASSOS.hospital}, de {PASSOS.periodo}, a MOARA registrou {PASSOS.chamados} solicitações: {PASSOS.enfermagem} para
          enfermagem, {PASSOS.hotelaria} para hotelaria, {PASSOS.assistencial} para apoio assistencial e {PASSOS.sistema}{" "}
          resolvidas pela própria MOARA. Somando as {PASSOS.resolvidosAutomaticamente} respostas automáticas e os{" "}
          {PASSOS.direcionadosEquipesComplementares} pedidos enviados direto a outras equipes, {PASSOS.semPassarPelaEnfermagem}{" "}
          das interações deixaram de ser intermediadas pela enfermagem.
        </p>
        <p className="text-zinc-700">
          No Hospital São Lucas (BH), a MOARA foi adotada como assistente de quarto por voz, permitindo ao paciente pedir itens de
          conforto e controlar iluminação e ar-condicionado.
        </p>
        <p className="text-sm text-zinc-500">
          Resultados observados nesses projetos específicos. Cada hospital tem fluxos e volumes diferentes.
        </p>
        <a href="/resultados" className="text-sky-700 font-bold hover:underline w-fit">
          Leia os cases completos →
        </a>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/atendimento-beira-leito", label: "Atendimento beira-leito com IA" },
          { href: "/chamada-de-enfermagem", label: "Campainha × aplicativo × assistente virtual" },
          { href: "/experiencia-do-paciente", label: "Experiência do paciente em hospitais" },
          { href: "/blog/o-que-e-concierge-hospitalar-digital", label: "O que é concierge hospitalar digital?" },
          { href: "/blog/como-escolher-concierge-hospitalar-digital", label: "Como escolher um concierge hospitalar digital" },
        ]}
      />
      <JsonLd data={serviceSchema} />
    </PageShell>
  );
}

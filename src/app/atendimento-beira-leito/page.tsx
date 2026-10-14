import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd } from "@/components/JsonLd";
import { ORG_ID, PASSOS, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Atendimento beira-leito com IA para pacientes internados",
  description:
    "O que é atendimento beira-leito, por que a campainha não basta e como um assistente virtual pelo WhatsApp ajuda o paciente a pedir ajuda do leito. Com dados reais de 522 solicitações em hospital brasileiro.",
  path: "/atendimento-beira-leito",
});

const frases = [
  { grupo: "Enfermagem", exemplos: ["“Acabou o soro.”", "“Estou com dor.”", "“Quero ir ao banheiro.”"] },
  { grupo: "Hotelaria, nutrição e limpeza", exemplos: ["“Solicitar uma coberta.”", "“Pode chamar a limpeza?”", "“Quero pedir um lanche.”"] },
  { grupo: "Respondidas pela própria assistente", exemplos: ["“Qual horário do almoço?”", "“Como entro na internet?”", "“Que horas posso receber visita?”"] },
  { grupo: "Acolhimento", exemplos: ["“Estou triste.”", "“Quero conversar com alguém.”", "“Queria ligar para minha mãe.”"] },
];

const faqs = [
  {
    q: "O que é atendimento beira-leito?",
    a: "É todo atendimento prestado ao paciente no próprio leito durante a internação: cuidados de enfermagem, entrega de refeições, troca de enxoval, limpeza, conforto e resposta às dúvidas do paciente e do acompanhante. A tecnologia beira-leito facilita como o paciente pede essa ajuda e como ela chega à equipe certa.",
  },
  {
    q: "O que é um assistente virtual beira-leito?",
    a: "É um sistema que o paciente usa do próprio leito — pelo celular ou por voz — para pedir ajuda em linguagem natural. Diferente da campainha, ele entende qual é o pedido, responde dúvidas simples e encaminha o restante para o setor responsável. A MOARA, da Amiko Soluções, é um assistente virtual beira-leito que funciona pelo WhatsApp.",
  },
  {
    q: "Qual a diferença entre assistente virtual beira-leito e campainha de enfermagem?",
    a: "A campainha avisa que o paciente precisa de algo, mas não diz o quê nem para quem. Por isso um profissional precisa ir até o quarto, descobrir o pedido e, muitas vezes, repassá-lo a outro setor. O assistente virtual já recebe o pedido descrito e o envia diretamente à equipe certa.",
  },
  {
    q: "Pacientes idosos conseguem usar um assistente pelo WhatsApp?",
    a: "Na experiência da Amiko, o WhatsApp reduz a barreira porque é um aplicativo que a maioria das famílias já usa — e o acompanhante pode fazer o pedido pelo paciente. Para quem não usa celular, a MOARA também pode funcionar por comando de voz no quarto.",
  },
  {
    q: "Quanto tempo leva para implantar?",
    a: "Depende do tamanho do hospital, dos setores envolvidos e das integrações. A implantação envolve mapear quem atende cada tipo de pedido, configurar as respostas da instituição e treinar as equipes. Fale com a Amiko para um cronograma do seu caso.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Atendimento beira-leito com IA para pacientes internados",
  about: ["Atendimento beira-leito", "Assistente virtual beira-leito", "Experiência do paciente"],
  author: { "@type": "Person", name: "Roberto Luiz Assad Pinheiro", url: `${SITE_URL}/sobre-nos` },
  publisher: { "@id": ORG_ID },
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  mainEntityOfPage: `${SITE_URL}/atendimento-beira-leito`,
  inLanguage: "pt-BR",
};

export default function AtendimentoBeiraLeitoPage() {
  return (
    <PageShell breadcrumbs={[{ name: "Atendimento beira-leito", path: "/atendimento-beira-leito" }]}>
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-5 max-w-2xl">
          <h1 className="text-sky-900 text-4xl font-bold leading-tight">
            Atendimento beira-leito com IA: o paciente pede ajuda do leito, a equipe certa responde
          </h1>
          <p className="text-lg text-zinc-700">
            Atendimento beira-leito é tudo o que o paciente precisa durante a internação, sem sair da cama: cuidado de enfermagem,
            refeição, cobertor, limpeza, informação. A pergunta é como esse pedido chega a quem resolve. Com um assistente virtual
            beira-leito como a MOARA, o paciente escreve pelo WhatsApp e o pedido vai direto para o setor responsável.
          </p>
          <CtaButton>Ver uma demonstração</CtaButton>
        </div>
        <Image src="/moara_half.svg" alt="Assistente virtual beira-leito MOARA" width={200} height={280} />
      </section>

      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-sky-900">Por que a campainha sozinha não basta</h2>
          <p className="text-zinc-700">
            A campainha de enfermagem foi feita para uma pergunta: “o paciente precisa de alguém?”. Ela não diz o que ele precisa.
            Por isso, a cada toque, um profissional vai até o quarto, descobre o pedido e, se não for da enfermagem, sai para avisar
            outro setor. Um copo de água pode exigir duas idas ao quarto e duas equipes.
          </p>
          <p className="text-zinc-700">
            Em horários de pico, isso gera fila, interrupções no cuidado assistencial e um paciente que não sabe se foi ouvido. E,
            como nada fica registrado, a gestão não consegue medir quanto tempo cada pedido levou.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-sky-900">O que muda com um assistente virtual beira-leito</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">O pedido chega descrito</h3>
            <p className="text-zinc-700 text-sm">A equipe já sabe o que levar antes de entrar no quarto.</p>
          </div>
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">Cada setor recebe o que é seu</h3>
            <p className="text-zinc-700 text-sm">Hotelaria, nutrição e limpeza recebem direto, sem passar pela enfermagem.</p>
          </div>
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <h3 className="font-bold text-sky-900">Dúvidas se resolvem na hora</h3>
            <p className="text-zinc-700 text-sm">Horário de visita, refeição e internet são respondidos automaticamente.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-sky-900 py-14">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-6 text-white">
          <h2 className="text-2xl font-bold">O que os pacientes pedem do leito</h2>
          <p className="text-sky-100">
            Frases reais registradas pela MOARA na {PASSOS.hospital}, entre {PASSOS.periodo} ({PASSOS.chamados} solicitações). Os
            picos de pedidos aconteceram das {PASSOS.picos}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {frases.map((f) => (
              <div key={f.grupo} className="bg-sky-800 rounded-xl p-5 flex flex-col gap-2">
                <h3 className="font-bold">{f.grupo}</h3>
                <ul className="text-sky-100 text-sm flex flex-col gap-1">
                  {f.exemplos.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sky-100">
            Resultado: {PASSOS.resolvidosAutomaticamente} pedidos foram resolvidos pela própria assistente e{" "}
            {PASSOS.direcionadosEquipesComplementares} foram direto para outras equipes — {PASSOS.semPassarPelaEnfermagem} das
            interações deixaram de depender da enfermagem.{" "}
            <a href="/blog/o-que-pacientes-pedem-no-leito" className="underline font-bold">
              Leia a análise completa
            </a>
            .
          </p>
        </div>
      </section>

      <section className="w-full max-w-[900px] px-6 py-14 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-sky-900">Pelo WhatsApp ou por voz</h2>
        <p className="text-zinc-700">
          A MOARA funciona principalmente pelo WhatsApp: o paciente ou o acompanhante não instala nada e conversa como faria com
          qualquer contato. Em Passos, a troca da versão virtual pelo WhatsApp fez o uso subir de {PASSOS.alaB.antes} para{" "}
          {PASSOS.alaB.depois} chamados por dia na Ala B e de {PASSOS.pediatria.antes} para {PASSOS.pediatria.depois} na Ala
          Pediátrica.
        </p>
        <p className="text-zinc-700">
          Para pacientes com mobilidade reduzida ou que não usam celular, a MOARA também pode ser um assistente de quarto por voz,
          como no Hospital São Lucas (BH), onde o paciente controla iluminação e ar-condicionado falando.
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/chamada-de-enfermagem", label: "Campainha × aplicativo × assistente virtual" },
          { href: "/concierge-hospitalar", label: "Concierge hospitalar digital" },
          { href: "/blog/whatsapp-para-pacientes-internados", label: "WhatsApp para pacientes internados" },
          { href: "/blog/assistente-virtual-hospitalar", label: "Assistente virtual hospitalar: o que é" },
        ]}
      />
      <JsonLd data={articleSchema} />
    </PageShell>
  );
}

import { PageShell } from "@/components/PageShell";
import { FaqSection } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, MOARA_ID, ORG_ID, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "MOARA Home: controle as luzes da casa pelo WhatsApp",
  description:
    "MOARA Home é a concierge da sua casa no WhatsApp: acenda luzes e pergunte o que ficou ligado de qualquer lugar do mundo, sem abrir mais um aplicativo e sem falar em voz alta.",
  path: "/moara-home",
});

const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Olá! Quero conhecer a MOARA Home, a concierge da casa pelo WhatsApp.",
)}`;

const conversas = [
  { voce: "Ficou alguma luz acesa?", moara: "Sim: a da cozinha e a da varanda. Quer que eu apague?" },
  { voce: "Acende a luz da sala", moara: "Pronto, a luz da sala está acesa." },
  { voce: "Apaga tudo, já saí de casa", moara: "Feito. Todas as luzes estão apagadas." },
];

const faqs = [
  {
    q: "O que é a MOARA Home?",
    a: "É a concierge da sua casa no WhatsApp. Você manda uma mensagem e a MOARA acende ou apaga luzes e informa o estado da casa, de qualquer lugar do mundo. É a mesma tecnologia de inteligência artificial que a Amiko Soluções usa como concierge hospitalar.",
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não. Tudo acontece no WhatsApp que você já usa. Não há mais um aplicativo para abrir, atualizar ou lembrar a senha.",
  },
  {
    q: "Preciso falar em voz alta com uma assistente?",
    a: "Não. Os pedidos são feitos por mensagem, então funcionam de madrugada, com criança dormindo, numa reunião ou em qualquer lugar onde falar com um alto-falante seria estranho.",
  },
  {
    q: "Funciona quando estou fora de casa?",
    a: "Sim. De qualquer lugar com internet você pode perguntar se ficou alguma luz acesa e acender ou apagar a que quiser.",
  },
  {
    q: "O que dá para controlar?",
    a: "O ponto de partida é a iluminação: acender, apagar e saber o estado de cada luz. Outros dispositivos da casa podem ser avaliados caso a caso com a equipe da Amiko.",
  },
  {
    q: "Quanto custa a MOARA Home?",
    a: "O valor depende da casa e do que será controlado. Fale com a Amiko pelo WhatsApp para uma proposta.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/moara-home#servico`,
  name: "MOARA Home",
  serviceType: "Automação residencial pelo WhatsApp",
  description:
    "Concierge da casa no WhatsApp: controle de iluminação e consulta do estado da casa por mensagem, de qualquer lugar, sem aplicativo extra e sem comando de voz.",
  provider: { "@id": ORG_ID },
  isRelatedTo: { "@id": MOARA_ID },
  areaServed: { "@type": "Country", name: "Brasil" },
  url: `${SITE_URL}/moara-home`,
};

export default function MoaraHomePage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Concierge virtual", path: "/concierge-virtual" },
        { name: "MOARA Home", path: "/moara-home" },
      ]}
    >
      <section className="w-full max-w-[1100px] px-6 py-12 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="flex flex-col gap-5">
          <span className="w-fit text-xs font-bold uppercase tracking-wide text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            MOARA Home
          </span>
          <h1 className="text-sky-900 text-4xl font-bold leading-tight">A concierge da sua casa, a um WhatsApp de distância</h1>
          <p className="text-lg text-zinc-700">
            Acenda uma luz, confira se ficou alguma ligada ou pergunte como está a casa mandando uma mensagem. Sem abrir mais um
            aplicativo, sem falar em voz alta, de qualquer lugar do mundo.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener"
            className="inline-block w-fit px-6 py-3 rounded-lg font-bold transition bg-green-600 text-white hover:bg-green-700"
          >
            Quero a MOARA Home
          </a>
        </div>

        <div className="bg-[#EFEAE2] rounded-2xl p-5 flex flex-col gap-3 shadow-sm" aria-label="Exemplo de conversa com a MOARA Home">
          <p className="text-xs text-zinc-500 text-center">Exemplo de conversa</p>
          {conversas.map((c) => (
            <div key={c.voce} className="flex flex-col gap-2">
              <p className="self-end max-w-[80%] bg-[#D9FDD3] text-zinc-800 text-sm rounded-xl rounded-tr-sm px-3 py-2">{c.voce}</p>
              <p className="self-start max-w-[80%] bg-white text-zinc-800 text-sm rounded-xl rounded-tl-sm px-3 py-2">
                <strong className="text-sky-900">MOARA:</strong> {c.moara}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-sky-50 py-14">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-sky-900">Por que pelo WhatsApp</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-sky-100 rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-bold text-sky-900">Sem mais um aplicativo</h3>
              <p className="text-zinc-700 text-sm">
                Nada de procurar o app certo, fazer login ou esperar atualização. A casa responde no mesmo lugar onde você já
                conversa com todo mundo.
              </p>
            </div>
            <div className="bg-white border border-sky-100 rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-bold text-sky-900">Sem falar em voz alta</h3>
              <p className="text-zinc-700 text-sm">
                Por mensagem, o pedido é discreto: de madrugada, com o bebê dormindo, numa reunião ou no meio da rua.
              </p>
            </div>
            <div className="bg-white border border-sky-100 rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-bold text-sky-900">De qualquer lugar do mundo</h3>
              <p className="text-zinc-700 text-sm">
                Saiu de casa com dúvida se apagou a luz? Viajou e quer acender a varanda à noite? É só mandar uma mensagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-6 py-14 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-sky-900">Como começar</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <span className="font-bold text-sky-900">1. Conversa inicial</span>
            <p className="text-zinc-700 text-sm">Você conta como é a casa e quais luzes quer controlar.</p>
          </li>
          <li className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <span className="font-bold text-sky-900">2. Conexão</span>
            <p className="text-zinc-700 text-sm">A Amiko conecta a MOARA à automação da sua casa.</p>
          </li>
          <li className="border border-zinc-200 rounded-xl p-5 flex flex-col gap-2">
            <span className="font-bold text-sky-900">3. É só mandar mensagem</span>
            <p className="text-zinc-700 text-sm">Você salva o contato da MOARA no WhatsApp e passa a conversar com a sua casa.</p>
          </li>
        </ol>
      </section>

      <section className="w-full bg-sky-900 py-14">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-4 text-white">
          <h2 className="text-2xl font-bold">A mesma tecnologia que atende hospitais</h2>
          <p className="text-sky-100">
            A MOARA nasceu como concierge hospitalar: na Santa Casa de Passos, ela recebe pedidos de pacientes pelo WhatsApp e
            encaminha cada um à equipe certa. No HackTown 2026, atendeu participantes e equipes do festival. A MOARA Home leva essa
            mesma inteligência para dentro da sua casa.
          </p>
          <a href="/moara" className="text-white font-bold underline w-fit">Conheça a MOARA →</a>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Perguntas frequentes sobre a MOARA Home" />

      <section className="w-full max-w-[900px] px-6 pb-14 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-sky-900">Sua casa a uma mensagem de distância</h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener"
          className="inline-block w-fit px-6 py-3 rounded-lg font-bold transition bg-green-600 text-white hover:bg-green-700"
        >
          Falar com a Amiko pelo WhatsApp
        </a>
      </section>

      <RelatedLinks
        links={[
          { href: "/moara", label: "Ficha técnica da MOARA" },
          { href: "/concierge-virtual", label: "Concierge virtual para hospitais, eventos e residências" },
        ]}
      />
      <JsonLd data={serviceSchema} />
    </PageShell>
  );
}

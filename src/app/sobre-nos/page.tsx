import { WhatsAppButton } from "@/components/whatsappButton";
import AboutUs from "@/sections/aboutUs";
import Header from "@/sections/header";
import Footer from "@/sections/footer";
import { AMIKO_ONE_LINER, ORG_ID, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sobre a Amiko Soluções, healthtech criadora da MOARA",
  description: "Conheça a Amiko Soluções: healthtech nascida na incubadora do INATEL, em Santa Rita do Sapucaí (MG), criadora da MOARA, concierge hospitalar digital com inteligência artificial.",
  path: "/sobre-nos",
});

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="fixed z-[100] w-full">
          <Header />
        </div>
        <div className="pt-24 w-full">
        <h1 className="sr-only">Sobre a Amiko Soluções</h1>
        <AboutUs />

        <section className="w-full max-w-[900px] mx-auto px-6 pt-14 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-sky-900">A Amiko em uma frase</h2>
          <p className="text-zinc-700">{AMIKO_ONE_LINER}</p>
          <p className="text-zinc-700">
            Além dos hospitais, a tecnologia da MOARA também é usada como{" "}
            <a href="/concierge-virtual" className="text-sky-700 underline">concierge virtual em eventos</a>, como no HackTown
            2026, e em automação residencial, com a MOARA Home. Conheça a{" "}
            <a href="/moara" className="text-sky-700 underline">ficha técnica da MOARA</a> e os{" "}
            <a href="/resultados" className="text-sky-700 underline">cases</a>.
          </p>
        </section>

        <section className="w-full max-w-[900px] mx-auto px-6 py-14 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-sky-900">Sobre o fundador</h2>
          <p className="text-zinc-700">
            A Amiko foi fundada por <strong>Roberto Luiz Assad Pinheiro</strong>, engenheiro de Controle e Automação formado pelo INATEL (Instituto Nacional de Telecomunicações). Durante a graduação, atuou por aproximadamente cinco anos como pesquisador científico na área de tecnologia assistiva, além de ter experiência em infraestrutura, tecnologia da informação e desenvolvimento de produtos.
          </p>
          <p className="text-zinc-700">
            A inspiração para a Amiko surgiu de uma vivência pessoal: durante uma internação hospitalar, Roberto percebeu falhas nos processos de comunicação entre pacientes e equipes — o que hoje é o problema central que a MOARA resolve. Nos últimos anos, atua diretamente com hospitais brasileiros no desenvolvimento de tecnologia aplicada à saúde.
          </p>
          <p className="text-zinc-700">
            A equipe da Amiko possui certificações <strong>ITIL V3 Foundation</strong>, <strong>ITIL OSA (Operational Support and Analysis)</strong>, <strong>ISO 20000</strong> e <strong>Oracle Certified Associate, Java SE 7</strong>, que sustentam a qualidade da gestão de serviços e do desenvolvimento de software da empresa.
          </p>
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
            "@type": "Person",
            name: "Roberto Luiz Assad Pinheiro",
            jobTitle: "Fundador e CEO",
            "@id": `${SITE_URL}/sobre-nos#roberto`,
            url: `${SITE_URL}/sobre-nos`,
            worksFor: { "@id": ORG_ID },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "INATEL - Instituto Nacional de Telecomunicações",
            },
            description:
              "Engenheiro de Controle e Automação formado pelo INATEL, com cerca de cinco anos de pesquisa científica em tecnologia assistiva. Fundador da Amiko Soluções, healthtech brasileira de Santa Rita do Sapucaí (MG).",
          }),
        }}
      />
    </div>
  );
}

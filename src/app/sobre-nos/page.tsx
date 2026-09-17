import { WhatsAppButton } from "@/components/whatsappButton";
import AboutUs from "@/pages/aboutUs";
import Header from "@/pages/header";
import Footer from "@/pages/footer";

export const metadata = {
  title: "Sobre a Amiko Soluções | Healthtech de Santa Rita do Sapucaí",
  description: "Conheça a Amiko Soluções: healthtech nascida no INATEL que desenvolve tecnologia aplicada para melhorar a experiência do paciente e a eficiência de hospitais brasileiros.",
  alternates: {
    canonical: "/sobre-nos",
  },
};

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
            worksFor: {
              "@type": "Organization",
              name: "Amiko Soluções",
              url: "https://www.amikosolucoes.com.br",
            },
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

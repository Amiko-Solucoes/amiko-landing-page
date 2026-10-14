import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/LGPD", destination: "/privacy"},
      { source: "/lgpd", destination: "/privacy"},
      { source: "/privacidade", destination: "/privacy"},
      { source: "/termos", destination: "/terms"},
      { source: "/gerencial", destination: "/management-report"},
      { source: "/gerencial-scmp", destination: "/management-report-scmp"},
    ];
  },
  async redirects() {
    const permanent = true;
    return [
      // Cluster "Serviços" -> página canônica de soluções
      { source: "/service", destination: "/solucoes-hospitalares", permanent },
      { source: "/tecnologia-em-saude", destination: "/solucoes-hospitalares", permanent },
      { source: "/industria-brasileira-hospitalar", destination: "/solucoes-hospitalares", permanent },

      // Cluster "Concierge/Moara"
      { source: "/concierge-virtual-hospitalar", destination: "/concierge-hospitalar", permanent },
      { source: "/moara-assistente", destination: "/moara", permanent },
      { source: "/moara-digital", destination: "/moara", permanent },
      { source: "/moara-concierge", destination: "/moara", permanent },
      { source: "/assistente-virtual", destination: "/moara", permanent },
      { source: "/assistente-hospitalar", destination: "/moara", permanent },
      { source: "/alexa-para-hospitais", destination: "/moara", permanent },

      // Cluster "Atendimento beira-leito / chamada de enfermagem"
      { source: "/assistente-beira-leito", destination: "/atendimento-beira-leito", permanent },
      { source: "/assistente-virtual-beira-leito", destination: "/atendimento-beira-leito", permanent },
      { source: "/beira-leito", destination: "/atendimento-beira-leito", permanent },
      { source: "/chamadas-de-enfermagem", destination: "/chamada-de-enfermagem", permanent },
      { source: "/campainha-de-enfermagem", destination: "/chamada-de-enfermagem", permanent },
      { source: "/campainha-hospitalar", destination: "/chamada-de-enfermagem", permanent },

      // Cluster "Experiência do Paciente" -> pilar de experiência do paciente
      { source: "/atendimento-ao-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/qualidade-no-atendimento-ao-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/seguranca-do-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/medicina-humanizada", destination: "/experiencia-do-paciente", permanent },

      // Cluster "Automação/Eficiência Operacional" -> pilar de automação hospitalar
      { source: "/gestao-hospitalar", destination: "/automacao-hospitalar", permanent },
      { source: "/eficiencia-enfermagem", destination: "/automacao-hospitalar", permanent },
      { source: "/comunicacao-hospitalar", destination: "/automacao-hospitalar", permanent },
      { source: "/hospitais-digitais", destination: "/automacao-hospitalar", permanent },
      { source: "/apoio-certificacao-ona", destination: "/automacao-hospitalar", permanent },
      { source: "/monitoramento-em-tempo-real", destination: "/automacao-hospitalar", permanent },

      // Sitemap antigo tinha URLs erradas/inexistentes que apontavam para estas páginas
      { source: "/about-us", destination: "/sobre-nos", permanent },
      { source: "/contact-page", destination: "/contato", permanent },
      { source: "/partners-testimonials", destination: "/parceiros-e-depoimentos", permanent },
      { source: "/monitoramente-em-tempo-real", destination: "/automacao-hospitalar", permanent },

      // Componentes que antes ficavam em src/pages e viravam rotas soltas
      { source: "/aboutUs", destination: "/sobre-nos", permanent },
      { source: "/contact", destination: "/contato", permanent },
      { source: "/services", destination: "/solucoes-hospitalares", permanent },
      { source: "/partners", destination: "/parceiros-e-depoimentos", permanent },
      { source: "/feedbacks", destination: "/parceiros-e-depoimentos", permanent },
      { source: "/hero", destination: "/", permanent },
      { source: "/header", destination: "/", permanent },
      { source: "/footer", destination: "/", permanent },
    ];
  },
}

export default nextConfig;
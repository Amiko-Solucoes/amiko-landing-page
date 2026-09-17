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

      // Cluster "Concierge/Moara" -> pilar de produto
      { source: "/concierge-virtual", destination: "/concierge-hospitalar", permanent },
      { source: "/concierge-virtual-hospitalar", destination: "/concierge-hospitalar", permanent },
      { source: "/moara-assistente", destination: "/concierge-hospitalar", permanent },
      { source: "/moara-digital", destination: "/concierge-hospitalar", permanent },
      { source: "/moara-concierge", destination: "/concierge-hospitalar", permanent },
      { source: "/assistente-virtual", destination: "/concierge-hospitalar", permanent },
      { source: "/assistente-beira-leito", destination: "/concierge-hospitalar", permanent },
      { source: "/assistente-hospitalar", destination: "/concierge-hospitalar", permanent },
      { source: "/alexa-para-hospitais", destination: "/concierge-hospitalar", permanent },

      // Cluster "Experiência do Paciente" -> pilar de experiência do paciente
      { source: "/atendimento-ao-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/qualidade-no-atendimento-ao-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/seguranca-do-paciente", destination: "/experiencia-do-paciente", permanent },
      { source: "/medicina-humanizada", destination: "/experiencia-do-paciente", permanent },

      // Cluster "Automação/Eficiência Operacional" -> pilar de automação hospitalar
      { source: "/gestao-hospitalar", destination: "/automacao-hospitalar", permanent },
      { source: "/eficiencia-enfermagem", destination: "/automacao-hospitalar", permanent },
      { source: "/chamadas-de-enfermagem", destination: "/automacao-hospitalar", permanent },
      { source: "/comunicacao-hospitalar", destination: "/automacao-hospitalar", permanent },
      { source: "/hospitais-digitais", destination: "/automacao-hospitalar", permanent },
      { source: "/apoio-certificacao-ona", destination: "/automacao-hospitalar", permanent },
      { source: "/monitoramento-em-tempo-real", destination: "/automacao-hospitalar", permanent },

      // Sitemap antigo tinha URLs erradas/inexistentes que apontavam para estas páginas
      { source: "/about-us", destination: "/sobre-nos", permanent },
      { source: "/contact-page", destination: "/contato", permanent },
      { source: "/partners-testimonials", destination: "/parceiros-e-depoimentos", permanent },
      { source: "/monitoramente-em-tempo-real", destination: "/automacao-hospitalar", permanent },
    ];
  },
}

export default nextConfig;
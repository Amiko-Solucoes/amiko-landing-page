import type { Metadata } from "next";

/**
 * Fonte única de verdade sobre a Amiko e a MOARA.
 * Tudo o que aparece em textos, dados estruturados (schema.org) e no llms.txt
 * deve sair daqui, para que Google e IAs encontrem sempre os mesmos fatos.
 */

export const SITE_URL = "https://www.amikosolucoes.com.br";
export const SITE_NAME = "Amiko Soluções";

export const CONTACT = {
  email: "contato@amikosolucoes.com",
  phoneDisplay: "+55 (35) 9 9996-8808",
  phoneE164: "+55-35-99996-8808",
  whatsapp: "5535999968808",
};

/** Frase canônica. Use a mesma descrição no site, LinkedIn, Google Perfil e imprensa. */
export const MOARA_ONE_LINER =
  "A MOARA é o concierge hospitalar digital da Amiko Soluções: uma assistente virtual beira-leito com inteligência artificial que atende pacientes e acompanhantes pelo WhatsApp, entende cada pedido, responde o que é informativo e encaminha o restante direto à equipe certa — enfermagem, hotelaria, nutrição ou manutenção.";

export const AMIKO_ONE_LINER =
  "A Amiko Soluções é uma healthtech brasileira, incubada no INATEL em Santa Rita do Sapucaí (MG), criadora da MOARA, concierge hospitalar digital e assistente virtual beira-leito com inteligência artificial.";

/** Números oficiais do piloto na Santa Casa de Misericórdia de Passos (relatório de utilização, ago/2024 a abr/2025). */
export const PASSOS = {
  hospital: "Santa Casa de Misericórdia de Passos (MG)",
  periodo: "agosto de 2024 a abril de 2025",
  chamados: 522,
  enfermagem: "28,1%",
  hotelaria: "23,9%",
  sistema: "30,1%",
  assistencial: "17,8%",
  resolvidosAutomaticamente: 157,
  direcionadosEquipesComplementares: 218,
  semPassarPelaEnfermagem: "71,8%",
  respostaMediaEnfermagem: "12 minutos",
  picos: "9h–11h e 18h–20h",
  colaboradoresEnvolvidos: "mais de 20",
  alaB: { antes: "1,5", depois: "5,2" },
  pediatria: { antes: "0,9", depois: "4,3" },
};

/** Números do HackTown 2026 (relatórios da Margarida, 3 a 7 de setembro de 2026). */
export const HACKTOWN = {
  periodo: "3 a 7 de setembro de 2026",
  faq: {
    consultas: 661,
    sessoes: 416,
    programacaoLocalizacao: 486,
    programacaoLocalizacaoPct: "73,5%",
    respostasComMapa: 219,
    encaminhamentosHumanos: 110,
  },
  concierge: {
    sessoes: "mais de 340",
    solicitacoes: 79,
    encerradas: "100%",
    medianaInicio: "7,9 minutos",
    medianaEncerramento: "22,2 minutos",
    ate30min: "83,5%",
  },
};

export const SOCIAL = [
  "https://www.instagram.com/amikosolucoes/",
  "https://www.facebook.com/amikosolucoes/",
  "https://www.linkedin.com/company/amikosolucoes",
];

export const ORG_ID = `${SITE_URL}/#organization`;
export const MOARA_ID = `${SITE_URL}/moara#produto`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "Amiko Soluções em Tecnologia",
  alternateName: ["Amiko", "Amiko Soluções em Tecnologia"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo-amiko.png`,
  description: AMIKO_ONE_LINER,
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  foundingLocation: "Santa Rita do Sapucaí, MG, Brasil",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. João de Camargo, 510, Incubadora de Empresas do INATEL, Sala 9",
    addressLocality: "Santa Rita do Sapucaí",
    addressRegion: "MG",
    postalCode: "37536-001",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  founder: {
    "@type": "Person",
    name: "Roberto Luiz Assad Pinheiro",
    jobTitle: "Fundador e CEO",
  },
  knowsAbout: [
    "Concierge hospitalar digital",
    "Concierge virtual",
    "Atendimento beira-leito",
    "Assistente virtual hospitalar",
    "Chamada de enfermagem",
    "Experiência do paciente",
    "Hotelaria hospitalar",
    "Automação hospitalar",
    "Inteligência artificial na saúde",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    availableLanguage: ["Portuguese", "English"],
    areaServed: "BR",
  },
  sameAs: SOCIAL,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
};

export const moaraProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": MOARA_ID,
  name: "MOARA",
  alternateName: [
    "MOARA concierge hospitalar",
    "MOARA assistente virtual beira-leito",
    "MOARA Amiko",
  ],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Concierge hospitalar digital / assistente virtual beira-leito",
  operatingSystem: "WhatsApp, dispositivo de voz no quarto",
  description: MOARA_ONE_LINER,
  url: `${SITE_URL}/moara`,
  image: `${SITE_URL}/opengraph-image`,
  inLanguage: "pt-BR",
  publisher: { "@id": ORG_ID },
  creator: { "@id": ORG_ID },
  featureList: [
    "Atendimento a pacientes e acompanhantes pelo WhatsApp, 24 horas por dia",
    "Comando de voz no quarto, com controle de iluminação e ar-condicionado quando integrado",
    "Interpretação de pedidos em linguagem natural com inteligência artificial",
    "Resposta automática a dúvidas informativas (refeições, visitas, internet)",
    "Encaminhamento automático para enfermagem, hotelaria, nutrição, limpeza e manutenção",
    "Painel de gestão com volume, tempo de resposta e horários de pico",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "20.00",
    offerCount: 1,
    description: "A partir de R$ 20 por leito por mês. O valor varia conforme o plano, o número de leitos e as integrações.",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "20.00",
      priceCurrency: "BRL",
      unitText: "leito por mês",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    seller: { "@id": ORG_ID },
  },
};

/** Imagem de compartilhamento gerada em src/app/opengraph-image.tsx. */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "MOARA, concierge hospitalar digital da Amiko Soluções",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

/** Metadados completos (title, description, canonical, Open Graph, Twitter) para uma página. */
export function pageMetadata({ title, description, path, type = "website", noindex }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: SITE_NAME,
      locale: "pt_BR",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

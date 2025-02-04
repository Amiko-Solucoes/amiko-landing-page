import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Amiko Soluções - Tecnologia Hospitalar Inteligente | SAHRA Assistente Hospitalar",
  description: "Soluções de software e hardware para melhoria de eficiência, fluxo de trabalho, gestão e experiência dos pacientes e colaboradores em hospitais.",
  keywords: [
    "Amiko",
    "Amiko Soluções",
    "SAHRA",
    "Assistente Hospitalar",
    "Monitoramento Hospitalar",
    "Tecnologia em Saúde",
    "SIMOH",
    "Automação Hospitalar",
    "Software Hospitalar",
    "Desenvolvimento de Software para Saúde",
    "Inatel",
    "INATEL",
    "Instituto Nacional de Telecomunicações",
    "Tecnologia Hospitalar",
    "Chamada de Enfermagem",
    "Campainha de Enfermagem",
    "Chamadas Inteligentes",
    "Hoobox",
    "Neonpass Room",
    "HOOBOX Robotics",
    "Evolutix",
    "Hospital"
  ],
  openGraph: {
    title: "Amiko Soluções - Tecnologia Hospitalar Inteligente | SAHRA Assistente Hospitalar",
    description: "Saiba como a Amiko Soluções transforma a gestão hospitalar com inovações como o SAHRA, um assistente hospitalar inteligente, e o SIMOH, sistema de monitoramento eficiente.",
    url: "https://www.amikosolucoes.com",
    type: "website",
    images: [
      {
        url: "https://amikosolucoes.com/assets/Logo%20Amiko%20SVG%201.svg",
        alt: "Logo da Amiko Soluções"
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* biome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}
      
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "SAHRA Assistente Hospitalar",
            "image": "https://amikosolucoes.com/assets/card%20sahra.png",
            "description": "Assistente virtual beira-leito com inteligência artificial. O paciente através da voz faz uma solicitação, ela entende a demanda, prioriza e encaminha para área específica (enfermagem, cozinha, limpeza), otimizando o tempo da equipe e reduzindo a espera por atendimento.",
            "brand": {
              "@type": "Organization",
              "name": "Amiko Soluções"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://amikosolucoes.com/#services",
              "priceCurrency": "BRL",
              "price": "1500.00",
              "availability": "http://schema.org/InStock",
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": "IoT Hospitalar",
            "image": "https://amikosolucoes.com/assets/card%20simoh.png",
            "provider": {
              "@type": "Organization",
              "name": "Amiko Soluções",
              "url": "https://amikosolucoes.com/#services"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Brasil"
            },
            "description": "Sistema de Monitoramento Hospitalar. Visa otimizar o processo de monitoramento de água, energia, temperatura e umidade de áreas que necessitam de controle constante, reduzindo processos manuais de verificação e gerando indicadores importantes."
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "serviceType": "Desenvolvimento de Software para Saúde",
            "image": "https://amikosolucoes.com/assets/card%20soteh.png",
            "provider": {
              "@type": "Organization",
              "name": "Amiko Soluções",
              "url": "https://amikosolucoes.com/#services"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Brasil"
            },
            "description": "Seja no desenvolvimento de softwares específicos ou na criação de hardwares complexos, o objetivo é encontrar respostas para problemas previamente considerados sem solução. Entendemos os desafios únicos dos ambientes hospitalares e nos dedicamos a criar soluções personalizadas e sob demanda, melhorando a eficiência e qualidade dos cuidados de saúde."
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Amiko Soluções",
            "image": "https://amikosolucoes.com/assets/Logo%20Amiko%20SVG%201.svg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. João de Camargo, 510, INATEL",
              "addressLocality": "Santa Rita do Sapucaí",
              "addressRegion": "MG",
              "postalCode": "37536-001",
              "addressCountry": "BR"
            },
            "telephone": "+55-35-99996-8808",
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "$$$"
          })}
        </script>
      </head>

    <body className={`vsc-initialized bg-white transition-colors`} >
      {children} 
    </body>
  </html>
  );
}

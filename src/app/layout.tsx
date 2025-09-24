import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  // title: "Amiko Soluções - Tecnologia Hospitalar Inteligente | MOARA Assistente Hospitalar",
  title: "Amiko Soluções - MOARA Assistente Hospitalar",
  description: "Soluções de software e hardware para melhoria de eficiência, fluxo de trabalho, gestão e experiência dos pacientes e colaboradores em hospitais, conheça a Amiko",
  keywords: [
    "Amiko",
    "Amiko Soluções",
    "MOARA",
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
    // title: "Amiko Soluções - Tecnologia Hospitalar Inteligente | MOARA Assistente Hospitalar",
    title: "Amiko Soluções - MOARA Assistente Hospitalar",
    description: "Soluções de software e hardware para melhoria de eficiência, fluxo de trabalho, gestão e experiência dos pacientes e colaboradores em hospitais, através das soluções: MOARA, SIMOH e SOTEH!",
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
      <link rel="page icon" href="\favicon.ico" />
      {/* biome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}

      <script type="application/ld+json">
        {JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "MOARA - Assistente Virtual Beira-Leito",
            "image": "https://amikosolucoes.com.br/assets/moara.jpg",
            "description": "MOARA é uma assistente virtual beira-leito desenvolvida para hospitais e instituições de saúde. Ela otimiza o tempo de atendimento, facilita a comunicação entre pacientes e equipe e melhora a experiência hospitalar.",
            "brand": {
              "@type": "Brand",
              "name": "Amiko Soluções"
            },
            "sku": "MOARA-001",
            "category": "Assistente Virtual Hospitalar",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "7"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Alexandre Coelho" },
                "datePublished": "2025-09-20",
                "reviewBody": "O investimento em novas tecnologias e parcerias com startups que possam melhorar ainda mais a jornada do cliente, aprimorando sua experiência, são fundamentais para o futuro da saúde. No HNSD isso será frequente, já que aliamos a tradição do nosso hospital à inovação no cuidado como uma das metas para crescimento.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Joyce Cristina" },
                "datePublished": "2025-09-20",
                "reviewBody": "Estamos utilizando o sistema MOARA e está sendo muito útil pra nosso trabalho, facilita e otimiza nossas funções. O paciente solicita algo e pelo sistema já conseguimos ver o que ele está precisando, sem a necessidade de ir até o quarto duas vezes. Assim atendemos o paciente com maior agilidade. Não tinha conhecimento desse sistema em hospitais. Adorei a ideia.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Bianca Sofia" },
                "datePublished": "2025-09-20",
                "reviewBody": "É uma tecnologia que não se vê em qualquer lugar. Achei muito prático, principalmente porque vai fazer com que a gente seja atendida mais rápido. Já estamos muito satisfeitas com o atendimento humanizado que recebemos aqui, agora vai melhorar ainda mais.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Lo-Ami" },
                "datePublished": "2025-09-20",
                "reviewBody": "Tive o privilégio de ser o primeiro acompanhante a testar, e foi uma honra. Acredito que vai melhorar demais a interação entre hospital, acompanhante e paciente. Hoje eu estava com paciente e não podia deixar ele sozinho, ai mandei na MOARA pedindo um suco. Foi super rápido e logo as meninas já levaram para mim. O sistema veio para agregar, e muito!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Emilene" },
                "datePublished": "2025-09-20",
                "reviewBody": "Sou funcionária da Santa Casa de Passos. Essa semana foi instalada a MOARA, que vai contribuir muito, tanto para o paciente quanto para os colaboradores da enfermagem e hotelaria, otimizando o tempo de atendimento. Os pacientes que já utilizaram o sistema estão encantados com a inovação. Parabéns a todos os envolvidos!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Bruno Moreira" },
                "datePublished": "2025-09-20",
                "reviewBody": "Nosso objetivo é que a equipe assistencial passe mais tempo cuidando das pessoas e menos tempo com burocracias, realizando um atendimento cada vez mais personalizado, que é o futuro da medicina. Estamos montando uma verdadeira jornada de cuidados de saúde tecnológica.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Bruna de Oliveira" },
                "datePublished": "2025-09-20",
                "reviewBody": "A tecnologia MOARA tem facilitado muito nosso trabalho. É um aparelho fácil de utilizar, então a adaptação tem sido bem tranquila. Quando o paciente nos chama com um problema, a gente já pode chegar com uma solução.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ]
          }
        )}
      </script>

      <Script 
        id="ms-clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
        }} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "MOARA Assistente Hospitalar",
            "image": "https://amikosolucoes.com/assets/card%20moara.png",
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

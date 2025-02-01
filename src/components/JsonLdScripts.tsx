// components/JsonLdScripts.tsx
import React from 'react';

export const JsonLdScripts = () => {
  return (
    <>
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
    </>
  );
};
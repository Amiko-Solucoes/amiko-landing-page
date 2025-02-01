import type { Metadata } from "next";
import "./globals.css";
import { JsonLdScripts } from "@/components/JsonLDScripts";

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
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* biome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}
    <JsonLdScripts />
    <body className={`vsc-initialized bg-white transition-colors`} >
      {children} 
    </body>
  </html>
  );
}

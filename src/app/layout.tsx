import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, organizationSchema, websiteSchema } from "@/lib/site";

const verification: Metadata["verification"] = {};
if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
}
if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
  verification.other = { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Concierge hospitalar digital e atendimento beira-leito | Amiko Soluções",
    template: "%s | Amiko Soluções",
  },
  description:
    "A Amiko Soluções criou a MOARA, concierge hospitalar digital com IA: pacientes pedem ajuda pelo WhatsApp e cada solicitação chega direto à equipe certa. Atendimento beira-leito mais rápido e com dados para a gestão.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "concierge hospitalar",
    "concierge hospitalar digital",
    "concierge virtual",
    "atendimento beira-leito",
    "assistente virtual beira-leito",
    "assistente virtual hospitalar",
    "chamada de enfermagem",
    "campainha de enfermagem",
    "experiência do paciente",
    "hotelaria hospitalar",
    "MOARA",
    "Amiko Soluções",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico" },
  verification,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="pt-BR">
      <body className="vsc-initialized bg-white transition-colors">
        {children}
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {clarityId && (
          <Script
            id="ms-clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");`,
            }}
          />
        )}
      </body>
    </html>
  );
}

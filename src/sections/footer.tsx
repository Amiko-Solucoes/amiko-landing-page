"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer(){
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className="bg-sky-900 flex flex-col gap-16 text-white pt-14 justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-10 py-10 max-w-[1540px]">
        <Image src="/amiko_logo_branca.svg" alt="Amiko Soluções" width={200} height={150} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t1")}</span>
            <a href={`mailto:${t("footer.p1")}`} className="hover:underline">{t("footer.p1")}</a>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t2")}</span>
            <a href="tel:+5535999968808" className="hover:underline">{t("footer.p2")}</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t3")}</span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">{t("footer.p3")}</a></span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">{t("footer.p4")}</a></span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/amikosolucoes/" target="_blank" rel="noopener"><Image src="/instagram_amiko.svg" alt="Instagram da Amiko Soluções" width={32} height={32} /></a>
            <a href="https://www.facebook.com/amikosolucoes/" target="_blank" rel="noopener"><Image src="/facebook_amiko.svg" alt="Facebook da Amiko Soluções" width={32} height={32} /></a>
            <a href="https://www.linkedin.com/company/amikosolucoes" target="_blank" rel="noopener"><Image src="/linkedin_amiko.svg" alt="LinkedIn da Amiko Soluções" width={32} height={32} /></a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">MOARA</span>
          <a href="/moara" className="hover:underline">O que é a MOARA</a>
          <a href="/concierge-hospitalar" className="hover:underline">Concierge hospitalar digital</a>
          <a href="/atendimento-beira-leito" className="hover:underline">Atendimento beira-leito</a>
          <a href="/chamada-de-enfermagem" className="hover:underline">Chamada de enfermagem</a>
          <a href="/concierge-virtual" className="hover:underline">Concierge virtual (hospitais e eventos)</a>
          <a href="/moara-home" className="hover:underline">MOARA Home</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">Conteúdo</span>
          <a href="/experiencia-do-paciente" className="hover:underline">Experiência do paciente</a>
          <a href="/automacao-hospitalar" className="hover:underline">Automação hospitalar</a>
          <a href="/resultados" className="hover:underline">Cases e resultados</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/parceiros-e-depoimentos" className="hover:underline">Parceiros e depoimentos</a>
          <a href="/sobre-nos" className="hover:underline">Sobre a Amiko</a>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center py-2">
        <a href="/privacy" className="font-bold pb-2 text-sm hover:underline">{t("footer.c1")}</a>
        <div className="h-[1px] bg-white w-full" />
        
        <span className="py-1">{t("footer.c2").replace("{year}", year.toString())}</span>
      </div>
    </div>
  )
}
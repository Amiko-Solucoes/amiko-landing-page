"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer(){
  const { t } = useTranslation();
  return (
    <div className="bg-sky-900 flex flex-col gap-16 text-white pt-14 justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-10 py-10 max-w-[1540px]">
        <Image src="/amiko_logo_branca.svg" alt="" width={200} height={150} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t1")}</span>
            <span>{t("footer.p1")}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t2")}</span>
            <span>{t("footer.p2")}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">{t("footer.t3")}</span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">{t("footer.p3")}</a></span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">{t("footer.p4")}</a></span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/amikosolucoes/" target="_blank"><Image src="/instagram_amiko.svg" alt="" width={32} height={32} /></a>
            <a href="https://www.facebook.com/amikosolucoes/"><Image src="/facebook_amiko.svg" alt="" width={32} height={32} /></a>
            <a href="https://www.linkedin.com/company/amikosolucoes"><Image src="/linkedin_amiko.svg" alt="" width={32} height={32} /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center py-2">
        <span className="font-bold pb-2 text-sm">{t("footer.c1")}</span>
        <div className="h-[1px] bg-white w-full" />
        <span className="py-1">{t("footer.c2")}</span>
      </div>
    </div>
  )
}
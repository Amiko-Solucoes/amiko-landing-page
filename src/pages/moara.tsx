"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function MoaraInfo(){

  const { t } = useTranslation();
  return (
    
    <div id="the_moara" >
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white">{t("moara.t")}</span>
      </div>  
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-10 px-4 md:px-8">
        <div className="flex flex-col gap-10 max-w-2xl px-6">
          <div className="flex flex-col gap-1">
            <span className="text-sky-900 text-xl font-bold">{t("moara.t1")}</span>
            <span>{t("moara.p1")}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sky-900 text-xl font-bold">{t("moara.t2")}</span>
            <span>{t("moara.p2")}</span>
          </div>
        </div>
        <Image className="hidden md:block" src="moara_full.svg" alt="" width={180} height={350}/>
        <Image className="md:hidden" src="moara_half.svg" alt="" width={120} height={250}/>
      </div>
    </div>
  )
}
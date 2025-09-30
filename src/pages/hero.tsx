"use client"

import { HeroButton } from "@/components/heroButton";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero(){

  const { t } = useTranslation()

  return (
    <div className="bg-hero_bg flex flex-col items-center justify-center bg-cover bg-no-repeat">
      <div id="hero" className="max-w-[1540px] bg-no-repeat bg-cover min-h-[500px] flex flex-col px-4 md:px-8 py-8 md:flex-row md:justify-between items-center transition-all">
        <div className="flex flex-col gap-4 md:gap-8 md:w-[40%]">
          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-bold text-sky-900">{t("hero.t1")}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-sky-900">{t("hero.t2")}</h1>
            <span className="text-2xl md:text-4xl text-sky-800">{t("hero.t3")}</span>
          </div>
          <HeroButton />
        </div>
        <div className="hidden lg:flex lg:flex-wrap">
          <a href="#simoh">
            <Image className="relative left-16 hover:-translate-y-4 transition-transform" src="card_simoh.svg" alt="SIMOH Card" width={240} height={300}/>
          </a>
          <a href="#soteh">
            <Image className="relative left-8 top-10 hover:-translate-y-4 transition-transform" src="card_soteh.svg"  alt="SOTEH Card" width={240} height={300}/>
          </a>
          <a href="#moara">
            <Image className="relative hover:-translate-y-4 transition-transform" src="card_moara.svg" alt="MOARA Card" width={240} height={300}/>
          </a>
        </div>
      </div>
    </div>
  )
}
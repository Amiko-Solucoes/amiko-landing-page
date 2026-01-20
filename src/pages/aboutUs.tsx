"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";

import LuccaPhoto from "../../public/lucca.jpeg"
import RobertoPhoto from "../../public/roberto.jpeg"

export default function AboutUs(){
  const { t } = useTranslation();

  return (
    <div id="aboutUs" className="flex flex-col items-center justify-center bg-about_bg bg-no-repeat bg-cover">
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white"><h1>{t("about.t1")}</h1></span>
      </div>  
      <div className="max-w-[1540px] flex flex-col md:flex-row py-8 px-8 gap-16 justify-center">
        <div className="md:max-w-[60%] flex flex-col text-lg gap-4">
          <div className="flex flex-col gap-4">
            <span>{t("about.p1")}</span>
            <span>{t("about.p2")}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold"><h2>{t("about.t2")}</h2></span>
            <span>{t("about.p3")}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold"><h2>{t("about.t3")}</h2></span>
            <span>{t("about.p4")}</span>
            <span className="font-semibold text-sky-900">{t("about.p5")}</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around bg-blue gap-4">
          <Image src={RobertoPhoto} alt="CEO Roberto" width={200} height={220} className="shadow-2xl rounded-[8px]"/>
          <Image src={LuccaPhoto} alt="CTO Lucca" width={200} height={220} className="shadow-2xl rounded-[8px]"/>
        </div>
      </div>
    </div>
  )
}
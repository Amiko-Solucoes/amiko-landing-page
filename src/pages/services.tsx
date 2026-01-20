"use client"

import { ServiceCard } from "@/components/serviceCard";
import { ServiceContent } from "@/components/serviceContent";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MoaraComponent } from "@/components/moaraComponent";
import { SimohComponent } from "@/components/simohComponent";
import { SotehComponent } from "@/components/sotehComponent";
export default function Services(){

  const { t } = useTranslation()

  return (
    <div id="services" className="flex flex-col justify-center items-center">
      <div className="bg-sky-900 flex flex-col items-center justify-center h-32 w-full">
        <span className="text-3xl text-white mb-4"><h1>{t("services.t1")}</h1></span>
        <div className="flex gap-10 ">
          <div className="w-5 h-5 rounded-full bg-sky-400" />
          <div className="w-5 h-5 rounded-full bg-green-500" />
          <div className="w-5 h-5 rounded-full bg-orange-400" />
        </div>
      </div>
      <div className="flex flex-col py-8 px-8 gap-14 justify-center items-center max-w-[1540px]">
       <MoaraComponent />
       <SimohComponent />
       <SotehComponent />
      </div>
    </div>  
  )
}
"use client"

import { ServiceCard } from "@/components/serviceCard";
import { ServiceContent } from "@/components/serviceContent";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
        <div id="moara" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-sahra.svg" alt="Logo do Serviço Moara" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="primary"/>
            <Image src="/cover 1.svg" alt="Capa do Serviço Moara" width={400} height={300}/>
            <div className="flex flex-wrap items-center justify-center lg:justify-between w-full gap-4">
              <ServiceCard iconAlt={t("services.s1.c1.t")} variant="primary" iconSrc="/sahra-card-1.svg" title={t("services.s1.c1.t")} description={t("services.s1.c1.p")}/>
              <ServiceCard iconAlt={t("services.s1.c2.t")} variant="primary" iconSrc="/sahra-card-2.svg" title={t("services.s1.c2.t")} description={t("services.s1.c2.p")}/>
              <ServiceCard iconAlt={t("services.s1.c3.t")} variant="primary" iconSrc="/sahra-card-3.svg" title={t("services.s1.c3.t")} description={t("services.s1.c3.p")}/>
            </div>
          </div>
        </div>

        <div id="simoh" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-simoh.svg" alt="Logo do Serviço Simoh" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="secondary"/>
            <Image src="/simoh_img_section.svg" alt="Imagem do Serviço Simoh" width={400} height={300}/>
            <div className="flex flex-wrap items-center justify-center lg:justify-between w-full gap-4">
              <ServiceCard iconAlt={t("services.s2.c1.t")} variant="secondary" iconSrc="/simoh-card-1.svg" title={t("services.s2.c1.t")} description={t("services.s2.c1.p")}/>
              <ServiceCard iconAlt={t("services.s2.c2.t")} variant="secondary" iconSrc="/simoh-card-2.svg" title={t("services.s2.c2.t")} description={t("services.s2.c2.p")}/>
              <ServiceCard iconAlt={t("services.s2.c3.t")} variant="secondary" iconSrc="/simoh-card-3.svg" title={t("services.s2.c3.t")} description={t("services.s2.c3.p")}/>
            </div>
          </div>
        </div>

        <div id="soteh" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-soteh.svg" alt="Logo do Serviço Soteh" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="tertiary"/>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center w-full px-2">
              <Image src="/soteh-1.svg" alt="" width={400} height={268} className="md:w-1/4"/>
              <Image src="/soteh-2.svg" alt="" width={400} height={268} className="md:w-2/4"/>
              <Image src="/soteh-3.svg" alt="" width={400} height={268} className="md:w-1/4"/>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-between w-full gap-4">
              <ServiceCard iconAlt={t("services.s3.c1.t")} variant="tertiary" iconSrc="/soteh-card-1.svg" title={t("services.s3.c1.t")} description={t("services.s3.c1.p")}/>
              <ServiceCard iconAlt={t("services.s3.c2.t")} variant="tertiary" iconSrc="/soteh-card-2.svg" title={t("services.s3.c2.t")} description={t("services.s3.c2.p")}/>
              <ServiceCard iconAlt={t("services.s3.c3.t")} variant="tertiary" iconSrc="/soteh-card-3.svg" title={t("services.s3.c3.t")} description={t("services.s3.c3.p")}/>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
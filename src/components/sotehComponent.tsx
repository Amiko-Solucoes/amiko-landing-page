import { ServiceContent } from "./serviceContent";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { use } from "react";
import {useTranslation} from "react-i18next";


export function SotehComponent(){
    const {t} = useTranslation();


    return (
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
    );

}
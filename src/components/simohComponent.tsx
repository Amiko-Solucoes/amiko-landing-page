import { ServiceContent } from "./serviceContent";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { use } from "react";
import {useTranslation} from "react-i18next";


export function SimohComponent(){
    const {t} = useTranslation();


    return (
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
    );

}
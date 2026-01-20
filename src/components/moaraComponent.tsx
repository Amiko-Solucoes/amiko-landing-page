import { ServiceContent } from "./serviceContent";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { use } from "react";
import { useTranslation } from "react-i18next";


export function MoaraComponent() {
    const { t } = useTranslation();


    return (
        <div id="moara" className="flex flex-col gap-10 justify-center items-center">
            <div className="flex justify_center">
                <Image src="/logo-sahra.svg" alt="Logo do serviço Moara" width={150} height={150} />
            </div>
            <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
                <ServiceContent variant='primary' />
                <Image src="/cover 1.svg" alt="Capa do Serviço Moara" width={400} height={300} />
                <div className="flex flex-wrap items-center justify-center lg:justify-between w-full gap-4">
                    <ServiceCard iconAlt={t("services.s1.c1.t")} variant="primary" iconSrc="/sahra-card-1.svg" title={t("services.s1.c1.t")} description={t("services.s1.c1.p")} />
                    <ServiceCard iconAlt={t("services.s1.c1.t")} variant="primary" iconSrc="/sahra-card-2.svg" title={t("services.s1.c2.t")} description={t("services.s1.c2.p")} />
                    <ServiceCard iconAlt={t("services.s1.c1.t")} variant="primary" iconSrc="/sahra-card-3.svg" title={t("services.s1.c3.t")} description={t("services.s1.c3.p")} />
                </div>

            </div>

        </div>
    );

}
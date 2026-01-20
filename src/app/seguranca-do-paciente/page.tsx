"use client"
import Image from "next/image";
import Footer from "@/pages/footer";
import { useTranslation } from "react-i18next";
import Header from "@/pages/header";
import { MoaraComponent } from "@/components/moaraComponent";

export default function MoarePage() {
      const { t } = useTranslation()
    return (
        <div className="w-[80%] flex flex-col gap-10 justify-center items-center w-full">
        <Header />
        <MoaraComponent />

        <div id="the_moara" className="w-full" >
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

                  <section>
                  <h2 className="text-xl font-bold text-sky-900 mb-2">{t("moara.benefits.title")}</h2>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>{t("moara.benefits.1")}</li>
                      <li>{t("moara.benefits.2")}</li>
                      <li>{t("moara.benefits.3")}</li>
                      <li>{t("moara.benefits.4")}</li>
                    </ul>
                  </section>

                  <div className="flex justify-center mt-6">
                    <a href="/contact-page">
                      <button className="bg-sky-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition">
                        {t("moara.cta")}
                      </button>
                    </a>
                  </div>
                </div>
                <Image className="hidden md:block" src="moara_full.svg" alt="" width={180} height={350}/>
                <Image className="md:hidden" src="moara_half.svg" alt="" width={120} height={250}/>

              </div>

              
            </div>
            
              
            
            <div className="w-full"><Footer /></div>
        </div>

        
        
    );
}
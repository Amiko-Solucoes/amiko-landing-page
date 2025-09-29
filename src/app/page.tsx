"use client";

import { WhatsAppButton } from "@/components/whatsappButton";
import AboutUs from "@/pages/aboutUs";
import Contact from "@/pages/contact";
import Feedbacks from "@/pages/feedbacks";
import Footer from "@/pages/footer";
import Header from "@/pages/header";
import Hero from "@/pages/hero";
import MoaraInfo  from "@/pages/moara";
import Partners from "@/pages/partners";
import Services from "@/pages/services";
import Script from "next/script";
import { useEffect } from "react";
import Clarity from '@microsoft/clarity';

export default function Home() {
  
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_CLARITY_ID) {
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID);
    }
  }, []);

    // teste 
  return (
    <>
      <Script 
        id="ms-clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`,
      }} />
    
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center ">
          <div className="fixed z-[40] w-full">
              <Header />
          </div>
          <div className="pt-20 bg-[#F3FCFF]">
            <Hero />
            <AboutUs />
            <Services />
            <MoaraInfo />
            <Partners />
            <Feedbacks />
            <Contact />
            <Footer />
          </div>
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

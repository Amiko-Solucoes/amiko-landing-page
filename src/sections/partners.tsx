"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'
import { useTranslation } from "react-i18next"
export default function Partners(){

  const { t } = useTranslation();
  return (
    <div id="partners" >
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <h2 className="text-3xl text-white">{t("partners.t1")}</h2>
      </div>  
      <div className="flex flex-col md:flex-row py-8 px-8 gap-16 justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({delay: 2000}),
          ]}
        >
          <CarouselContent>
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/sebrae_logo.jpeg"
                alt="Sebrae"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/inatelstartup_logo.jpeg"
                alt="Inatel Startups"
                width={200}
                height={200}
              />
            </CarouselItem> 

            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/misericordia_logo.jpeg"
                alt="Santa Casa de Misericórdia de Passos"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/saolucas_logo.jpeg"
                alt="Hospital São Lucas"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/clinicas_logo.jpeg"
                alt="Hospital das Clínicas"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/fapemig_logo.jpeg"
                alt="Fapemig"
                width={200}
                height={200}
              />
            </CarouselItem> 

            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/iam_logo.jpeg"
                alt="IAM"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/centelha_logo.jpeg"
                alt="Centelha"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/senhoradores_logo.jpeg"
                alt="Hospital Nossa Senhora das Dores"
                width={200}
                height={200}
              />
            </CarouselItem> 
          
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
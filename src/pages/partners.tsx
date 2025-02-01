"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'

export default function Partners(){
  return (
    <div id="partners">
      <div className="bg-sky-900 flex items-center justify-center h-32">
        <span className="text-3xl text-white">Parceiros</span>
      </div>  
      <div className="flex flex-col md:flex-row py-8 px-8 gap-16 justify-center">
        <Carousel
          opts={{
            align: "center",
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
                src="/sao_lucas.svg"
                alt=""
                width={200}
                height={200}
              />
            </CarouselItem> 
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/fapemig.svg"
                alt=""
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/inatel_startups.svg"
                alt=""
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/maincore.svg"
                alt=""
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem
              className="flex items-center justify-center md:basis-1/5"
            >
              <Image
                src="/Frame 35.svg"
                alt=""
                width={200}
                height={200}
              />
            </CarouselItem>
            <CarouselItem
              className="flex items-center justify-center md:basis-1/3"
            >
              <Image
                src="/ana_moreira.svg"
                alt=""
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
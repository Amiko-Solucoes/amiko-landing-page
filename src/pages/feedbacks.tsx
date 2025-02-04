"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'
import { FeedbackCard } from "@/components/feedbackCard"

export default function Feedbacks(){
  return (
    <div id="Feedbacks" className="flex flex-col items-center justify-center">
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white">Parceiros</span>
      </div>  
      <div className="flex py-8 px-8 gap-16  md:max-w-[95%]">
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
              className="items-center justify-center lg:basis-1/3"
            >
              <FeedbackCard />
            </CarouselItem> 

            <CarouselItem
              className="items-center justify-center lg:basis-1/3"
            >
              <FeedbackCard />
            </CarouselItem> 

            <CarouselItem
              className="items-center justify-center lg:basis-1/3"
            >
              <FeedbackCard />
            </CarouselItem> 

            <CarouselItem
              className="items-center justify-center lg:basis-1/3"
            >
              <FeedbackCard />
            </CarouselItem> 
          </CarouselContent>
          <CarouselNext className="hidden md:flex"/>
          <CarouselPrevious className="hidden md:flex"/>
        </Carousel>
      </div>
    </div>
  )
}
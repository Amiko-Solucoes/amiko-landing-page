"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { FeedbackCard } from "@/components/feedbackCard"

import feedbacks from "@/Content.json"

interface CardProps {
  id: number
  image: string;
  name: string;
  role: string;
  feedback: string;
}

export default function Feedbacks(){
  return (
    <div id="feedbacks" className="flex flex-col items-center justify-center">
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white">Depoimentos</span>
      </div>  
      <div className=" flex py-8 px-8 gap-16 md:max-w-[95%]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({delay: 5000}),
          ]}
          className="w-full hidden md:flex"
        >
          <CarouselContent>
            {feedbacks.map((item : CardProps) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={item.id}>
                  <FeedbackCard image={item.image} name={item.name} role={item.role} feedback={item.feedback}/>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden md:flex"/>
          <CarouselPrevious className="hidden md:flex"/>
        </Carousel>

        <div className="w-full md:hidden flex flex-col gap-4">
            {feedbacks.map((item : CardProps) => (
              <div key={item.id}>
                <FeedbackCard image={item.image} name={item.name} role={item.role} feedback={item.feedback}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
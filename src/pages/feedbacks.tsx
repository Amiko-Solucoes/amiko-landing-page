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
import { useTranslation } from "react-i18next"

interface CardProps {
  id: number
  image: string;
  name: string;
  role: string;
  feedback: string;
}

export default function Feedbacks(){
  const { t } = useTranslation();

  const feedbacks = [
    {
      "id": 1,
      "image": "/feedback-alexandre.jpeg",
      "name": t("feedbacks.f1.name"),
      "role": t("feedbacks.f1.role"),
      "feedback": t("feedbacks.f1.p1")
    },
    {
      "id": 2,
      "image": "/feedback-joyce.jpeg",
      "name": t("feedbacks.f2.name"),
      "role": t("feedbacks.f2.role"),
      "feedback": t("feedbacks.f2.p1")
    },
    {
      "id": 3,
      "image": "/feedback-bianca.jpeg",
      "name": t("feedbacks.f3.name"),
      "role": t("feedbacks.f3.role"),
      "feedback": t("feedbacks.f3.p1")
    },
    {
      "id": 4,
      "image": "/feedback-lo-ami.jpeg",
      "name": t("feedbacks.f4.name"),
      "role": t("feedbacks.f4.role"),
      "feedback": t("feedbacks.f4.p1")
    },
    {
      "id": 5,
      "image": "/feedback-emilene.jpeg",
      "name": t("feedbacks.f5.name"),
      "role": t("feedbacks.f5.role"),
      "feedback": t("feedbacks.f5.p1")
    },
    {
      "id": 6,
      "image": "/feedback-bruno.jpeg",
      "name": t("feedbacks.f6.name"),
      "role": t("feedbacks.f6.role"),
      "feedback": t("feedbacks.f6.p1")
    },
    {
      "id": 7,
      "image": "/feedback-bruna.jpeg",
      "name": t("feedbacks.f7.name"),
      "role": t("feedbacks.f7.role"),
      "feedback": t("feedbacks.f7.p1")
    }
  ]

  return (
    <div id="feedbacks" className="flex flex-col items-center justify-center">
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white">{t("feedbacks.t1")}</span>
      </div>  
      <div className=" flex py-8 px-8 gap-16 flex-col items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({delay: 5000}),
          ]}
          className="hidden md:flex max-w-[95%]"
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
import { HeroButton } from "@/components/heroButton";
import Image from "next/image";

export default function Hero(){
  return (
    <div id="hero" className="bg-hero_bg bg-no-repeat bg-cover min-h-[500px] flex flex-col px-4 md:px-8 py-8 md:flex-row md:justify-between items-center transition-all">
      <div className="flex flex-col gap-4 md:gap-8 md:w-[40%]">
        <div className="flex flex-col">
          <span className="text-5xl md:text-6xl font-bold text-sky-900">Olá!</span>
          <span className="text-5xl md:text-6xl font-bold text-sky-900">Somos a Amiko.</span>
          <span className="text-2xl md:text-4xl text-sky-800">onde a inovação e o cuidado se encontram!</span> 
        </div>
        <HeroButton />
      </div>
      <div className="hidden lg:flex lg:flex-wrap">
        <Image className="relative left-16 hover:-translate-y-4 transition-transform" src="card_simoh.svg" alt="" width={240} height={300}/>
        <Image className="relative left-8 top-10 hover:-translate-y-4 transition-transform" src="card_soteh.svg"  alt="" width={240} height={300}/>
        <Image className="relative hover:-translate-y-4 transition-transform" src="card_sahra.svg" alt="" width={240} height={300}/>
      </div>
    </div>
  )
}
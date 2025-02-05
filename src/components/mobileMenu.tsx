"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu (){
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="block lg:hidden">
          <div className="w-8 h-6 flex flex-col justify-between">
            <div className="h-[3px] bg-black w-full" />
            <div className="h-[3px] bg-black w-full" />
            <div className="h-[3px] bg-black w-full" />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="z-[100]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="text-sky-700 font-poppins flex flex-col justify-center items-center gap-10 h-full py-10 text-xl">
          <a href="#hero" className="hover:text-sky-500">Home</a>
          <a href="#aboutUs" className="hover:text-sky-500">Sobre nós</a>
          <a href="#services" className="hover:text-sky-500">Serviços</a>
          <a href="#partners" className="hover:text-sky-500">Parceiros</a>
          <a href="#feedbacks" className="hover:text-sky-500">Depoimentos</a>
          <a href="#contact" className="hover:text-sky-500">Contato</a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
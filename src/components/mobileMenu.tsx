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
          <span className="hover:text-sky-500">Home</span>
          <span className="hover:text-sky-500">Sobre nós</span>
          <span className="hover:text-sky-500">Serviços</span>
          <span className="hover:text-sky-500">Parceiros</span>
          <span className="hover:text-sky-500">Contato</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}
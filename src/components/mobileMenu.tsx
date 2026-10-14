"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MOBILE_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/moara", label: "MOARA" },
  { href: "/atendimento-beira-leito", label: "Atendimento beira-leito" },
  { href: "/concierge-virtual", label: "Concierge virtual" },
  { href: "/resultados", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre-nos", label: "Sobre nós" },
  { href: "/contato", label: "Contato" },
]

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
        <div className="text-sky-700 font-poppins flex flex-col justify-center items-center gap-7 h-full py-10 text-xl text-center">
          {MOBILE_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-sky-500">{item.label}</a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
"use client"

import { MobileMenu } from "@/components/mobileMenu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import "../i18n.js"
import BrasilFlag from '../../public/brasil_flag.svg'
import UsaFlag from '../../public/usa_flag.svg'

const NAV_ITEMS = [
  { href: "/", key: "header.home" },
  { href: "/moara", key: "header.moara" },
  { href: "/atendimento-beira-leito", key: "header.beira" },
  { href: "/resultados", key: "header.cases" },
  { href: "/blog", key: "header.blog" },
  { href: "/sobre-nos", key: "header.about" },
  { href: "/contato", key: "header.contact" },
]

export default function Header(){

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full">   
      <header className="flex flex-row text-base justify-between sticky px-4 lg:px-12 py-3 items-center z-20 bg-white max-w-[1540px] w-full">
        <a href="/" aria-label="Amiko Soluções, página inicial">
          <Image src="/logo.svg" alt="Amiko Soluções" width={130} height={100} priority />
        </a>

        <div className="font-poppins flex flex-row gap-6 lg:gap-8">
          <nav aria-label="Menu principal" className="hidden lg:flex">
            <ul className="text-sky-700 flex flex-row gap-7 items-center transition-all">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="hover:text-sky-500 hover:cursor-pointer group">
                  <a href={item.href} className="relative">
                    {t(item.key)}
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Select defaultValue="pt" onValueChange={(value) => changeLanguage(value)}>
            <SelectTrigger className="w-[70px] border-[1px] border-zinc-400 rounded-[8px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="w-[70px] rounded-[8px] bg-white z-50 border-[1px] border-zinc-400">
              <SelectItem value="pt">
                <Image src={BrasilFlag} alt="Português" width={24} height={24} />
              </SelectItem>
              <SelectItem value="en">
                <Image src={UsaFlag} alt="English" width={24} height={24} />
              </SelectItem>
            </SelectContent>
          </Select>
          
          <MobileMenu />
        </div>
      </header>
    </div>
  )
}
"use client"

import { MobileMenu } from "@/components/mobileMenu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import "../i18n.js"
import BrasilFlag from '../../public/brasil_flag.svg'
import UsaFlag from '../../public/usa_flag.svg'

export default function Header(){

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full">   
      <header className="flex flex-row text-base justify-between sticky px-4 lg:px-12 py-3 items-center z-20 bg-white max-w-[1540px] w-full">
        <Image src="/logo.svg" alt="Logo" width={130} height={100}/>

        <div className="font-poppins flex flex-row gap-6 lg:gap-8">
          <ul className="text-sky-700 flex-row gap-8 items-center transition-all lg:flex hidden">
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#hero" className="relative">
                {t("header.home")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#aboutUs" className="relative">
                {t("header.about")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#services" className="relative">
                {t("header.services")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#partners" className="relative">
                {t("header.partners")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#feedbacks" className="relative">
                {t("header.feedbacks")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
            <li className="hover:text-sky-500 hover:cursor-pointer group">
              <a href="/#contact" className="relative">
                {t("header.contact")}
                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-500 rounded-full mt-1 absolute left-0 bottom-[-6px]" />
              </a>
            </li>
          </ul>

          <Select defaultValue="pt" onValueChange={(value) => changeLanguage(value)}>
            <SelectTrigger className="w-[70px] border-[1px] border-zinc-400 rounded-[8px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="w-[70px] rounded-[8px] bg-white z-50 border-[1px] border-zinc-400">
              <SelectItem value="pt">
                <Image src={BrasilFlag} alt="Portuguese" width={24} height={24} />
              </SelectItem>
              <SelectItem value="en">
                <Image src={UsaFlag} alt="Portuguese" width={24} height={24} />
              </SelectItem>
            </SelectContent>
          </Select>
          
          <MobileMenu />
        </div>
      </header>
    </div>
  )
}
import { MobileMenu } from "@/components/mobileMenu"
import Image from "next/image"

export default function Header(){

  return (
    <header className="flex flex-row text-base justify-between sticky px-4 lg:px-12 py-3 items-center z-20 bg-white">
      <Image src="/logo.svg" alt="Logo" width={130} height={100}/>

      <div className="font-poppins flex flex-row gap-6 lg:gap-8">
        <ul className="text-sky-700 flex-row gap-8 items-center transition-all lg:flex hidden">
          <li className="hover:text-sky-500 hover:cursor-pointer">
            <a href="#about">Home</a>
          </li>
          <li className="hover:text-sky-500 hover:cursor-pointer">
            <a href="#skills">Sobre nós</a>
          </li>
          <li className="hover:text-sky-500 hover:cursor-pointer">
            <a href="projects">Serviços</a>
          </li>
          <li className="hover:text-sky-500 hover:cursor-pointer">
            <a href="experiences">Parceiros</a>
          </li>
          <li className="hover:text-sky-500 hover:cursor-pointer">
            <a href="contact">Contato</a>
          </li>
        </ul>
        
        <MobileMenu />
      </div>
    </header>

  )
}
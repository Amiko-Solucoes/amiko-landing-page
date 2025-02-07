import Image from "next/image";

export default function Footer(){
  return (
    <div className="bg-sky-900 flex flex-col gap-16 text-white pt-14 justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 px-10 py-10 max-w-[1540px]">
        <Image src="/amiko_logo_branca.svg" alt="" width={200} height={150} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">Email</span>
            <span>contato@amikosoluçoes.com</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Contato</span>
            <span>+55(35)9 9996-8808</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-bold">Endereço</span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">Incubadora de Empresas - Av. João de Camargo, 510, Inatel, Sala 9</a></span>
            <span><a href="https://g.co/kgs/rRoQdnp" target="_blank">Santa Rita do Sapucaí - MG</a></span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/amikosolucoes/" target="_blank"><Image src="/instagram_amiko.svg" alt="" width={32} height={32} /></a>
            <a href="https://www.linkedin.com/company/amikosolucoes"><Image src="/facebook_amiko.svg" alt="" width={32} height={32} /></a>
            <a href="https://www.linkedin.com/company/amikosolucoes"><Image src="/linkedin_amiko.svg" alt="" width={32} height={32} /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center py-2">
        <span className="font-bold pb-2 text-sm">Política de Privacidade</span>
        <div className="h-[1px] bg-white w-full" />
        <span className="py-1">Copyright@2024 Amiko Soluções</span>
      </div>
    </div>
  )
}
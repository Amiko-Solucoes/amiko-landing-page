import Image from "next/image";

export function MoaraInfo(){
  return (
    <div id="the_moara" >
      <div className="bg-sky-900 flex items-center justify-center h-32 w-full">
        <span className="text-3xl text-white">A MOARA</span>
      </div>  
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-10 py-10 px-4 md:px-8">
        <div className="flex flex-col gap-10 max-w-2xl px-6">
          <div className="flex flex-col gap-1">
            <span className="text-sky-900 text-xl font-bold">Origem do Nome</span>
            <span>MOARA, um nome de origem indígena brasileira que significa <strong className="text-sky-900">“aquela que ajuda”</strong>. Esse significado representa o propósito da assistente virtual desenvolvida pela Amiko Soluções: estar sempre presente para auxiliar, acolher e oferecer suporte em momentos delicados como uma internação hospitalar.</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sky-900 text-xl font-bold">Humanizar o atendimento</span>
            <span>Criada para ser uma concierge 24 horas por dia, 7 dias por semana, a MOARA conecta pacientes e equipes de assistenciais, garantindo agilidade, conforto e excelência no atendimento. Mais do que tecnologia, ela simboliza cuidado e proximidade em um período de vulnerabilidade, onde cada detalhe faz diferença.</span>
          </div>
        </div>
        <Image className="hidden md:block" src="moara_full.svg" alt="" width={180} height={350}/>
        <Image className="md:hidden" src="moara_half.svg" alt="" width={120} height={250}/>
      </div>
    </div>
  )
}
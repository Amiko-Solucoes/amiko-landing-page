import Image from "next/image";

export default function Services(){
  return (
    <div>
     <div className="bg-sky-900 flex flex-col items-center justify-center h-32">
        <span className="text-3xl text-white mb-4">Nossos Serviços</span>
        <div className="flex gap-10 ">
          <div className="w-5 h-5 rounded-full bg-sky-400"></div>
          <div className="w-5 h-5 rounded-full bg-green-500"></div>
          <div className="w-5 h-5 rounded-full bg-orange-400"></div>
        </div>
      </div>
      <div className="flex flex-col py-8 px-8 gap-8 justify-center items-center">
        <div className="flex justify-center">
          <Image src="/logo-sahra.svg" alt="" width={100} height={100}/>
        </div>
        <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col gap-2">
            <span className="text-[#4FA5BF] font-bold text-6xl">SAHRA</span>
            <span className="text-sky-900 font-bold text-2xl">A Revolução da Assistência Hospitalar</span>
            <span className="text-sky-900 text-lg">A SAHRA é a assistente virtual beira-leito com inteligência artificial projetada para elevar o padrão da assistência hospitalar. Com a SAHRA, o paciente pode realizar solicitações utilizando apenas sua voz, eliminando barreiras de comunicação e facilitando a interação com a equipe assistencial, uma vez que a assistente também prioriza e encaminha as solicitações para a área especifica, agilizando o processo de atendimento.</span>
          </div>
          <div className="w-full bg-gradient-sahra flex justify-center items-center py-4 rounded-2xl text-center">
            <span className="text-white text-lg md:text-2xl px-4">Sistema Amiko de Hospitalidade e Resposta Assistencial</span>
          </div>
          <Image src="/cover 1.svg" alt="" width={400} height={300}/>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#4FA6C0] p-4 rounded-full w-fit relative top-8">
                <Image src="/arrowtop.svg" alt="" width={40} height={40}/>
              </div>
              <div className="bg-white shadow-xl flex flex-col text-center justify-center items-center px-4 pt-14 pb-8 max-w-[300px] gap-6">
                <span className="text-xl text-sky-900 font-bold">Equipe Otimizada</span>
                <span>Entregaremos dados assertivos e reais dos atendimentos, possibilitando a tomada de decisões embasadas pela realidade do setor. Possibilitando melhor gestão de desempenho em tempo real.</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#4FA6C0] p-4 rounded-full w-fit relative top-8">
                <Image src="/arrowtop.svg" alt="" width={40} height={40}/>
              </div>
              <div className="bg-white shadow-xl flex flex-col text-center justify-center items-center px-4 pt-14 pb-8 max-w-[300px] gap-6">
                <span className="text-xl text-sky-900 font-bold">Equipe Otimizada</span>
                <span>Entregaremos dados assertivos e reais dos atendimentos, possibilitando a tomada de decisões embasadas pela realidade do setor. Possibilitando melhor gestão de desempenho em tempo real.</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#4FA6C0] p-4 rounded-full w-fit relative top-8">
                <Image src="/arrowtop.svg" alt="" width={40} height={40}/>
              </div>
              <div className="bg-white shadow-xl flex flex-col text-center justify-center items-center px-4 pt-14 pb-8 max-w-[300px] gap-6">
                <span className="text-xl text-sky-900 font-bold">Equipe Otimizada</span>
                <span>Entregaremos dados assertivos e reais dos atendimentos, possibilitando a tomada de decisões embasadas pela realidade do setor. Possibilitando melhor gestão de desempenho em tempo real.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
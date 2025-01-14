import { ServiceCard } from "@/components/serviceCard";
import { ServiceContent } from "@/components/serviceContent";
import Image from "next/image";

export default function Services(){
  return (
    <div>
     <div className="bg-sky-900 flex flex-col items-center justify-center h-32">
        <span className="text-3xl text-white mb-4">Nossos Serviços</span>
        <div className="flex gap-10 ">
          <div className="w-5 h-5 rounded-full bg-sky-400" />
          <div className="w-5 h-5 rounded-full bg-green-500" />
          <div className="w-5 h-5 rounded-full bg-orange-400" />
        </div>
      </div>
      <div className="flex flex-col py-8 px-8 gap-14 justify-center items-center">
        <div id="sahra" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-sahra.svg" alt="" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="primary"/>
            <Image src="/cover 1.svg" alt="" width={400} height={300}/>
            <div className="flex flex-wrap items-center justify-center w-full gap-4">
              <ServiceCard variant="primary" iconSrc="/sahra-card-1.svg" title="Equipe Otimizada" description="Apenas a equipe responsável por aquele tipo de solicitação receberá o chamado, evitando ocupar outras equipes com tarefas que não são de suas especialidades."/>
              <ServiceCard variant="primary" iconSrc="/sahra-card-2.svg" title="Gestão Inteligente" description="Entregaremos dados assertivos e reais dos atendimentos, possibilitando a tomada de decisões embasadas pela realidade do setor. Possibilitando melhor gestão de desempenho em tempo real."/>
              <ServiceCard variant="primary" iconSrc="/sahra-card-3.svg" title="Fluxo Inteligente" description="Cada tipo de solicitação pode ser enviada à equipe correspondente, além de já conter exatamente o que o paciente solicitou, evitando visitas desnecessárias ao quarto."/>
            </div>
          </div>
        </div>

        <div id="simoh" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-simoh.svg" alt="" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="secondary"/>
            <Image src="/simoh_img_section.svg" alt="" width={400} height={300}/>
            <div className="flex flex-wrap items-center justify-center w-full gap-4">
              <ServiceCard variant="secondary" iconSrc="/simoh-card-1.svg" title="Apoio à Tomada de Decisões" description="Fornece insights valiosos para a gestão hospitalar, facilitando a tomada de decisões embasadas em informações confiáveis e atualizadas."/>
              <ServiceCard variant="secondary" iconSrc="/simoh-card-2.svg" title="Monitoramento Abrangente" description="Permite o monitoramento de diversas áreas e equipamentos hospitalares, garantindo um ambiente seguro e funcional para pacientes e equipe médica."/>
              <ServiceCard variant="secondary" iconSrc="/simoh-card-3.svg" title="Redução de Erros e incidentes" description="Ao detectar problemas de forma precoce, ajude a minimizar erros a incidentes, promovendo a segurança dos pacientes e a eficiência operacional do hospital."/>
            </div>
          </div>
        </div>

        <div id="soteh" className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center">
            <Image src="/logo-soteh.svg" alt="" width={150} height={150}/>
          </div>
          <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
            <ServiceContent variant="tertiary"/>
            <Image src="/simoh_img_section.svg" alt="" width={400} height={300}/>
            <div className="flex flex-wrap items-center justify-center w-full gap-4">
              <ServiceCard variant="tertiary" iconSrc="/soteh-card-1.svg" title="Solução sob demanda" description="Fornece insights valiosos para a gestão hospitalar, facilitando a tomada de decisões embasadas em informações confiáveis e atualizadas."/>
              <ServiceCard variant="tertiary" iconSrc="/soteh-card-2.svg" title="Melhoria de processos internos" description="Permite o monitoramento de diversas áreas e equipamentos hospitalares, garantindo um ambiente seguro e funcional para pacientes e equipe médica."/>
              <ServiceCard variant="tertiary" iconSrc="/soteh-card-3.svg" title="Soluções personalizadas" description="Ao detectar problemas de forma precoce, ajude a minimizar erros a incidentes, promovendo a segurança dos pacientes e a eficiência operacional do hospital."/>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
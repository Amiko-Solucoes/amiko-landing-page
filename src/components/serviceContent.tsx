import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const serviceStyles = tv({
  base: "flex flex-col gap-2",
  variants: {
    variant: {
      primary: "text-[#70A4BD]",
      secondary: "text-[#70BD70]",
      tertiary: "text-[#F6AA56]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const footerStyles = tv({
  base: "w-full flex justify-center items-center py-4 rounded-2xl text-center",
  variants: {
    variant: {
      primary: "bg-gradient-to-r-primary",
      secondary: "bg-gradient-to-r-secondary",
      tertiary: "bg-gradient-to-r-tertiary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ServiceContentProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export function ServiceContent({ variant = "primary" }: ServiceContentProps) {
  const texts = {
    primary: {
      title: "SAHRA",
      subtitle: "A Revolução da Assistência Hospitalar",
      description:
        "A SAHRA é a assistente virtual beira-leito com inteligência artificial projetada para elevar o padrão da assistência hospitalar. Com a SAHRA, o paciente pode realizar solicitações utilizando apenas sua voz, eliminando barreiras de comunicação e facilitando a interação com a equipe assistencial, uma vez que a assistente também prioriza e encaminha as solicitações para a área especifica, agilizando o processo de atendimento.",
      footer: "Sistema Amiko de Hospitalidade e Resposta Assistencial",
    },
    secondary: {
      title: "SIMOH",
      subtitle: "Monitoramento Hospitalar Inteligente",
      description:
        "O SIMOH é um sistema inovador de monitoramento hospitalar projetado para áreas que exigem controle contínuo. Com o SIMOH, processos manuais de verificação são reduzidos drasticamente, permitindo um monitoramento eficiente e preciso em tempo real. Este sistema gera indicadores cruciais que oferecem insights valiosos para a gestão hospitalar, facilitando a tomada de decisões embasadas em dados confiáveis. Além disso, o SIMOH possibilita o monitoramento de diversas áreas e equipamentos, garantindo um ambiente hospitalar seguro e funcional.",
      footer: "Sistemas de Monitoramento Hospitalar",
    },
    tertiary: {
      title: "SOTEH",
      subtitle: "A Inovação Personalizada para Saúde",
      description:
        "Desenvolvemos soluções personalizadas e sob demanda para os desafios únicos enfrentados nos ambientes hospitalares. Seja através do desenvolvimento de softwares ou hardwares especializados, nossa abordagem visa melhorar significativamente a eficiência e qualidade dos cuidados de saúde prestados. Ao focar em soluções adaptadas as necessidades específicas de cada instituição de saúde, conseguimos resolver problemas que muitas vezes são negligenciados por soluções genéricas.",
      footer: "Soluções Tecnológicas Hospitalares",
    },
  };

  const content = texts[variant];

  return (
    <div className={twMerge(serviceStyles({ variant }), "flex flex-col gap-10")}>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-6xl">{content.title}</span>
        <span className="text-sky-900 font-bold text-2xl">{content.subtitle}</span>
        <span className="text-sky-900 text-lg">{content.description}</span>
      </div>
      <div className={footerStyles({ variant })}>
        <span className="text-white text-lg md:text-2xl px-4">{content.footer}</span>
      </div>
    </div>
  );
}

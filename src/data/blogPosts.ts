export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readTime: string;
  sections: BlogSection[];
  relatedHref: string;
  relatedLabel: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-concierge-hospitalar-digital",
    title: "O que é concierge hospitalar digital (e por que não é só um chatbot)",
    description:
      "Entenda o que é um concierge hospitalar digital, como ele difere de um chatbot comum e como funciona na prática dentro de um hospital.",
    category: "Concierge Hospitalar",
    date: "2026-02-10",
    readTime: "5 min de leitura",
    relatedHref: "/concierge-hospitalar",
    relatedLabel: "Conheça a MOARA, o concierge hospitalar digital da Amiko",
    sections: [
      {
        paragraphs: [
          "\"Concierge hospitalar digital\" é um termo que vem se tornando comum em hospitais que buscam melhorar a experiência do paciente, mas ainda gera dúvida sobre o que exatamente ele significa na prática.",
          "De forma simples: é uma camada de atendimento digital, disponível 24 horas por dia, que recebe as solicitações de pacientes e acompanhantes, entende a necessidade e direciona cada demanda para a equipe responsável — sem que o paciente precise descobrir sozinho qual setor procurar.",
        ],
      },
      {
        heading: "Concierge hospitalar não é a mesma coisa que chatbot",
        paragraphs: [
          "Um chatbot tradicional responde perguntas com base em um roteiro de conversas pré-definido. Ele é útil para dúvidas simples e repetitivas, mas normalmente para por aí.",
          "Um concierge hospitalar digital vai além: ele interpreta a solicitação em linguagem natural, classifica o tipo de demanda, prioriza com base na urgência, encaminha para a equipe certa (enfermagem, hotelaria, manutenção, entre outras) e ainda transforma cada interação em dado — permitindo que a gestão do hospital enxergue volume de chamados, tempo de resposta e gargalos operacionais.",
          "Ou seja: o chatbot conversa. O concierge hospitalar digital organiza a operação.",
        ],
      },
      {
        heading: "Como funciona na prática",
        paragraphs: [
          "O fluxo típico de um concierge hospitalar digital como a MOARA segue três etapas: o paciente ou acompanhante faz uma solicitação por um canal simples, como o WhatsApp; a inteligência artificial interpreta a necessidade e classifica automaticamente o tipo de demanda; e a solicitação é encaminhada diretamente à equipe responsável, já com o contexto necessário para resolver o pedido.",
          "Esse encaminhamento automático é o que evita que solicitações simples — como um travesseiro ou um problema no ar-condicionado — acabem chegando à enfermagem por engano, só porque o paciente não sabia a quem recorrer.",
        ],
      },
      {
        heading: "Quando faz sentido adotar um concierge hospitalar digital",
        paragraphs: [
          "Hospitais que recebem muitas solicitações por canais informais (verbalmente, por campainha genérica ou por indicação de terceiros), que têm dificuldade de medir o tempo de resposta às demandas dos pacientes, ou que percebem sobrecarga da enfermagem com pedidos que não são da sua área, costumam ser os que mais se beneficiam dessa camada de atendimento.",
        ],
      },
    ],
  },
  {
    slug: "reduzir-chamados-desnecessarios-enfermagem",
    title: "5 formas de reduzir chamados desnecessários para a enfermagem",
    description:
      "Estratégias práticas para diminuir a sobrecarga da equipe de enfermagem com solicitações que deveriam ir para outros setores do hospital.",
    category: "Eficiência Operacional",
    date: "2026-02-24",
    readTime: "6 min de leitura",
    relatedHref: "/automacao-hospitalar",
    relatedLabel: "Veja como a automação hospitalar reduz a sobrecarga das equipes",
    sections: [
      {
        paragraphs: [
          "É comum que a enfermagem receba chamados que, na verdade, deveriam ser direcionados a outras equipes — hotelaria, manutenção, nutrição. O paciente aciona quem sabe chamar, e isso quase sempre é a enfermagem, mesmo quando o pedido não é assistencial.",
          "O resultado é interrupção constante de uma equipe que já lida com alta demanda, tempo de resposta maior para todo mundo e perda de rastreabilidade sobre o que de fato está sendo pedido. Veja cinco formas práticas de reduzir esse problema.",
        ],
      },
      {
        heading: "1. Dê ao paciente um canal claro para cada tipo de pedido",
        paragraphs: [
          "Se o único jeito de pedir algo é chamar \"alguém\", o paciente vai chamar quem está mais acessível — geralmente a enfermagem. Oferecer um canal único e simples (como WhatsApp) que já direciona automaticamente cada tipo de solicitação reduz drasticamente esse padrão.",
        ],
      },
      {
        heading: "2. Automatize a triagem inicial",
        paragraphs: [
          "Uma triagem automática com inteligência artificial classifica a solicitação assim que ela chega, sem depender de um profissional para decidir o encaminhamento. Isso tira da enfermagem o papel de \"telefonista\" de demandas que não são da sua área.",
        ],
      },
      {
        heading: "3. Meça de onde vêm os chamados",
        paragraphs: [
          "Sem dado, é difícil saber quanto da carga da enfermagem é realmente assistencial. Registrar cada solicitação por tipo e setor de origem permite identificar padrões — por exemplo, se um determinado turno ou ala concentra mais pedidos de hotelaria mal direcionados.",
        ],
      },
      {
        heading: "4. Padronize o encaminhamento entre setores",
        paragraphs: [
          "Quando a enfermagem recebe um pedido que não é dela, o processo de repassar para o setor certo deveria ser rápido e padronizado — idealmente automático — para não gerar uma segunda interrupção só para transferir a demanda.",
        ],
      },
      {
        heading: "5. Comunique aos pacientes e acompanhantes o novo canal",
        paragraphs: [
          "De nada adianta ter um canal melhor se ninguém sabe que ele existe. Comunicação clara na admissão do paciente sobre como e onde solicitar cada tipo de ajuda é parte essencial da mudança de comportamento.",
          "No piloto realizado pela Amiko na Santa Casa de Misericórdia de Passos, a combinação dessas práticas — com a MOARA como camada de triagem — resultou em redução de cerca de 70% em demandas simples que antes chegavam às equipes de forma indireta. ",
        ],
      },
    ],
  },
  {
    slug: "como-medir-tempo-resposta-hospitalar",
    title: "Como medir (e melhorar) o tempo de resposta hospitalar",
    description:
      "Por que o tempo de resposta é um dos indicadores mais importantes da experiência do paciente, e como medi-lo de forma confiável.",
    category: "Experiência do Paciente",
    date: "2026-03-05",
    readTime: "5 min de leitura",
    relatedHref: "/experiencia-do-paciente",
    relatedLabel: "Saiba mais sobre experiência do paciente em hospitais",
    sections: [
      {
        paragraphs: [
          "Tempo de resposta é quanto tempo se passa entre o paciente pedir ajuda e receber uma solução. É um dos fatores que mais pesam na percepção de qualidade do atendimento — e, ainda assim, é raro encontrar hospitais que conseguem medi-lo de forma confiável.",
        ],
      },
      {
        heading: "Por que é difícil medir sem tecnologia",
        paragraphs: [
          "Quando as solicitações acontecem verbalmente — o paciente chama um profissional que passa pelo quarto, ou aciona uma campainha genérica — não existe um registro estruturado de quando o pedido foi feito e quando foi resolvido. Sem esse registro, o tempo de resposta vira uma percepção subjetiva, não um dado.",
        ],
      },
      {
        heading: "O que medir",
        paragraphs: [
          "Três métricas costumam ser as mais úteis: tempo entre a abertura da solicitação e o primeiro encaminhamento à equipe responsável; tempo entre o encaminhamento e a resolução efetiva; e volume de solicitações por tipo e por horário, para identificar picos de demanda.",
        ],
      },
      {
        heading: "Um exemplo real",
        paragraphs: [
          "No piloto da MOARA na Santa Casa de Misericórdia de Passos (MG), entre agosto de 2024 e abril de 2025, solicitações que antes levavam de 6 a 12 minutos para chegar ao setor correto passaram a ser encaminhadas em cerca de 10 segundos. Outros fluxos, que levavam de 16 a 22 minutos, passaram a levar entre 3 e 10 minutos.",
          "Esses números só puderam ser medidos porque cada solicitação passou a gerar um registro digital com horário de abertura, setor de destino e horário de resolução — o que não existia antes.",
        ],
      },
      {
        heading: "Como melhorar depois de medir",
        paragraphs: [
          "Depois de ter o dado, o passo seguinte é agir sobre os gargalos identificados: se um tipo de solicitação demora mais que os outros, ou se um horário concentra mais volume do que a equipe consegue atender, esses são os pontos prioritários para revisar processo — antes de simplesmente aumentar a equipe.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

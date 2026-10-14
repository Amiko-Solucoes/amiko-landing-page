export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  /** Lista opcional exibida depois dos parágrafos. */
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  /** Data da última revisão relevante do texto (ISO). */
  updated?: string;
  readTime: string;
  /** Perguntas frequentes exibidas no fim do post e marcadas como FAQPage. */
  faq?: { q: string; a: string }[];
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
    updated: "2026-10-11",
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
          "O fluxo típico de um concierge hospitalar digital como a MOARA, da Amiko Soluções, segue três etapas: o paciente ou acompanhante faz uma solicitação por um canal simples, como o WhatsApp (ou por voz, em quartos com assistente de voz); a inteligência artificial interpreta a necessidade e classifica automaticamente o tipo de demanda; e a solicitação é encaminhada diretamente à equipe responsável, já com o contexto necessário para resolver o pedido.",
          "Esse encaminhamento automático é o que evita que solicitações simples — como um travesseiro ou um problema no ar-condicionado — acabem chegando à enfermagem por engano, só porque o paciente não sabia a quem recorrer.",
        ],
      },
      {
        heading: "Quando faz sentido adotar um concierge hospitalar digital",
        paragraphs: [
          "Hospitais que recebem muitas solicitações por canais informais (verbalmente, por campainha genérica ou por indicação de terceiros), que têm dificuldade de medir o tempo de resposta às demandas dos pacientes, ou que percebem sobrecarga da enfermagem com pedidos que não são da sua área, costumam ser os que mais se beneficiam dessa camada de atendimento.",
          "Na Santa Casa de Misericórdia de Passos (MG), por exemplo, a MOARA registrou 522 solicitações entre agosto de 2024 e abril de 2025: 157 foram respondidas pela própria assistente e 218 foram direto para hotelaria, nutrição, limpeza e outras equipes. Somadas, representam 71,8% das interações que antes dependeriam da enfermagem.",
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
    updated: "2026-10-11",
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
          "No piloto realizado pela Amiko na Santa Casa de Misericórdia de Passos (MG), com a MOARA como camada de triagem pelo WhatsApp, 71,8% das 522 interações registradas deixaram de ser intermediadas pela enfermagem: 157 foram resolvidas automaticamente (horário de refeição, visitas, internet) e 218 foram enviadas direto às equipes complementares.",
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
    updated: "2026-10-11",
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
          "No piloto da MOARA na Santa Casa de Misericórdia de Passos (MG), entre agosto de 2024 e abril de 2025, foram registradas 522 solicitações de pacientes. A média de resposta da enfermagem foi de 12 minutos, e os picos de pedidos se concentraram das 9h às 11h e das 18h às 20h.",
          "O relatório também mostrou uma armadilha comum: a média foi puxada para cima por chamados que ficaram abertos por longos períodos, principalmente à noite — pedidos já atendidos, mas não encerrados no sistema. Por isso vale acompanhar a mediana, além da média, e combinar com a equipe quem encerra cada chamado.",
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
  {
    slug: "o-que-pacientes-pedem-no-leito",
    title: "O que os pacientes pedem durante a internação: análise de 522 solicitações reais",
    description:
      "Analisamos 522 pedidos feitos por pacientes à MOARA na Santa Casa de Passos: o que pedem, a que horas, para quem — e o que isso ensina sobre atendimento beira-leito.",
    category: "Experiência do Paciente",
    date: "2026-10-11",
    readTime: "7 min de leitura",
    relatedHref: "/atendimento-beira-leito",
    relatedLabel: "Veja como funciona o atendimento beira-leito com a MOARA",
    sections: [
      {
        paragraphs: [
          "Quando se fala em atendimento beira-leito, a imagem mais comum é a do paciente apertando a campainha e esperando a enfermagem. Mas o que, exatamente, ele quer quando chama? Sem registro, a resposta costuma ser um palpite.",
          "Entre agosto de 2024 e abril de 2025, a MOARA, concierge hospitalar digital da Amiko Soluções, registrou 522 solicitações de pacientes e acompanhantes na Santa Casa de Misericórdia de Passos (MG). Como cada pedido foi feito por escrito, com as palavras do próprio paciente, foi possível ver com clareza o que acontece no leito.",
        ],
      },
      {
        heading: "Para onde vão os pedidos",
        paragraphs: ["A distribuição por área mostra que a maior parte do que o paciente pede não é tarefa da enfermagem:"],
        bullets: [
          "30,1% foram resolvidos pela própria assistente, sem intervenção humana (157 pedidos);",
          "28,1% eram de enfermagem;",
          "23,9% eram de hotelaria (limpeza, água, enxoval);",
          "17,8% eram de apoio assistencial.",
        ],
      },
      {
        paragraphs: [
          "Somando os 157 pedidos resolvidos automaticamente e os 218 enviados diretamente às equipes complementares, 71,8% das interações deixaram de ser intermediadas pela enfermagem. Com uma campainha comum, todas elas teriam passado primeiro pelo posto de enfermagem.",
        ],
      },
      {
        heading: "As frases mais comuns",
        paragraphs: [
          "Para a enfermagem, os pedidos mais frequentes foram diretos: “Acabou o soro”, “Estou com dor”, “Quero ir ao banheiro”. Para hotelaria e nutrição: “Solicitar uma coberta”, “Pode chamar a limpeza?”, “Quero pedir um lanche”.",
          "Entre os pedidos que a própria MOARA resolveu estavam perguntas como “Qual horário do almoço?”, “Como entro na internet?”, “Que horas posso receber visita?” e “Queria saber se o café já foi servido”. São dúvidas simples, mas, sem um canal próprio, cada uma delas ocupa alguém da equipe.",
        ],
      },
      {
        heading: "O paciente também pede acolhimento",
        paragraphs: [
          "Um achado que não aparece em nenhuma planilha de campainha: frases como “Estou triste”, “Quero conversar com alguém” e “Queria ligar para minha mãe”. Nos fins de semana, as interações de conforto emocional ganharam peso.",
          "Esse tipo de mensagem não deve ser respondido apenas por um sistema. O papel da tecnologia é tornar o pedido visível para que a equipe certa — enfermagem, psicologia, capelania ou serviço social — possa agir.",
        ],
      },
      {
        heading: "Quando os pedidos acontecem",
        paragraphs: [
          "Os picos ficaram entre 9h e 11h e entre 18h e 20h. Nos dias úteis predominaram higiene, refeições e ajustes de quarto. Na pediatria, depois da migração para o WhatsApp, a interação foi especialmente alta — os pais passaram a pedir pelo celular sem sair do lado da criança.",
        ],
      },
      {
        heading: "O pedido que ninguém esperava: controlar o quarto",
        paragraphs: [
          "Mesmo sem integração com os equipamentos do quarto durante o piloto, apareceram muitos pedidos como “Está muito quente aqui, pode diminuir o ar?”, “A luz está forte” e “Pode baixar o volume da televisão?”. O sinal é claro: o paciente quer mais autonomia sobre o ambiente. No Hospital São Lucas (BH), a MOARA já opera por voz controlando iluminação e ar-condicionado.",
        ],
      },
      {
        heading: "O que fazer com esses dados",
        paragraphs: ["Para gestores de enfermagem, hotelaria e experiência do paciente, quatro lições práticas:"],
        bullets: [
          "Dimensione as equipes pelos picos reais (manhã e início da noite), não pela média do dia;",
          "Tire da enfermagem o que não é assistencial: hotelaria e dúvidas representam boa parte do volume;",
          "Publique as informações mais perguntadas (refeições, visitas, internet) em um canal que responda sozinho;",
          "Crie um fluxo para pedidos emocionais, com responsável definido.",
        ],
      },
    ],
    faq: [
      {
        q: "Quais são os pedidos mais comuns de pacientes internados?",
        a: "Na análise de 522 solicitações feitas à MOARA na Santa Casa de Passos, os pedidos mais comuns foram dúvidas sobre a rotina (refeições, visitas, internet), pedidos de enfermagem (soro, dor, banheiro) e de hotelaria (coberta, limpeza, lanche).",
      },
      {
        q: "Qual a porcentagem de chamados de pacientes que não são da enfermagem?",
        a: "No piloto de Passos, apenas 28,1% dos pedidos eram de enfermagem. Somando respostas automáticas e pedidos encaminhados diretamente a outras equipes, 71,8% das interações não precisaram passar pela enfermagem.",
      },
    ],
  },
  {
    slug: "whatsapp-para-pacientes-internados",
    title: "WhatsApp para pacientes internados: por que o uso mais que triplicou em um hospital",
    description:
      "Na Santa Casa de Passos, trocar a versão virtual da MOARA pelo WhatsApp aumentou o uso de 1,5 para 5,2 pedidos por dia. Veja por que funcionou e que cuidados tomar.",
    category: "Atendimento Beira-Leito",
    date: "2026-10-11",
    readTime: "6 min de leitura",
    relatedHref: "/concierge-hospitalar",
    relatedLabel: "Conheça a MOARA, concierge hospitalar no WhatsApp",
    sections: [
      {
        paragraphs: [
          "Toda tecnologia para pacientes enfrenta a mesma barreira: se for difícil de começar a usar, ninguém usa. No piloto da MOARA na Santa Casa de Misericórdia de Passos (MG), essa barreira ficou visível em números.",
          "A MOARA começou em uma versão virtual própria. Em fevereiro de 2025, a Ala B passou a usar a versão pelo WhatsApp; em 18 de março, a Ala Pediátrica fez a mesma migração.",
        ],
      },
      {
        heading: "O que aconteceu com o uso",
        paragraphs: ["A média de pedidos por dia mudou assim:"],
        bullets: [
          "Ala B: de 1,5 para 5,2 chamados por dia (cerca de 3,5 vezes mais);",
          "Ala Pediátrica: de 0,9 para 4,3 chamados por dia (cerca de 4,8 vezes mais).",
        ],
      },
      {
        paragraphs: [
          "O relatório do piloto concluiu que a migração para o WhatsApp foi decisiva para o sucesso do projeto, porque reduziu a barreira tecnológica de forma significativa.",
        ],
      },
      {
        heading: "Por que o WhatsApp funciona no leito",
        paragraphs: [],
        bullets: [
          "Não exige instalar nada nem criar login: o paciente já sabe usar;",
          "O acompanhante pode pedir pelo paciente, do próprio celular — essencial na pediatria e com idosos;",
          "Mensagens escritas deixam o pedido claro para a equipe;",
          "O paciente vê que o pedido foi recebido, o que reduz a ansiedade de “será que alguém ouviu?”.",
        ],
      },
      {
        heading: "Cuidados antes de adotar",
        paragraphs: [
          "Usar WhatsApp no hospital pede algumas definições de governança. As principais:",
        ],
        bullets: [
          "Use um número oficial do hospital, via WhatsApp Business API, e não celulares pessoais da equipe;",
          "Defina o escopo: pedidos operacionais e informações de rotina, não orientação clínica;",
          "Deixe claro na admissão para que o canal serve e o que fazer em emergência;",
          "Alinhe com o encarregado de dados (DPO) a base legal e a política de privacidade do canal;",
          "Defina quem encerra cada chamado, para que os indicadores de tempo sejam confiáveis.",
        ],
      },
      {
        heading: "E quem não usa celular?",
        paragraphs: [
          "Para pacientes sem celular ou com mobilidade limitada, a MOARA também pode funcionar como assistente de quarto por voz, como no Hospital São Lucas (BH). E a campainha continua lá para emergências.",
        ],
      },
    ],
    faq: [
      {
        q: "É seguro usar WhatsApp para atender pacientes internados?",
        a: "Pode ser, desde que o hospital use um número oficial via WhatsApp Business API, limite o canal a pedidos operacionais e de rotina, e defina com seu encarregado de dados a base legal e a política de privacidade. O canal não deve ser usado para orientação clínica.",
      },
      {
        q: "O paciente precisa instalar algum aplicativo para usar a MOARA?",
        a: "Não. A MOARA funciona dentro do WhatsApp que o paciente ou o acompanhante já usa.",
      },
    ],
  },
  {
    slug: "concierge-virtual-para-eventos-hacktown",
    title: "Concierge virtual em eventos: o que aprendemos com a Margarida no HackTown 2026",
    description:
      "No HackTown 2026, a tecnologia MOARA virou a Margarida: 661 consultas de participantes e 79 chamados de staff, com mediana de 7,9 minutos até o atendimento. Veja os números e as lições.",
    category: "Concierge Virtual",
    date: "2026-10-11",
    readTime: "7 min de leitura",
    relatedHref: "/concierge-virtual",
    relatedLabel: "Concierge virtual para hospitais, eventos e residências",
    sections: [
      {
        paragraphs: [
          "O HackTown é um festival de inovação, música e cultura espalhado por Santa Rita do Sapucaí (MG), com atividades simultâneas em dezenas de espaços — do INATEL à ETE, da FAI ao centro da cidade. Para quem participa, as perguntas se repetem: o que tem agora? Onde fica essa sala? Onde retiro o brinde? Para quem organiza, cada dúvida ou problema técnico é uma interrupção.",
          "De 3 a 7 de setembro de 2026, a tecnologia MOARA, da Amiko Soluções, operou no evento com a persona Margarida, em duas frentes: orientação aos participantes e concierge operacional para equipes e líderes de espaço.",
        ],
      },
      {
        heading: "Frente 1: orientação aos participantes",
        paragraphs: ["Na frente de dúvidas dos participantes, a Margarida registrou:"],
        bullets: [
          "661 consultas sobre o evento, em 416 sessões;",
          "486 consultas (73,5%) sobre programação e localização;",
          "219 respostas com link de mapa para guiar o deslocamento;",
          "110 casos orientados para apoio humano, como credenciamento, saúde e segurança.",
        ],
      },
      {
        paragraphs: [
          "O pico foi das 14h às 17h59, com 42,2% das interações. A busca mais comum foi por agenda em um dia ou horário específico — “quais palestras agora?”, “o que tem hoje à tarde?”.",
        ],
      },
      {
        heading: "Frente 2: concierge operacional para o staff",
        paragraphs: ["Para equipes e líderes de espaço, a Margarida funcionou no WhatsApp como porta de entrada da central de ajuda:"],
        bullets: [
          "Mais de 340 sessões ativas;",
          "79 solicitações operacionais registradas, todas encerradas;",
          "Mediana de 7,9 minutos até o início do atendimento e de 22,2 minutos até o encerramento;",
          "83,5% das solicitações começaram a ser atendidas em até 30 minutos.",
        ],
      },
      {
        paragraphs: [
          "Pilhas, vídeo e projeção, cabos e áudio somaram 67,1% dos chamados — pedidos físicos, que de fato exigem alguém indo ao local. Ou seja, o que chegou às equipes humanas era, na maior parte, o que precisava de gente.",
        ],
      },
      {
        heading: "O que aprendemos",
        paragraphs: [],
        bullets: [
          "Dê ao assistente data, hora e status de cada atividade: a pergunta mais comum é “o que tem agora?”;",
          "Mantenha um cadastro de espaços com apelidos, patrocinadores e referências de entrada;",
          "Informações de brindes e ativações precisam de um responsável para atualizar durante o evento;",
          "Kits de pilhas, cabos e adaptadores por espaço reduzem chamados e deslocamentos;",
          "Meça desde o início: feedback de utilidade, motivo de cada encaminhamento e tempo real de resposta.",
        ],
      },
      {
        heading: "Uma ressalva honesta",
        paragraphs: [
          "Sessões não são pessoas únicas, e a relação entre sessões e chamados não é uma taxa formal de contenção. Os números mostram escala e triagem; não medem, sozinhos, horas economizadas. É assim que preferimos apresentar resultados: com o que os dados sustentam.",
        ],
      },
    ],
    faq: [
      {
        q: "O que é um concierge virtual para eventos?",
        a: "É um assistente digital, normalmente no WhatsApp ou em totens, que responde dúvidas de participantes sobre programação e locais e recebe chamados das equipes, encaminhando cada um ao responsável. No HackTown 2026, a tecnologia MOARA operou assim com a persona Margarida.",
      },
      {
        q: "Quantas consultas a Margarida atendeu no HackTown 2026?",
        a: "661 consultas sobre o evento em 416 sessões, além de 79 solicitações operacionais do staff registradas a partir de mais de 340 sessões no WhatsApp.",
      },
    ],
  },
  {
    slug: "como-escolher-concierge-hospitalar-digital",
    title: "Como escolher um concierge hospitalar digital: 10 perguntas para fazer ao fornecedor",
    description:
      "Checklist com 10 perguntas para avaliar soluções de concierge hospitalar digital e assistente virtual beira-leito antes de contratar: canais, encaminhamento, dados, segurança e custo.",
    category: "Concierge Hospitalar",
    date: "2026-10-11",
    readTime: "6 min de leitura",
    relatedHref: "/moara",
    relatedLabel: "Veja como a MOARA responde a cada pergunta",
    sections: [
      {
        paragraphs: [
          "Concierge hospitalar digital, assistente virtual beira-leito, campainha inteligente: os nomes variam e as soluções também. Para comparar fornecedores com critério, use as perguntas abaixo. Elas valem para qualquer solução — inclusive a MOARA, da Amiko.",
        ],
      },
      {
        heading: "1. Qual é o canal do paciente?",
        paragraphs: ["Aplicativo próprio, tablet, WhatsApp, voz? Quanto menos o paciente precisar instalar e aprender, maior a adesão. Na Santa Casa de Passos, a troca de uma versão própria pelo WhatsApp aumentou o uso em cerca de 3,5 vezes."],
      },
      {
        heading: "2. O acompanhante consegue pedir?",
        paragraphs: ["Na pediatria e com idosos, é o acompanhante quem mais usa. Confirme se ele pode pedir do próprio celular."],
      },
      {
        heading: "3. Entende frases livres ou só menus?",
        paragraphs: ["Menus funcionam para pedidos previstos. Pacientes escrevem “está muito quente aqui” ou “acabou o soro”. Peça para testar com frases reais."],
      },
      {
        heading: "4. Como decide para quem vai o pedido?",
        paragraphs: ["O encaminhamento por setor (enfermagem, hotelaria, nutrição, limpeza, manutenção) é o que tira carga da enfermagem. Pergunte como as regras são configuradas e quem pode alterá-las."],
      },
      {
        heading: "5. O que ele resolve sozinho?",
        paragraphs: ["Dúvidas sobre refeições, visitas e internet podem ser respondidas automaticamente. Em Passos, 30,1% dos pedidos foram resolvidos assim."],
      },
      {
        heading: "6. Como a equipe recebe e encerra os chamados?",
        paragraphs: ["Se encerrar for trabalhoso, os chamados ficam abertos e os indicadores de tempo perdem valor. Veja a tela da equipe, não só a do paciente."],
      },
      {
        heading: "7. Quais indicadores a gestão terá?",
        paragraphs: ["No mínimo: volume por setor, tempo até o atendimento, tempo até o encerramento, horários de pico e motivos de contato."],
      },
      {
        heading: "8. Quais são os limites da solução?",
        paragraphs: ["Uma boa resposta inclui o que o sistema não faz: diagnóstico, orientação clínica, substituição dos protocolos de emergência. Desconfie de quem promete tudo."],
      },
      {
        heading: "9. Como fica a privacidade dos dados?",
        paragraphs: ["Pergunte onde os dados ficam, quem acessa, por quanto tempo são guardados e como o fornecedor apoia o hospital nas exigências da LGPD. Envolva o encarregado de dados (DPO) do hospital."],
      },
      {
        heading: "10. Como é cobrado e quanto tempo leva para implantar?",
        paragraphs: ["Modelos comuns são por leito ou por unidade. Peça o custo total com implantação e integrações. A MOARA, por exemplo, tem planos a partir de R$ 20 por leito por mês, variando conforme o plano e o número de leitos."],
      },
    ],
    faq: [
      {
        q: "Quanto custa um concierge hospitalar digital?",
        a: "Depende do fornecedor e do modelo de cobrança, normalmente por leito ou por unidade. A MOARA, da Amiko Soluções, tem planos a partir de R$ 20 por leito por mês; o valor varia conforme o plano e depende de leitos, canais e integrações.",
      },
      {
        q: "Quais critérios usar para escolher um assistente virtual beira-leito?",
        a: "Canal do paciente, possibilidade de o acompanhante pedir, compreensão de frases livres, encaminhamento por setor, respostas automáticas, experiência da equipe ao encerrar chamados, indicadores de gestão, limites declarados, privacidade e custo total.",
      },
    ],
  },
  {
    slug: "assistente-virtual-hospitalar",
    title: "Assistente virtual hospitalar: o que é, o que faz e onde não deve atuar",
    description:
      "Entenda os tipos de assistente virtual hospitalar — de agendamento, de triagem e beira-leito —, o que cada um resolve e quais limites devem ser respeitados.",
    category: "Atendimento Beira-Leito",
    date: "2026-10-11",
    readTime: "5 min de leitura",
    relatedHref: "/atendimento-beira-leito",
    relatedLabel: "Saiba mais sobre atendimento beira-leito com IA",
    sections: [
      {
        paragraphs: [
          "“Assistente virtual hospitalar” é um termo amplo. Ele pode se referir a sistemas muito diferentes, que atuam em momentos distintos da jornada do paciente. Entender a diferença evita comparar soluções que não competem entre si.",
        ],
      },
      {
        heading: "Três tipos de assistente virtual no hospital",
        paragraphs: [],
        bullets: [
          "Antes da internação — agendamento e atendimento ao público: marca consultas e exames, envia preparo e responde dúvidas administrativas;",
          "Na porta de entrada — triagem e orientação: organiza o fluxo do pronto atendimento e orienta o paciente sobre onde ir;",
          "Durante a internação — assistente beira-leito ou concierge hospitalar: recebe os pedidos do paciente e do acompanhante no quarto e encaminha cada um à equipe certa.",
        ],
      },
      {
        heading: "O assistente beira-leito",
        paragraphs: [
          "É o tipo em que a MOARA, da Amiko Soluções, atua. O paciente escreve pelo WhatsApp (ou fala, em quartos com assistente de voz) o que precisa. A inteligência artificial entende o pedido, responde o que é informativo e envia o restante para enfermagem, hotelaria, nutrição, limpeza ou manutenção, com o contexto do pedido.",
          "O ganho principal não é responder mais rápido a uma pergunta, e sim tirar do caminho da enfermagem tudo o que não é assistencial. Na Santa Casa de Passos, isso representou 71,8% das interações registradas.",
        ],
      },
      {
        heading: "Onde um assistente virtual não deve atuar",
        paragraphs: ["Uma solução responsável declara seus limites. No caso de um assistente beira-leito:"],
        bullets: [
          "Não faz diagnóstico nem dá orientação clínica;",
          "Não substitui a avaliação da equipe assistencial;",
          "Não substitui os protocolos e sistemas de chamada de emergência;",
          "Não deve deixar sem resposta humana mensagens de sofrimento emocional — precisa encaminhá-las.",
        ],
      },
      {
        heading: "Como saber se o hospital precisa de um",
        paragraphs: [
          "Sinais comuns: a enfermagem recebe muitos pedidos de hotelaria, ninguém consegue dizer quanto tempo os pacientes esperam, e as pesquisas de satisfação citam demora ou falta de informação. Se esses sinais aparecem, um assistente beira-leito tende a gerar resultado rápido.",
        ],
      },
    ],
    faq: [
      {
        q: "O que é um assistente virtual hospitalar?",
        a: "É um sistema com inteligência artificial que conversa com pacientes em algum ponto da jornada hospitalar. Pode atuar no agendamento, na triagem ou durante a internação, como assistente beira-leito — caso da MOARA, da Amiko Soluções.",
      },
      {
        q: "Assistente virtual pode dar orientação médica ao paciente internado?",
        a: "Não deve. Um assistente beira-leito organiza e encaminha pedidos; orientação clínica é responsabilidade da equipe assistencial.",
      },
    ],
  },
  {
    slug: "hotelaria-hospitalar-pedidos-de-pacientes",
    title: "Hotelaria hospitalar: como organizar os pedidos dos pacientes sem sobrecarregar a enfermagem",
    description:
      "Quase um quarto dos pedidos de pacientes é de hotelaria. Veja como receber pedidos de limpeza, água, enxoval e refeição direto na equipe certa — com dados de um hospital real.",
    category: "Eficiência Operacional",
    date: "2026-10-11",
    readTime: "5 min de leitura",
    relatedHref: "/automacao-hospitalar",
    relatedLabel: "Automação hospitalar e eficiência operacional",
    sections: [
      {
        paragraphs: [
          "Na Santa Casa de Misericórdia de Passos (MG), 23,9% das 522 solicitações registradas pela MOARA eram de hotelaria: limpeza, pedidos de água, enxoval, lanches. Sem um canal próprio, quase todos esses pedidos chegariam primeiro à enfermagem.",
        ],
      },
      {
        heading: "O caminho de um copo de água",
        paragraphs: [
          "No atendimento tradicional, o paciente aperta a campainha; alguém da enfermagem vai ao quarto, descobre que é um copo de água, volta e avisa a hotelaria; a hotelaria leva a água. São dois deslocamentos e duas equipes para um pedido simples.",
          "Com um concierge hospitalar digital, o paciente escreve “quero um copo de água” e a hotelaria recebe direto, sabendo o quarto e o pedido. Como resumiu Joyce Cristina, da hotelaria da Santa Casa de Passos: “O paciente solicita algo e pelo sistema já conseguimos ver o que ele está precisando, sem a necessidade de ir até o quarto duas vezes.”",
        ],
      },
      {
        heading: "Cinco práticas para a hotelaria hospitalar",
        paragraphs: [],
        bullets: [
          "Separe os pedidos de hotelaria dos assistenciais já na entrada, com encaminhamento automático;",
          "Defina o que cada equipe recebe: limpeza, rouparia, nutrição, manutenção;",
          "Prepare-se para os picos: em Passos, das 9h às 11h e das 18h às 20h;",
          "Feche o ciclo: encerre o chamado ao atender, para medir o tempo real;",
          "Revise mensalmente os motivos mais comuns e antecipe o que dá para antecipar (cobertores à noite, por exemplo).",
        ],
      },
      {
        heading: "O efeito na experiência do paciente",
        paragraphs: [
          "Pedidos de hotelaria parecem pequenos, mas são os que o paciente mais lembra: o cobertor que demorou, a limpeza que não veio. Quando eles chegam direto a quem resolve, a enfermagem ganha tempo e o paciente percebe cuidado — “dá sensação de que se preocupam com a gente”, como disse um paciente em Passos.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto dos pedidos de pacientes é de hotelaria?",
        a: "No piloto da MOARA na Santa Casa de Passos, 23,9% das 522 solicitações eram de hotelaria, como limpeza, água e enxoval.",
      },
      {
        q: "Como automatizar a hotelaria hospitalar?",
        a: "Com um canal digital em que o paciente faz o pedido e um sistema que o encaminha automaticamente à equipe de hotelaria, com quarto e descrição, sem passar pela enfermagem.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const institutionInfo = {
  name: "Instituto Politécnico Privado Nossa Senhora da Anunciação",
  shortName: "IPP Nossa Senhora da Anunciação",
  location: "Luanda Sul, Viana - Angola",
  motto: "Oração e Educação",
  academicYear: "Ano Lectivo 2026 / 2027",
  edition: "UNETIC 2026/2027",
  heroBadge: "IPP Nossa Senhora da Anunciação — Luanda Sul",
  mainHeadline: "UNETIC 2026/2027 — Unigénito na Era das TIC",
  projectMotto: "Conhecimento que identifica problemas. Tecnologia e gestão que apresentam soluções.",
  secondaryText: "Plano Institucional de Actividade & Fórum Técnico-Científico dos Alunos Finalistas da 13.ª Classe.",
  stats: [
    { label: "Cursos Técnicos", value: "5", suffix: "Áreas de Investigação" },
    { label: "Alunos Finalistas", value: "13.ª", suffix: "Classe Integrada" },
    { label: "Ciclo Metodológico", value: "6", suffix: "Etapas Rigorosas" },
    { label: "Período Lectivo", value: "3", suffix: "Trimestres" },
  ]
};

export const pathwaysData = [
  {
    id: "informatica",
    name: "Informática de Gestão & Técnico de Informática",
    shortTitle: "Informática & Redes",
    category: "Tecnologia, Sistemas & Redes",
    color: "#0265dc", // UNETIC Electric Blue
    accentColor: "#00A859", // UNETIC Tech Green
    badgeBg: "bg-blue-50 text-[#0265dc] border-blue-200",
    gradient: "from-[#0265dc] to-[#00A859]",
    iconType: "Monitor",
    summary: "Convergência entre arquitetura de software corporativo, redes seguras, bases de dados e automação de serviços para a sociedade angolana.",
    mission: "Capacitar finalistas a diagnosticar problemas comunitários e empresariais, transformando desafios em sistemas digitais robustos e ferramentas de atendimento inteligente.",
    investigationThemes: [
      {
        title: "Plataformas Escolares Inteligentes",
        description: "Sistemas integrados para gestão de notas, assiduidade, comunicação com encarregados de educação e relatórios pedagógicos automáticos.",
        tag: "Educação & Gestão",
        beneficiary: "Instituições de ensino e comunidades escolares"
      },
      {
        title: "Sistemas de Gestão para PMEs Angolanas",
        description: "Aplicações simples para controlo de stock, vendas e faturação em micro e pequenas empresas.",
        tag: "Comércio & Produtividade",
        beneficiary: "Pequenos comerciantes e empreendedores locais"
      },
      {
        title: "Sistemas Digitais de Denúncias Comunitárias",
        description: "Plataformas que permitam aos cidadãos reportar problemas locais (falhas de iluminação, acumulação de lixo, pontos de drenagem entupidos) às administrações locais.",
        tag: "Cidadania & Governação Local",
        beneficiary: "Administrações municipais e cidadãos de Luanda Sul"
      },
      {
        title: "Gestão Inteligente de Filas de Atendimento",
        description: "Soluções digitais para otimizar o atendimento ao público em serviços comunitários e comerciais.",
        tag: "Otimização & Hardware/Software",
        beneficiary: "Repartições públicas, centros médicos e serviços"
      }
    ],
    technologies: ["React.js", "Node.js / Express", "PostgreSQL / MySQL", "Cisco Packet Tracer", "Linux Server", "IoT / Microcontroladores", "APIs REST"],
    beneficiaries: "PMEs, Administrações Municipais, Escolas e Centros Comunitários."
  },
  {
    id: "construcao-civil",
    name: "Desenhador Projectista / Construção Civil",
    shortTitle: "Construção Civil & Projecto",
    category: "Arquitectura, Urbanismo & Obras",
    color: "#00A859", // UNETIC Tech Green
    accentColor: "#F59E0B", // UNETIC Solar Gold
    badgeBg: "bg-emerald-50 text-[#00A859] border-emerald-200",
    gradient: "from-[#00A859] to-[#059669]",
    iconType: "Building",
    summary: "Modelação arquitetónica, planeamento estrutural e engenharia aplicada às especificidades climáticas e urbanas de Luanda.",
    mission: "Desenvolver soluções de infraestrutura sustentável, drenagem de águas pluviais e habitação digna orientadas para a resiliência das comunidades.",
    investigationThemes: [
      {
        title: "Soluções Inspiradas no Projeto SONA",
        description: "Propostas arquitetónicas e urbanísticas adaptadas aos desafios das comunidades locais.",
        tag: "Urbanismo & Identidade",
        beneficiary: "Bairros periféricos e comunidades de Luanda"
      },
      {
        title: "Microprojetos de Drenagem Urbana",
        description: "Soluções funcionais de engenharia para mitigar as inundações em pontos críticos da cidade.",
        tag: "Engenharia Hidráulica & Pluvial",
        beneficiary: "Zonas críticas de circulação viária e residencial"
      },
      {
        title: "Habitação Económica e Funcional",
        description: "Modelos de residências acessíveis para famílias de baixa e média renda.",
        tag: "Habitação Social & Sustentabilidade",
        beneficiary: "Famílias de baixa e média renda"
      },
      {
        title: "Mobilidade Pedonal Segura e Bairros Resilientes",
        description: "Desenho de rotas pedonais em zonas escolares e modelos de urbanização adaptados a alterações climáticas.",
        tag: "Mobilidade Escolar & Clima",
        beneficiary: "Estudantes, peões e moradores de zonas escolares"
      }
    ],
    technologies: ["AutoCAD 2D/3D", "Autodesk Revit BIM", "SketchUp Pro", "Lumion", "Cálculo Estrutural", "Maquetes Físicas"],
    beneficiaries: "Comunidades escolares circunvizinhas, Administração Municipal e Cooperativas Habitacionais."
  },
  {
    id: "contabilidade-gestao",
    name: "Contabilidade e Gestão",
    shortTitle: "Contabilidade & Fiscalidade",
    category: "Fiscalidade, Finanças & Auditoria",
    color: "#F59E0B", // UNETIC Solar Gold
    accentColor: "#0265dc", // UNETIC Electric Blue
    badgeBg: "bg-amber-50 text-[#d97706] border-amber-200",
    gradient: "from-[#F59E0B] to-[#d97706]",
    iconType: "Calculator",
    summary: "Rigor no enquadramento fiscal, transparência documental e adaptação à digitalização tributária exigida pela AGT.",
    mission: "Capacitar finalistas com competências práticas de conformidade fiscal SAF-T, análise de custos e mitigação de perdas para o tecido económico nacional.",
    investigationThemes: [
      {
        title: "Adaptação ao SAF-T e Exigências da AGT",
        description: "Projetos focados na transição digital e cumprimento do calendário fiscal angolano (com foco no SAF-T de contabilidade para 2026).",
        tag: "Conformidade Tributária 2026",
        beneficiary: "Empresas em fase de reporte eletrónico e transição fiscal"
      },
      {
        title: "Análise do Impacto do IVA",
        description: "Estudos sobre como o imposto afeta as margens de lucro e os preços das PMEs.",
        tag: "Economia & Margens Comerciais",
        beneficiary: "Comerciantes, retalhistas e consumidores"
      },
      {
        title: "Controlo Interno e Prevenção de Fraudes",
        description: "Modelos práticos para reduzir perdas e desvios de inventário em pequenos negócios.",
        tag: "Auditoria & Proteção Patrimonial",
        beneficiary: "Pequenos operadores e negócios familiares"
      },
      {
        title: "Simulação de Custos de Projetos",
        description: "Orçamentação real para os protótipos e maquetes criados nos outros cursos.",
        tag: "Orçamentação Interdisciplinar",
        beneficiary: "Equipas de engenharia, construção civil e tecnologia"
      }
    ],
    technologies: ["Software Primavera / PHC", "Excel Financeiro Avançado (VBA)", "Validador SAF-T AGT", "PGC Angolano", "SPSS / Análise Estatística"],
    beneficiaries: "Pequenos e médios negócios, cooperativas de crédito e gabinetes de contabilidade."
  },
  {
    id: "gestao-empresarial",
    name: "Gestão Empresarial",
    shortTitle: "Gestão Empresarial",
    category: "Estratégia, Continuidade & Inovação",
    color: "#034ea2", // UNETIC Deep Royal Blue
    accentColor: "#00A859", // UNETIC Tech Green
    badgeBg: "bg-sky-50 text-[#034ea2] border-sky-200",
    gradient: "from-[#034ea2] to-[#0265dc]",
    iconType: "TrendingUp",
    summary: "Estratégia de negócios, resiliência operacional frente a oscilações de infraestrutura e criação de modelos de negócio sustentáveis.",
    mission: "Preparar gestores modernos preparados para transformar empresas tradicionais, assegurar a continuidade operacional e liderar o empreendedorismo jovem.",
    investigationThemes: [
      {
        title: "Planos de Sobrevivência e Crescimento de PMEs",
        description: "Estratégias de gestão para empresas locais enfrentarem cenários económicos desafiantes.",
        tag: "Resiliência Económica",
        beneficiary: "PMEs e microempreendedores angolanos"
      },
      {
        title: "Digitalização de Negócios Tradicionais",
        description: "Modelos para migrar negócios locais/comunitários para plataformas digitais.",
        tag: "Transformação Digital",
        beneficiary: "Comércio tradicional de bairro e serviços de proximidade"
      },
      {
        title: "Plano de Continuidade Operacional",
        description: "Soluções de gestão para manter empresas funcionais perante falhas frequentes de energia e internet.",
        tag: "Operações & Contingência",
        beneficiary: "Empresas locais e prestadores de serviços essenciais"
      },
      {
        title: "Empreendedorismo Jovem",
        description: "Modelos de negócios inovadores voltados para responder a necessidades concretas de Luanda.",
        tag: "Inovação & Emprego",
        beneficiary: "Jovens finalistas e ecossistema de startups de Luanda"
      }
    ],
    technologies: ["Business Model Canvas", "Matriz SWOT / Análise PESTEL", "Google Workspace Corporativo", "Trello / Asana", "Modelagem Financeira"],
    beneficiaries: "Associações empresariais angolanas, jovens empreendedores e gestores de empresas familiares."
  }
];

export const methodologySteps = [
  {
    step: "01",
    name: "Diagnóstico",
    title: "Diagnóstico de Campo",
    subtitle: "Identificação do Problema Real",
    color: "#0265dc",
    description: "Levantamento empírico de necessidades prioritárias em Luanda Sul e tecido empresarial adjacente. Coleta de dados com cidadãos, agentes económicos e gestores municipais.",
    milestone: "Relatório de Diagnóstico Situacional Aprovado"
  },
  {
    step: "02",
    name: "Análise",
    title: "Análise e Viabilidade",
    subtitle: "Rigor Científico & Normativo",
    color: "#00A859",
    description: "Tratamento estatístico de dados, pesquisa do estado da arte, análise de viabilidade económica, fiscal (AGT) e conformidade com as normas urbanísticas e tecnológicas angolanas.",
    milestone: "Matriz de Viabilidade Multidisciplinar"
  },
  {
    step: "03",
    name: "Concepção",
    title: "Concepção Arquitetural",
    subtitle: "Desenho da Solução",
    color: "#F59E0B",
    description: "Modelagem de fluxos, desenho de esquemas técnicos em CAD/BIM, arquitetura de software, prototipação de interfaces UI/UX e formulação dos modelos de gestão.",
    milestone: "Dossier Técnico de Concepção & Blueprints"
  },
  {
    step: "04",
    name: "Desenvolvimento",
    title: "Desenvolvimento & Prototipagem",
    subtitle: "Execução Prática Aplicada",
    color: "#034ea2",
    description: "Codificação do software, montagem física dos circuitos eletrónicos, construção da maquete arquitetónica em escala real e simulações orçamentais completas.",
    milestone: "Protótipo Funcional / Maquete Física Concluída"
  },
  {
    step: "05",
    name: "Validação",
    title: "Validação e Testes",
    subtitle: "Stress Testing & Simulação",
    color: "#0284c7",
    description: "Aplicação do protótipo em ambiente de teste real com usuários-alvo. Medição de performance, análise de falhas, refinamento estrutural e ensaios prévios de defesa.",
    milestone: "Relatório de Ensaios Técnicos & Feedback"
  },
  {
    step: "06",
    name: "Comunicação",
    title: "Comunicação Pública",
    subtitle: "Exposição no Fórum UNETIC",
    color: "#059669",
    description: "Apresentação solene e defesa perante corpo de jurados técnicos, docentes, comissões avaliadoras e convidados no Fórum Técnico-Científico UNETIC.",
    milestone: "Defesa Pública & Conclusão da 13.ª Classe"
  }
];

export const timelineTrimesters = [
  {
    trimester: "I Trimestre",
    period: "Outubro a Dezembro",
    badge: "Fase Diagnóstica & Fundamentação",
    color: "#0265dc",
    focus: "Mapeamento dos Desafios e Constituição das Equipas",
    activities: [
      "Apresentação solene das diretrizes do UNETIC 2026/2027 aos finalistas da 13.ª Classe.",
      "Formação de equipas multidisciplinares (integração entre informática, gestão e construção civil).",
      "Visitas técnicas e trabalho de campo exploratório em Luanda Sul (Viana / Belas / Talatona).",
      "Submissão e validação do Tema e Justificativa Científico-Tecnológica."
    ]
  },
  {
    trimester: "II Trimestre",
    period: "Janeiro a Março",
    badge: "Fase de Prototipagem & Engenharia",
    color: "#00A859",
    focus: "Desenvolvimento Técnico e Sessões de Mentoria Intensiva",
    activities: [
      "Codificação de sistemas, estruturação de redes e elaboração de maquetes físicas.",
      "Auditorias contínuas de conformidade com normas fiscais (AGT) e códigos de construção.",
      "Bancas prévias de qualificação intermediária com os professores orientadores.",
      "Conclusão da primeira versão alfa dos protótipos funcionais e modelos de negócio."
    ]
  },
  {
    trimester: "III Trimestre",
    period: "Abril a Junho",
    badge: "Fase Fórum Técnico & Defesas",
    color: "#F59E0B",
    focus: "Grande Mostra Pública, Julgamento e Celebração Académica",
    activities: [
      "Testes de homologação final e produção dos banners científicos e stands demonstrativos.",
      "Realização solene do 'Fórum Técnico-Científico UNETIC' no Auditório Central.",
      "Defesa oral pública dos projetos perante júri independente e convidados de honra.",
      "Atribuição de menções honrosas, prémios de mérito e certificação dos finalistas."
    ]
  }
];

export const evaluationCriteria = [
  { name: "Protótipo Funcional / Maquete Física", percent: 20, desc: "Qualidade da execução prática, nível de acabamento, fiabilidade e estabilidade operacional do modelo.", color: "#0265dc" },
  { name: "Solução Técnica & Inovação Aplicada", percent: 20, desc: "Originalidade da resposta ao problema e sofisticação das ferramentas tecnológicas ou arquitetónicas.", color: "#00A859" },
  { name: "Diagnóstico & Relevância Contextual", percent: 15, desc: "Pertinência social e alinhamento direto com necessidades reais de Luanda Sul e da sociedade angolana.", color: "#F59E0B" },
  { name: "Viabilidade Económica & Gestão", percent: 15, desc: "Sustentabilidade orçamental, retorno social sobre o investimento e plano de continuidade operacional.", color: "#034ea2" },
  { name: "Defesa Oral & Domínio Argumentativo", percent: 15, desc: "Clareza expositiva, capacidade de resposta a objeções do júri e síntese técnica da equipa finalista.", color: "#059669" },
  { name: "Relatório Técnico & Documentação", percent: 15, desc: "Rigor na escrita científica, conformidade com normas metodológicas institucionais e códigos de fontes.", color: "#0284c7" }
];

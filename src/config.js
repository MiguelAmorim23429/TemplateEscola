const CONFIG = {
  nomeAgrupamento: "Agrupamento de Escolas",
  sigla:           "AE",
  municipio:       "Porto",
  temaInicial:     0,

  contacto: {
    morada:    "Avenida das Escolas, 456\n4100-000 Porto",
    telefone:  "+351 220 000 000",
    email:     "geral@agrupamento-escolas.pt",
    horario:   "Segunda a Sexta: 09:00 - 16:30 (Secretaria)",
    copyright: "\u00a9 2026 Agrupamento de Escolas"
  },

  plataformas: {
    inovar:    "https://inovar.agrupamento-escolas.pt",
    giae:      "https://giae.agrupamento-escolas.pt",
    moodle:    "https://moodle.agrupamento-escolas.pt",
    teams:     "https://teams.microsoft.com",
    mega:      "https://www.manuaisescolares.pt"
  },

  temas: [
    { nome: "Azul Educação",    p: "#1e40af", s: "#1e3a8a", a: "#f59e0b", t: "#1e293b", bl: "#f8fafc", bs: "#f1f5f9", ti: "#eff6ff" },
    { nome: "Verde Inovação",   p: "#0f766e", s: "#115e59", a: "#f97316", t: "#1e293b", bl: "#f7fee7", bs: "#ecfccb", ti: "#f0fdfa" },
    { nome: "Bordô Académico",  p: "#881337", s: "#4c0519", a: "#d97706", t: "#1e293b", bl: "#fff1f2", bs: "#ffe4e6", ti: "#fff1f2" },
    { nome: "Índigo Futuro",    p: "#4f46e5", s: "#3730a3", a: "#06b6d4", t: "#1e293b", bl: "#f8fafc", bs: "#e0f2fe", ti: "#e0e7ff" },
    { nome: "Amarelo Criativo", p: "#ca8a04", s: "#854d0e", a: "#0284c7", t: "#1e293b", bl: "#fefce8", bs: "#fef9c3", ti: "#fefce8" }
  ],

  stats: [
    { valor: 1850, sufixo: "",    label: "Alunos Inscritos",          barra: 0.90 },
    { valor: 4,    sufixo: "",    label: "Escolas no Agrupamento",    barra: 0.40 },
    { valor: 165,  sufixo: "",    label: "Professores e Educadores",  barra: 0.75 },
    { valor: 24,   sufixo: "/7",  label: "Secretaria Online (GIAE)",  barra: 1.00 }
  ],

  escolas: [
    {
      nome: "Escola Secundária Sede",
      tipo: "Escola Sede",
      niveis: "3.º Ciclo, Ensino Secundário, Cursos Profissionais",
      morada: "Avenida das Escolas, 456, 4100-000 Porto",
      telefone: "+351 220 000 001",
      email: "secundaria.sede@agrupamento-escolas.pt",
      imagem: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop&q=80",
      coordenadas: "41.1622, -8.6439"
    },
    {
      nome: "Escola Básica 2/3 de Ramalde",
      tipo: "Escola Básica",
      niveis: "2.º e 3.º Ciclos do Ensino Básico",
      morada: "Rua de Ramalde Central, 123, 4120-000 Porto",
      telefone: "+351 220 000 002",
      email: "eb23.ramalde@agrupamento-escolas.pt",
      imagem: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop&q=80",
      coordenadas: "41.1685, -8.6512"
    },
    {
      nome: "Escola Básica do Bairro Escolar",
      tipo: "Escola Primária",
      niveis: "1.º Ciclo do Ensino Básico",
      morada: "Rua das Flores Pedagógicas, 8, 4100-111 Porto",
      telefone: "+351 220 000 003",
      email: "eb1.bairro@agrupamento-escolas.pt",
      imagem: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop&q=80",
      coordenadas: "41.1610, -8.6390"
    },
    {
      nome: "Jardim de Infância de Aldoar",
      tipo: "Jardim de Infância",
      niveis: "Educação Pré-Escolar",
      morada: "Travessa do Recreio Alegre, 45, 4100-222 Porto",
      telefone: "+351 220 000 004",
      email: "ji.aldoar@agrupamento-escolas.pt",
      imagem: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=500&fit=crop&q=80",
      coordenadas: "41.1650, -8.6601"
    }
  ],

  avisos: [
    { tipo: "Urgente", cor: "#dc2626", data: "04 Jul 2026", titulo: "Matrículas e Renovações 2026/27", desc: "Prazo para matrículas e renovações do 1.º Ciclo e Pré-escolar termina a 15 de julho. Submeta no Portal das Matrículas." },
    { tipo: "Prazos", cor: "#d97706", data: "01 Jul 2026", titulo: "Manuais Escolares Gratuitos (MEGA)", desc: "Os vouchers MEGA começam a ser emitidos a partir de meados de julho. Certifique-se de que tem registo ativo na plataforma." },
    { tipo: "Ação Social", cor: "#2563eb", data: "28 Jun 2026", titulo: "Candidaturas a ASE - Ação Social Escolar", desc: "Abertas candidaturas aos apoios de ASE para o ano letivo 2026/27. Submeta a declaração de escalão de abono de família na secretaria online." },
    { tipo: "Exames", cor: "#059669", data: "25 Jun 2026", titulo: "Pautas de Avaliação e Exames Secundário", desc: "As pautas de avaliação final e notas dos exames nacionais da 1.ª fase já se encontram afixadas no átrio da Escola Sede e disponíveis no GIAE." }
  ],

  servicos: [
    { icon: "user-plus", label: "Matrículas Online", desc: "Efetuar inscrição ou renovação de matrícula" },
    { icon: "utensils", label: "Ementa Escolar", desc: "Consulte o menu do refeitório e marque refeições" },
    { icon: "book-open", label: "Manuais MEGA", desc: "Resgate de manuais escolares gratuitos via vouchers" },
    { icon: "heart-handshake", label: "Ação Social (ASE)", desc: "Candidaturas a subsídios, alimentação e transportes" },
    { icon: "calendar-clock", label: "Horários & Turmas", desc: "Consulta de turmas e horários para o novo ano" },
    { icon: "clipboard-list", label: "Secretaria Virtual", desc: "Pedidos de certidões, declarações e justificações" },
    { icon: "users", label: "Associação de Pais", desc: "Informações, contactos e reuniões de encarregados" },
    { icon: "puzzle", label: "Atividades AAAF / CAF", desc: "Apoio à família e prolongamento de horário" }
  ],

  ementaSemanal: {
    semana: "06 a 10 de Julho de 2026",
    dias: [
      { dia: "Segunda-feira", data: "06 Jul", sopa: "Creme de Cenoura", prato: "Lombinhos de pescada no forno com puré de batata", vegetariano: "Estufado de grão-de-bico com legumes e arroz", sobremesa: "Fruta da época (Maçã ou Laranja)" },
      { dia: "Terça-feira", data: "07 Jul", sopa: "Juliana de Legumes", prato: "Arroz de frango com salada misturada", vegetariano: "Empadão de lentilhas com salada verde", sobremesa: "Gelatina de morango ou iogurte" },
      { dia: "Quarta-feira", data: "08 Jul", sopa: "Creme de Ervilhas", prato: "Massa à bolonhesa com parmesão", vegetariano: "Esparguete integral com soja salteada e cogumelos", sobremesa: "Fruta da época (Meloa ou Pera)" },
      { dia: "Quinta-feira", data: "09 Jul", sopa: "Caldo Verde", prato: "Feijoada à transmontana tradicional", vegetariano: "Feijoada vegetariana com tofu e couve-lombarda", sobremesa: "Bolo caseiro de limão (opção equilibrada)" },
      { dia: "Sexta-feira", data: "10 Jul", sopa: "Sopa de Alho-Francês", prato: "Filetes de polvo com arroz de feijão frade", vegetariano: "Almôndegas de aveia com molho de tomate e massa", sobremesa: "Fruta da época (Melancia) ou iogurte natural" }
    ]
  },

  noticias: [
    { tag: "Projetos", data: "03 Jul 2026", icon: "award", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=400&fit=crop&q=80", titulo: "Agrupamento renova Galardão 'Eco-Escolas' com distinção máxima", excerto: "As auditorias ambientais realizadas nas quatro escolas validaram o excelente trabalho dos alunos em reciclagem, compostagem e poupança de água." },
    { tag: "Tecnologia", data: "29 Jun 2026", icon: "cpu", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop&q=80", titulo: "Alunos do Curso Profissional de Informática criam app para a ementa", excerto: "A aplicação permite aos colegas consultar a ementa escolar semanal, carregar o cartão de estudante e justificar faltas em poucos cliques." },
    { tag: "Cultura", data: "22 Jun 2026", icon: "palette", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=400&fit=crop&q=80", titulo: "Mostra Anual de Artes e Teatro enche Auditório da Escola Sede", excerto: "A comunidade escolar juntou-se para assistir às peças de teatro encenadas pelos clubes das escolas e à galeria de quadros criados pelo Secundário." },
    { tag: "Desporto", data: "15 Jun 2026", icon: "trophy", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop&q=80", titulo: "Equipa de Futsal Feminino consagra-se Vice-Campeã do Desporto Escolar", excerto: "Numa final disputadíssima no Pavilhão Rosa Mota, a nossa equipa conquistou o segundo lugar regional e a admiração de todo o agrupamento." }
  ],

  eventos: [
    { dia: "10", mes: "JUL", titulo: "Festa de Encerramento e Entrega de Diplomas", local: "Auditório da Escola Sede", hora: "18h30" },
    { dia: "16", mes: "JUL", titulo: "Reunião de Direção e Conselho Geral", local: "Gabinete da Direção", hora: "14h30" },
    { dia: "10", mes: "SET", titulo: "Acolhimento aos Novos Alunos e EE", local: "Pavilhão Desportivo", hora: "09h30 - 12h00" },
    { dia: "15", mes: "SET", titulo: "Início Oficial das Aulas (Ano Letivo 26/27)", local: "Todas as Escolas", hora: "08:30" }
  ],

  documentos: [
    { icon: "file-text", titulo: "Projeto Educativo 2025/2028", desc: "Documento orientador que consagra a visão, valores e metas do agrupamento." },
    { icon: "file-pen", titulo: "Regulamento Interno", desc: "Normas de funcionamento, direitos e deveres dos alunos, pessoal e encarregados." },
    { icon: "calendar-days", titulo: "Plano Anual de Atividades", desc: "Conjunto de ações pedagógicas e extracurriculares planeadas para o ano." },
    { icon: "shield-alert", titulo: "Plano de Contingência e Segurança", desc: "Medidas de emergência e regras de evacuação das instalações escolares." }
  ],

  faqs: [
    { q: "Como posso carregar o cartão escolar do meu educando?", r: "O cartão pode ser carregado online via GIAE (através de referências Multibanco ou MB WAY) ou presencialmente na papelaria de qualquer escola do agrupamento." },
    { q: "Qual o prazo para justificar as faltas do aluno e como fazer?", r: "As faltas devem ser justificadas pelo Encarregado de Educação no prazo de 3 dias úteis a contar do primeiro dia de ausência. A justificação pode ser efetuada no portal Inovar Consulta ou presencialmente na secretaria." },
    { q: "Como funcionam os vouchers MEGA para manuais escolares gratuitos?", r: "Os Encarregados de Educação devem registar-se em www.manuaisescolares.pt. A partir de meados de julho, são emitidos os vouchers que podem ser trocados em livrarias parceiras aderentes." },
    { q: "O que fazer em caso de acidente escolar no recinto?", r: "A escola assegura os primeiros socorros e, se necessário, aciona a urgência hospitalar e o Seguro Escolar. O Encarregado de Educação é contactado imediatamente. As despesas médicas complementares são tratadas na secretaria." },
    { q: "Como candidatar o meu educando à Ação Social Escolar (ASE)?", r: "A candidatura é submetida digitalmente na Secretaria Virtual ou presencialmente, entregando a declaração da Segurança Social com o escalão do abono de família do aluno. Os prazos principais decorrem em junho/julho." }
  ]
};

export default CONFIG;

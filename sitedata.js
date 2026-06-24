// =====================================================
//  DADOS DO SITE – sitedata.js (ZYN ON TOP)
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "ZYN ON TOP",
    subtitulo: "Uma nova era",
    imagemHeroi: "imagens/hero.jpg"
  },

  // ---------- SOBRE O CLÃ ----------
  sobre: {
    titulo: "Quem somos?",
    historia: [
      "Somos um clã de minecraft focado em PvP/Build/Farm e evolução constante.",
      "Nossa missão é dominar o servidor com estratégia, amizade e muito treino.",
      "Uma clan em crescimento procurando pessoas para recrutar !."
    ],
    tags: ["⚔️ PvP", "🎮 Minecraft", "🤝 Amizade", "🚀 Evolução"],
    imagemSobre: "imagens/cla.png"
  },

  // ---------- FUNDADORES ----------
  fundadores: {
    titulo: "Fundadores",
    lista: [
      { nome: "zCrystalHex", cargo: "Fundador", foto: "imagens/pdr.png" },
      { nome: "ZGodPowerX", cargo: "Owner", foto: "imagens/god.png" },
      { nome: "Asmodeus", cargo: "Lider", foto: "imagens/asmodeus.png" }
    ]
  },

  // ---------- MEMBROS ATUAIS (ORGANIZADOS POR CARGO) ----------
  membrosAtuais: {
    titulo: "Membros",
    // ---- ALTA ELITE ----
    altaElite: [
      { nome: "Elite_Evow", cargo: "Leader", foto: "imagens/elite.png" },
      { nome: "Lootier", cargo: "Leader", foto: "imagens/uriel.png" },
      { nome: "Baraaus", cargo: "Sub Leader", foto: "imagens/baraaus.png" },
      { nome: "Inject7", cargo: "Sub Leader", foto: "imagens/inject.png" },
      { nome: "AkyraZ", cargo: "Sub Leader", foto: "imagens/akyra.png" },
      { nome: "EuCoringando_", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "papo_de_passafome", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "Sozyeon", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "selfisdemons", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "EoIcebbXz", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "Sementinha", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "VxKaua", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "SanioMT", cargo: "Alta Elite", foto: "imagens/elite.png" },
      { nome: "Marconigamer13", cargo: "Alta Elite", foto: "imagens/elite.png" }
    ],
    // ---- ELITE ----
    elite: [
      { nome: "JuliaFlyffy", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Zakai_", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Itachi_Uchiha", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "The_Ghost", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "snoopaoPJL", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "GCplays_nn", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "whitemask", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "piGabriel", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "El_Milobrzx", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "edu2253", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Cachorro_Caramel", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Zuru", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Nexxiltyy", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Senhor_Fornalha", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Vexpelion", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "Usuaria9036", cargo: "Elite", foto: "imagens/elite.png" },
      { nome: "zyxkill", cargo: "Elite", foto: "imagens/elite.png" }
    ],
    // ---- MEMBRO ----
    membro: [
      { nome: "perrinho2011", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Kishino", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "AllefMT", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "L7ZXWK", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "TiaAmora", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "gabrielgg24187", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Igorrpl", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "LozinBW12", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Bolsonaro_22", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "b10pietro", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Abusandinho", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: ".Uchina", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: ".Silvrex01", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Itctrem", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "GodLipe7272", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "GalaticosPlay1K", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Dol7hin", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "DiegoBaam", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Lowfigth", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Loosla", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "KAISER_26", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "jeguemakechina", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "JasonMorumbi", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Polar_gg", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Phzin_yt", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Pensamentox", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Sunyzinho", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "naoseibobar", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Miguelboy008", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Sou_Home", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "SnowpyOF", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Roxinho", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Radis_yt", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Zero15337", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "zaza666", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Ywkuut", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "ydemonblatant__", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Vynzxx", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Lirioarthur37", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "zFel1pe", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "Weembu", cargo: "Membro", foto: "imagens/teste.png" },
      { nome: "kgzwPANTERA", cargo: "Membro", foto: "imagens/teste.png" }
    ],
    // ---- TESTER ----
    tester: [
      { nome: "EusouBonito", cargo: "Tester", foto: "imagens/teste.png" },
      { nome: "Bayo", cargo: "Tester", foto: "imagens/teste.png" },
      { nome: "Tobiaspug000", cargo: "Tester", foto: "imagens/teste.png" },
      { nome: "Soul_Hunter13", cargo: "Tester", foto: "imagens/teste.png" },
      { nome: "maja0102", cargo: "Tester", foto: "imagens/teste.png" },
      { nome: ".Lucan4441445", cargo: "Tester", foto: "imagens/teste.png" }
    ]
  },

  // ---------- MEMBRO DO MÊS ----------
  membroMes: {
    titulo: "Player do Mês",
    subtitulo: "O membro mais foda do mês!",
    mes: "Junho 2026",
    membro: {
      nome: "Lootier",
      cargo: "Leader",
      foto: "imagens/uriel.png",
      motivo: "🏆 Quem mais ajudou o clã a crescer",
      destaque: "🚀 W Lootier !"
    }
  },

  // ---------- CONQUISTAS ----------
  conquistas: {
    titulo: "Conquistas da ZYN",
    itens: [
      "🏆 Em busca da glória infinita !",
      "⚔️ Preparando para ganhar a LIGA DE CLÃS",
      "🔥 Clã em evolução constante",
      "👑 Rumo ao topo"
    ]
  },

  // ---------- MÍDIAS ----------
  midias: {
    titulo: "Mídias",
    subtitulo: "Prints e vídeos do clã",
    lista: [
      { tipo: "imagem", src: "imagens/cla2.png", legenda: "Clã reunido", destaque: true },
      { tipo: "imagem", src: "imagens/cla3.png", legenda: "Guerra épica" },
      { tipo: "imagem", src: "imagens/trofeu.png", legenda: "Troféu conquistado" },
      { tipo: "imagem", src: "", legenda: "Em breve - Print 4" },
      { tipo: "video", tipoVideo: "youtube", id: "dQw4w9WgXcQ", legenda: "Em breve - Vídeo 1" },
      { tipo: "video", tipoVideo: "mp4", src: "", legenda: "Em breve - Vídeo 2" }
    ]
  },

  // ---------- GALERIA ----------
  galeria: {
    titulo: "Galeria do Clã",
    imagens: [
      { src: "imagens/cla.png", legenda: "ZYN ON TOP", destaque: true },
      { src: "imagens/cla2.png", legenda: "Momento épico" },
      { src: "imagens/cla3.png", legenda: "Guerra" },
      { src: "imagens/trofeu.png", legenda: "Celebração" }
    ]
  },

  // ---------- REDES SOCIAIS / CONTATO ----------
  contato: {
    titulo: "Quer entrar na ZYN?",
    texto: "Venha ser membro da ZYN ON TOP!",
    discord: "https://discord.gg/hWz7HAsuqS",
    instagram: "https://instagram.com/thezynelsoficial",
    email: "zynontop@gmail.com",
    onlineCount: 93
  },

  // ---------- RODAPÉ ----------
  rodape: {
    texto: "© 2026 ZYN ON TOP – Uma nova era !"
  }
};

// Exporta para ser usado no script principal
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}

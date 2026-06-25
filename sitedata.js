// =====================================================
//  DADOS DO SITE – sitedata.js (ZYN ON TOP)
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "ZYN ON TOP",
    subtitulo: "Uma nova era",
    imagemHeroi: "imagens/hero.jpg"  // ← MUDE AQUI SE FOR .PNG
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
    imagemSobre: "imagens/cla.png"  // ← MUDE AQUI SE FOR .JPG
  },

  // ---------- FUNDADORES ----------
  fundadores: {
    titulo: "Fundadores",
    lista: [
      { nome: "zCrystalHex", cargo: "Fundador", foto: "https://visage.surgeplay.com/full/256/zCrystalHex" },
      { nome: "ZGodPowerX", cargo: "Owner", foto: "https://visage.surgeplay.com/full/256/ZGodPowerX" },
      { nome: "Asmodeus", cargo: "Lider", foto: "https://visage.surgeplay.com/full/256/Asmodeus" }
    ]
  },

  // ---------- MEMBROS ATUAIS ----------
  membrosAtuais: {
    titulo: "Membros",
    
    // ---- ALTA ELITE ----
    altaElite: [
      // Com skin original
      { nome: "Elite_Evow", cargo: "Leader", foto: "https://visage.surgeplay.com/full/128/Elite_Evow" },
      { nome: "Lootier", cargo: "Leader", foto: "https://visage.surgeplay.com/full/128/Lootier" },
      { nome: "AkyraZ", cargo: "Sub Leader", foto: "https://visage.surgeplay.com/full/128/AkyraZ" },
      { nome: "EuCoringando_", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/EuCoringando_" },
      { nome: "Sozyeon", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/Sozyeon" },
      { nome: "selfisdemons", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/selfisdemons" },
      { nome: "EoIcebbXz", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/EoIcebbXz" },
      { nome: "VxKaua", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/VxKaua" },
      
      // Sem skin (mopomo350)
      { nome: "Baraaus", cargo: "Sub Leader", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Inject7", cargo: "Sub Leader", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "papo_de_passafome", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Sementinha", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "SanioMT", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Marconigamer13", cargo: "Alta Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" }
    ],
    
    // ---- ELITE ----
    elite: [
      // Com skin original
      { nome: "Zakai_", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/Zakai_" },
      { nome: "Itachi_Uchiha", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/Itachi_Uchiha" },
      { nome: "The_Ghost", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/The_Ghost" },
      { nome: "GCplays_nn", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/GCplays_nn" },
      { nome: "whitemask", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/whitemask" },
      { nome: "piGabriel", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/piGabriel" },
      { nome: "edu2253", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/edu2253" },
      { nome: "Zuru", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/Zuru" },
      { nome: "Senhor_Fornalha", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/Senhor_Fornalha" },
      { nome: "Vexpelion", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/Vexpelion" },
      { nome: "zyxkill", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/zyxkill" },
      
      // Sem skin (mopomo350)
      { nome: "JuliaFlyffy", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "snoopaoPJL", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "El_Milobrzx", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Cachorro_Caramel", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Nexxiltyy", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Usuaria9036", cargo: "Elite", foto: "https://visage.surgeplay.com/full/128/mopomo350" }
    ],
    
    // ---- MEMBRO ----
    membro: [
      // Com skin original
      { nome: "perrinho2011", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/perrinho2011" },
      { nome: "Kishino", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Kishino" },
      { nome: "AllefMT", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/AllefMT" },
      { nome: "Bolsonaro_22", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Bolsonaro_22" },
      { nome: "KAISER_26", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/KAISER_26" },
      { nome: "Polar_gg", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Polar_gg" },
      { nome: "Phzin_yt", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Phzin_yt" },
      { nome: "Pensamentox", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Pensamentox" },
      { nome: "Sunyzinho", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Sunyzinho" },
      { nome: "naoseibobar", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/naoseibobar" },
      { nome: "Miguelboy008", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Miguelboy008" },
      { nome: "SnowpyOF", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/SnowpyOF" },
      { nome: "Roxinho", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Roxinho" },
      { nome: "zaza666", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/zaza666" },
      { nome: "Ywkuut", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Ywkuut" },
      { nome: "Weembu", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/Weembu" },
      { nome: "kgzwPANTERA", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/kgzwPANTERA" },
      
      // Sem skin (mopomo350)
      { nome: "L7ZXWK", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "TiaAmora", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "gabrielgg24187", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Igorrpl", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "b10pietro", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Abusandinho", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: ".Uchina", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: ".Silvrex01", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Itctrem", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "GodLipe7272", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "GalaticosPlay1K", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Dol7hin", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "DiegoBaam", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Lowfigth", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Loosla", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "jeguemakechina", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "JasonMorumbi", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Sou_Home", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Radis_yt", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Zero15337", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "ydemonblatant__", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Vynzxx", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Lirioarthur37", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "zFel1pe", cargo: "Membro", foto: "https://visage.surgeplay.com/full/128/mopomo350" }
    ],
    
    // ---- TESTER ----
    tester: [
      // Com skin original
      { nome: "Bayo", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/Bayo" },
      { nome: "Soul_Hunter13", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/Soul_Hunter13" },
      
      // Sem skin (mopomo350)
      { nome: "EusouBonito", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "Tobiaspug000", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: "maja0102", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/mopomo350" },
      { nome: ".Lucan4441445", cargo: "Tester", foto: "https://visage.surgeplay.com/full/128/mopomo350" }
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
      foto: "https://visage.surgeplay.com/full/256/Lootier",
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

// ---------- SOBRE O CLÃ ----------
sobre: {
  titulo: "Quem somos?",
  historia: [
    "Somos um clã de minecraft focado em PvP/Build/Farm e evolução constante.",
    "Nossa missão é dominar o servidor com estratégia, amizade e muito treino.",
    "Uma clan em crescimento procurando pessoas para recrutar !."
  ],
  tags: ["⚔️ PvP", "🎮 Minecraft", "🤝 Amizade", "🚀 Evolução"],
  imagemSobre: "https://via.placeholder.com/800x400/0044cc/ffffff?text=ZYN+ON+TOP"  // ← IMAGEM DA INTERNET
},

// ---------- MÍDIAS ----------
midias: {
  titulo: "Mídias",
  subtitulo: "Prints e vídeos do clã",
  lista: [
    { tipo: "imagem", src: "https://via.placeholder.com/400x300/0044cc/ffffff?text=Cl%C3%A3+reunido", legenda: "Clã reunido", destaque: true },
    { tipo: "imagem", src: "https://via.placeholder.com/400x300/0066ff/ffffff?text=Guerra+%C3%A9pica", legenda: "Guerra épica" },
    { tipo: "imagem", src: "https://via.placeholder.com/400x300/3399ff/ffffff?text=Trof%C3%A9u", legenda: "Troféu conquistado" },
    { tipo: "imagem", src: "", legenda: "Em breve - Print 4" },
    { tipo: "video", tipoVideo: "youtube", id: "dQw4w9WgXcQ", legenda: "Em breve - Vídeo 1" },
    { tipo: "video", tipoVideo: "mp4", src: "", legenda: "Em breve - Vídeo 2" }
  ]
},

// ---------- GALERIA ----------
galeria: {
  titulo: "Galeria do Clã",
  imagens: [
    { src: "https://via.placeholder.com/800x600/0044cc/ffffff?text=ZYN+ON+TOP", legenda: "ZYN ON TOP", destaque: true },
    { src: "https://via.placeholder.com/400x300/0066ff/ffffff?text=Momento+%C3%A9pico", legenda: "Momento épico" },
    { src: "https://via.placeholder.com/400x300/3399ff/ffffff?text=Guerra", legenda: "Guerra" },
    { src: "https://via.placeholder.com/400x300/66ccff/ffffff?text=Celebra%C3%A7%C3%A3o", legenda: "Celebração" }
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

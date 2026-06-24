// =====================================================
//  DADOS DO SITE – sitedata.js (ZYN ON TOP)
// =====================================================

const siteData = {
  // ---------- CABEÇALHO ----------
  cabecalho: {
    titulo: "ZYN ON TOP",
    subtitulo: "Uma nova era",
    imagemHeroi: "imagens/hero.png"
  },

  // ---------- SOBRE O CLÃ ----------
  sobre: {
    titulo: "Quem somos?",
    historia: [
      "Somos um clã de minecraft focado em PvP 1.9+ e evolução constante.",
      "Nossa missão é dominar o servidor com estratégia, amizade e muito treino.",
      "Um clã de guerreiros, e muita resenha !."
    ],
    tags: ["⚔️ PvP", "🎮 Minecraft", "🤝 Amizade", "🚀 Evolução"],
    imagemSobre: "imagens/cla.png"  // ← .PNG
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

  // ---------- MEMBROS ATUAIS ----------
  membrosAtuais: {
    titulo: "Membros",
    lista: [
      { nome: "Elite_Evow", cargo: "Leader", foto: "imagens/elite.png" },
      { nome: "Lootier", cargo: "Leader", foto: "imagens/uriel.png" },
      { nome: "Baraaus", cargo: "Sub Leader", foto: "imagens/baraaus.png" },
      { nome: "Inject7", cargo: "Sub Leader", foto: "imagens/inject.png" },
      { nome: "AkyraZ", cargo: "Sub Leader", foto: "imagens/akyra.png" },
      { nome: "Membro 6", cargo: "Elite", foto: "" },
      { nome: "Membro 7", cargo: "Elite", foto: "" },
      { nome: "Membro 8", cargo: "Membro", foto: "" },
      { nome: "Membro 9", cargo: "Aliado", foto: "" },
      { nome: "Membro 10", cargo: "Membro", foto: "" },
      { nome: "Membro 11", cargo: "Membro", foto: "" },
      { nome: "Membro 12", cargo: "Membro", foto: "" },
      { nome: "Membro 13", cargo: "Membro", foto: "" },
      { nome: "Membro 14", cargo: "Membro", foto: "" },
      { nome: "Membro 15", cargo: "Elite", foto: "" }
    ]
  },

  // ---------- MEMBRO DO MÊS ----------
  membroMes: {
    titulo: "Destaque do Mês",
    subtitulo: "O membro mais foda do mês!",
    mes: "Junho 2026",
    membro: {
      nome: "Em breve",
      cargo: "---",
      foto: "",
      motivo: "🏆 Aguardando definição do destaque do mês",
      destaque: "🚀 Em breve"
    }
  },

  // ---------- TIERS DE PVP ----------
  tiers: {
    titulo: "Tiers da ZYN",
    subtitulo: "Nossos níveis no PvP",
    lista: [
      { tier: "HT4", nome: "High Tier 4", icone: "imagens/crystal.png", cor: "#0044cc", categoria: "MCTier" },
      { tier: "LT3", nome: "Low Tier 3", icone: "imagens/sword.png", cor: "#0066ff", categoria: "MCTier" },
      { tier: "LT4", nome: "Low Tier 4", icone: "imagens/axe.png", cor: "#3399ff", categoria: "MCTier" },
      { tier: "Crystal", nome: "Crystal", icone: "imagens/dimacrystal.png", cor: "#00ccff", categoria: "SubTier" },
      { tier: "Diamante", nome: "Diamante", icone: "imagens/diamante.png", cor: "#66ccff", categoria: "SubTier" },
      { tier: "Ouro", nome: "Ouro", icone: "imagens/ouro.png", cor: "#99ddff", categoria: "SubTier" },
      { tier: "Ferro", nome: "Ferro", icone: "imagens/ferro.png", cor: "#aaddff", categoria: "SubTier" },
      { tier: "Pedra", nome: "Pedra", icone: "imagens/pedra.png", cor: "#bbddff", categoria: "SubTier" }
    ]
  },

  // ---------- CONQUISTAS ----------
  conquistas: {
    titulo: "Conquistas da ZYN",
    itens: [
      "🏆 Em busca das primeiras vitórias",
      "⚔️ Preparando para a primeira LIGA DE CLÃS",
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
    discord: "https://discord.gg/JtxUMU3nmu",
    instagram: "https://instagram.com/zynontop",
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

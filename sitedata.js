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
      "Somos um clã de minecraft focado em PvP e evolução constante.",
      "Nossa missão é dominar o servidor com estratégia, amizade e muito treino.",
      "Um clã de guerreiros, e muita resenha !."
    ],
    tags: ["⚔️ PvP", "🎮 Minecraft", "🤝 Amizade", "🚀 Evolução"],
    imagemSobre: "imagens/sobre.jpg"
  },

  // ---------- FUNDADORES ----------
  fundadores: {
    titulo: "Fundadores",
    lista: [
      { nome: "zCrystalHex", cargo: "Fundador", foto: "pdr" },
      { nome: "ZGodPowerX", cargo: "Owner", foto: "god" },
      { nome: "Asmodeus", cargo: "Lider", foto: "asmodeus" }
    ]
  },

  // ---------- MEMBROS ATUAIS ----------
  membrosAtuais: {
    titulo: "Membros",
    lista: [
      { nome: "Elite_Evow", cargo: "Leader", foto: "elite" },
      { nome: "Lootier", cargo: "Leader", foto: "uriel" },
      { nome: "Baraaus ", cargo: "Sub Leader", foto: "baraaus" },
      { nome: "Inject7", cargo: "Sub Leader", foto: "inject" },
      { nome: "AkyraZ", cargo: "Sub Leader", foto: "akyra" },
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
      { tipo: "imagem", src: "", legenda: "Em breve - Print 1", destaque: true },
      { tipo: "imagem", src: "", legenda: "Em breve - Print 2" },
      { tipo: "imagem", src: "", legenda: "Em breve - Print 3" },
      { tipo: "imagem", src: "", legenda: "Em breve - Print 4" },
      { tipo: "video", tipoVideo: "youtube", id: "dQw4w9WgXcQ", legenda: "Em breve - Vídeo 1" },
      { tipo: "video", tipoVideo: "mp4", src: "", legenda: "Em breve - Vídeo 2" }
    ]
  },

  // ---------- GALERIA ----------
  galeria: {
    titulo: "Galeria do Clã",
    imagens: [
      { src: "", legenda: "Em breve", destaque: true },
      { src: "", legenda: "Em breve" },
      { src: "", legenda: "Em breve" },
      { src: "", legenda: "Em breve" }
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

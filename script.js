// =====================================================
//  SCRIPT PRINCIPAL (ZYN ON TOP)
// =====================================================

document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 ZYN ON TOP carregando...');

    if (typeof siteData === 'undefined') {
        console.error('❌ siteData não encontrado!');
        return;
    }

    console.log('✅ siteData carregado com sucesso!');

    // ===== PARTÍCULAS =====
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            container.appendChild(particle);
        }
    }
    createParticles();

    // ===== SOBRE =====
    const sobreImg = document.getElementById('sobreImg');
    if (sobreImg && siteData.sobre) {
        sobreImg.src = siteData.sobre.imagemSobre;
        sobreImg.onerror = function() {
            this.style.display = 'none';
        };
    }

    // ===== FUNDADORES =====
    const fundadoresGrid = document.getElementById('fundadores-grid');
    if (fundadoresGrid && siteData.fundadores) {
        fundadoresGrid.innerHTML = siteData.fundadores.lista.map((membro, index) => `
            <div class="membro-card" style="transition-delay: ${index * 0.1}s">
                <img src="${membro.foto}" alt="${membro.nome}" class="skin-3d" loading="lazy" 
                     onerror="this.style.display='none'">
                <h3>${membro.nome}</h3>
                <p>${membro.cargo}</p>
                <div class="membro-badge">👑</div>
            </div>
        `).join('');
        console.log('✅ Fundadores carregados:', siteData.fundadores.lista.length);
    }

    // ===== MEMBROS COM SISTEMA DE ABAS =====
    const membrosContainer = document.getElementById('membros-container');
    if (membrosContainer && siteData.membrosAtuais) {
        
        const cargos = {
            'altaElite': { label: '⭐ Alta Elite', icon: 'fa-star', cor: '#ffd700' },
            'elite': { label: '⚔️ Elite', icon: 'fa-shield', cor: '#00ccff' },
            'membro': { label: '👤 Membros', icon: 'fa-user', cor: '#66aaff' },
            'tester': { label: '🧪 Testers', icon: 'fa-flask', cor: '#99ddff' }
        };

        const totalMembros = Object.values(siteData.membrosAtuais).reduce((acc, arr) => acc + arr.length, 0);

        let html = `
            <div class="membros-header">
                <div class="membros-stats">
                    <span class="total-membros">👥 ${totalMembros} Membros</span>
                </div>
                <div class="membros-filtros" id="membros-filtros">
        `;

        let first = true;
        Object.keys(cargos).forEach((key) => {
            const count = siteData.membrosAtuais[key] ? siteData.membrosAtuais[key].length : 0;
            html += `
                <button class="membro-filtro-btn ${first ? 'active' : ''}" data-cargo="${key}">
                    <i class="fas ${cargos[key].icon}"></i> ${cargos[key].label}
                    <span class="badge-count">${count}</span>
                </button>
            `;
            first = false;
        });

        html += `
                </div>
            </div>
            <div class="membros-grid-wrapper">
        `;

        let firstGrid = true;
        Object.keys(cargos).forEach((key) => {
            const membros = siteData.membrosAtuais[key] || [];
            html += `
                <div class="cargo-grid ${firstGrid ? 'active' : ''}" id="cargo-${key}">
                    ${membros.map((membro, i) => `
                        <div class="membro-card" style="transition-delay: ${i * 0.03}s">
                            <img src="${membro.foto}" alt="${membro.nome}" class="skin-3d" loading="lazy"
                                 onerror="this.style.display='none'">
                            <h3>${

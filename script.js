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

    // ============================================================
    //  CAROUSEL DE ANÚNCIOS
    // ============================================================
    
    let currentSlide = 0;
    const slidesContainer = document.getElementById('carouselSlides');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (slidesContainer && siteData.anuncios) {
        const slides = siteData.anuncios.slides;
        
        // Criar slides
        slidesContainer.innerHTML = slides.map((slide, index) => `
            <div class="carousel-slide" style="background: linear-gradient(135deg, ${slide.cor}, #001133);">
                <div class="carousel-content">
                    <h3>${slide.titulo}</h3>
                    <p>${slide.descricao}</p>
                </div>
            </div>
        `).join('');

        // Criar dots
        dotsContainer.innerHTML = slides.map((_, index) => `
            <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
        `).join('');

        // Função para ir para o slide
        function goToSlide(index) {
            const totalSlides = slides.length;
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentSlide = index;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Atualizar dots
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }

        // Eventos dos dots
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.index));
            });
        });

        // Eventos dos botões
        if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

        // Auto-play a cada 5 segundos
        let autoPlay = setInterval(() => goToSlide(currentSlide + 1), 5000);

        // Pausar auto-play no hover
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
            carousel.addEventListener('mouseleave', () => {
                autoPlay = setInterval(() => goToSlide(currentSlide + 1), 5000);
            });
        }

        console.log('✅ Carousel carregado com', slides.length, 'slides');
    }

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
                            <h3>${membro.nome}</h3>
                            <p>${membro.cargo}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            firstGrid = false;
        });

        html += `</div>`;
        membrosContainer.innerHTML = html;

        const filtroBtns = document.querySelectorAll('.membro-filtro-btn');
        const cargoGrids = document.querySelectorAll('.cargo-grid');

        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filtroBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const cargo = this.dataset.cargo;
                cargoGrids.forEach(grid => {
                    grid.classList.remove('active');
                    if (grid.id === `cargo-${cargo}`) {
                        grid.classList.add('active');
                    }
                });
            });
        });

        console.log('✅ Membros carregados com sistema de abas!');
    }

    // ===== MEMBRO DO MÊS =====
    const membroMesContainer = document.getElementById('membro-mes-container');
    if (membroMesContainer && siteData.membroMes) {
        const m = siteData.membroMes.membro;
        membroMesContainer.innerHTML = `
            <div class="membro-mes-card">
                <div class="membro-mes-badge">⭐ ${siteData.membroMes.mes}</div>
                <div class="membro-mes-content">
                    <div class="membro-mes-foto">
                        <img src="${m.foto}" alt="${m.nome}" class="skin-3d" loading="lazy"
                             onerror="this.style.display='none'">
                        <div class="membro-mes-destaque">${m.destaque || '🏆 Destaque'}</div>
                    </div>
                    <div class="membro-mes-info">
                        <h3>${m.nome}</h3>
                        <p class="membro-mes-cargo">${m.cargo}</p>
                        <p class="membro-mes-motivo">${m.motivo || 'Membro foda do mês!'}</p>
                        <div class="membro-mes-stats">
                            <span><i class="fas fa-trophy"></i> Destaque</span>
                            <span><i class="fas fa-fire"></i> MVP</span>
                            <span><i class="fas fa-crown"></i> Top</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        console.log('✅ Membro do mês carregado');
    }

    // ===== CONQUISTAS =====
    const conquistasLista = document.getElementById('conquistas-lista');
    if (conquistasLista && siteData.conquistas) {
        conquistasLista.innerHTML = siteData.conquistas.itens.map(item =>
            `<li>${item}</li>`
        ).join('');
        console.log('✅ Conquistas carregadas:', siteData.conquistas.itens.length);
    }

    // ===== SERVIDORES =====
    const servidoresGrid = document.getElementById('servidores-grid');
    if (servidoresGrid && siteData.servidores) {
        servidoresGrid.innerHTML = siteData.servidores.lista.map(servidor => `
            <div class="servidor-card">
                <div class="servidor-logo">
                    <img src="${servidor.logo}" alt="${servidor.nome}" loading="lazy"
                         onerror="this.style.display='none'">
                </div>
                <div class="servidor-info">
                    <h3>${servidor.nome}</h3>
                    <p class="servidor-desc">${servidor.descricao}</p>
                    <div class="servidor-detalhes">
                        <span><i class="fas fa-server"></i> ${servidor.ip}</span>
                        <span><i class="fab fa-discord"></i> ${servidor.discord}</span>
                        <span class="servidor-status ${servidor.status.includes('Online') ? 'online' : 'manutencao'}">${servidor.status}</span>
                    </div>
                </div>
            </div>
        `).join('');
        console.log('✅ Servidores carregados:', siteData.servidores.lista.length);
    }

    // ===== GALERIA =====
    const galeriaGrid = document.getElementById('galeria-grid');
    if (galeriaGrid && siteData.galeria) {
        galeriaGrid.innerHTML = siteData.galeria.imagens.map(img => {
            if (img.src && img.src !== '') {
                return `
                    <div class="galeria-item ${img.destaque ? 'principal' : ''}">
                        <img src="${img.src}" alt="${img.legenda}" loading="lazy"
                             onerror="this.style.display='none'">
                        <div class="galeria-overlay">
                            <i class="fas fa-expand"></i>
                            <span>${img.legenda}</span>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="galeria-item ${img.destaque ? 'principal' : ''}">
                        <div class="placeholder-galeria">
                            <i class="fas fa-image"></i>
                            <span>${img.legenda}</span>
                        </div>
                        <div class="galeria-overlay">
                            <i class="fas fa-expand"></i>
                            <span>${img.legenda}</span>
                        </div>
                    </div>
                `;
            }
        }).join('');
        console.log('✅ Galeria carregada:', siteData.galeria.imagens.length);
    }

    // Buscar estatísticas ao carregar e a cada 60 segundos
    fetchDiscordStats();
    setInterval(fetchDiscordStats, 60000);

    // Mensagens simuladas (opcional)
    const messageCount = document.getElementById('discordMessages');
    if (messageCount) {
        messageCount.textContent = Math.floor(Math.random() * 400) + 100;
    }

    console.log('✅ Discord integrado com sucesso!');

    // ===== ONLINE COUNT =====
    const onlineCount = document.querySelector('.online-count');
    if (onlineCount && siteData.contato) {
        onlineCount.textContent = siteData.contato.onlineCount || 0;
    }

    // ============================================================
    //  ANIMAÇÕES E EFEITOS
    // ============================================================

    function animateNumbers() {
        const counters = document.querySelectorAll('.num');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = current;
                }
            }, 50);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    function animateCards() {
        document.querySelectorAll('.membro-card, .rede-card, .galeria-item, .servidor-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, 100 * index);
        });
    }

    setTimeout(() => {
        animateNumbers();
        animateCards();
    }, 300);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = window.pageYOffset * 0.3 + 'px';
        }
    });

    document.querySelectorAll('.membro-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    console.log('✅ ZYN ON TOP carregado com sucesso!');
});

const episodeData = [
    { id: 1, title: "El nacimiento de un robot milagroso", desc: "El nacimiento del legendario robot Mazinger Z.", quality: "4k" },
    { id: 2, title: "Detened al ejército de Ashura", desc: "La lucha contra el ejército del Barón Ashura comienza.", quality: "4k" },
    { id: 3, title: "Operación para destruir a Mazinger Z", desc: "El malvado plan para destruir a nuestra última esperanza.", quality: "4k" },
    { id: 4, title: "¡Mazinger Z en apuros!", desc: "Mazinger Z se encuentra en una situación desesperada.", quality: "4k" },
    { id: 5, title: "La aparición del fantasma de Mazinger", desc: "Un misterioso Mazinger fantasma hace su aparición.", quality: "4k" },
    { id: 6, title: "Las dos grandes bestias mecánicas del Dr. Infierno", desc: "El Dr. Infierno envía sus bestias mecánicas más poderosas.", quality: "4k" },
    { id: 7, title: "La gran táctica del Barón Ashura", desc: "Una estrategia maestra del Barón Ashura pone a prueba a Kouji.", quality: "4k" },
    { id: 8, title: "¡La verdadera identidad del gran demonio Abdora!", desc: "La verdadera identidad del demonio Abdora es revelada.", quality: "4k" },
    { id: 9, title: "Deimos F3, el hijo bastardo del Diablo", desc: "Una nueva amenaza surge de las sombras.", quality: "4k" },
    { id: 10, title: "Dayan, el brazo poderoso que surca el cielo", desc: "Dyan, el brazo de metal volador, ataca sin piedad.", quality: "4k" },
    { id: 11, title: "¡Destruid el fantasmal cañón Galen!", desc: "Una poderosa arma amenaza la paz.", quality: "4k" },
    { id: 12, title: "¡Traición! La gigantesca transformación del robot Bikong", desc: "Traición entre las filas enemigas.", quality: "4k" },
    { id: 13, title: "¡El ataque de la gran bola de nieve demoníaca!", desc: "Una amenaza helada ataca.", quality: "4k" },
    { id: 14, title: "¡Enfurécete! El gigante durmiente Spartan", desc: "Un coloso despierta.", quality: "4k" },
    { id: 15, title: "La táctica del gran tsunami de las bestias mecánicas", desc: "Ataque coordinado desde el mar.", quality: "4k" },
    { id: 16, title: "Orden: ¡Asesinar a Koji Kabuto!", desc: "Koji se convierte en el objetivo principal.", quality: "4k" },
    { id: 17, title: "La Bestia Mecánica subterránea Holzon V3", desc: "Ataque desde las profundidades de la tierra.", quality: "4k" },
    { id: 18, title: "¡El bandido del mar, el pirata sanguinario Glossam!", desc: "Terror en las rutas marítimas.", quality: "4k" },
    { id: 19, title: "¡La bestia voladora Debira X1!", desc: "Ataque aéreo devastador.", quality: "4k" },
    { id: 20, title: "Stronger, la Bestia Mecánica que invoca tormentas", desc: "El clima se vuelve una herramienta del mal.", quality: "4k" },
    { id: 21, title: "Duelo en el Pueblo Fantasma", desc: "Un enfrentamiento en un lugar desolado.", quality: "4k" },
    { id: 22, title: "¡Intercepción! La Fortaleza Submarina Salude", desc: "Ataque a la base submarina enemiga.", quality: "4k" },
    { id: 23, title: "La hermosa mensajera de la muerte, Minerva X", desc: "Un robot gemelo de Mazinger Z aparece.", quality: "4k" },
    { id: 24, title: "El contraataque de Mazinger Z", desc: "Kouji no se rinde ante la adversidad.", quality: "4k" },
    { id: 25, title: "¡Un desafío para Mazinger!", desc: "Una prueba suprema de fuerza.", quality: "4k" },
    { id: 26, title: "Koji en peligro, Sayaka pilota a Mazinger", desc: "Sayaka toma el mando en un momento crítico.", quality: "4k" },
    { id: 27, title: "La estrategia del Barón Ashura para el fin del mundo", desc: "Un plan apocalíptico se pone en marcha.", quality: "4k" },
    { id: 28, title: "¡El robo de la Súper Aleación Z!", desc: "El secreto de la fuerza de Mazinger está en peligro.", quality: "4k" },
    { id: 29, title: "¡El Dr. Infierno invade Japón!", desc: "Invasión a gran escala.", quality: "4k" },
    { id: 30, title: "El huracán Mazinger", desc: "Poder destructivo desatado.", quality: "4k" },
    { id: 31, title: "La base en primera línea de batalla: ¡El Castillo del Infierno!", desc: "Descubrimiento de la base enemiga.", quality: "4k" },
    { id: 32, title: "¡La declaración de guerra del malvado Castillo del Infierno!", desc: "Guerra abierta contra el Dr. Infierno.", quality: "4k" },
    { id: 33, title: "La táctica de la Bestia Mecánica que se come a los humanos", desc: "Una amenaza terrorífica.", quality: "4k" },
    { id: 34, title: "¡El infierno llama a Koji!", desc: "Trampa mortal preparada para nuestro héroe.", quality: "4k" },
    { id: 35, title: "La táctica del gas venenoso de la Bestia Mecánica", desc: "Guerra química contra la ciudad.", quality: "4k" },
    { id: 36, title: "Los asesinos del infierno: ¡El Ejército de la Calavera!", desc: "Fuerzas especiales del Dr. Infierno.", quality: "4k" },
    { id: 37, title: "La Bestia Mecánica que apareció entre las llamas", desc: "Ataque ígneo imparable.", quality: "4k" },
    { id: 38, title: "¡Explosión! ¡El poderoso puño cohete!", desc: "La técnica definitiva de Mazinger.", quality: "4k" },
    { id: 39, title: "La trampa del Barón Ashura", desc: "Astucia y engaño en el campo de batalla.", quality: "4k" },
    { id: 40, title: "Los diabólicos espías del Dr. Infierno", desc: "Infiltración en el centro de investigaciones.", quality: "4k" },
    { id: 41, title: "La Bestia Mecánica del atardecer", desc: "Batalla bajo la luz del ocaso.", quality: "4k" },
    { id: 42, title: "La desesperada Batalla de Mazinger Z", desc: "Al límite de sus fuerzas.", quality: "4k" },
    { id: 43, title: "¡El diablo nace de nuevo!", desc: "Una resurrección inesperada.", quality: "4k" },
    { id: 44, title: "La conspiración de la Bestia Mecánica de dos cabezas", desc: "Doble amenaza, doble peligro.", quality: "4k" },
    { id: 45, title: "La Bestia Mecánica asesina", desc: "Diseñada para un solo propósito: destruir.", quality: "4k" },
    { id: 46, title: "El gran ataque aéreo de Mazinger Z", desc: "Combate en los cielos.", quality: "4k" },
    { id: 47, title: "Mazinger Z en la trampa del Dr. Infierno", desc: "Un laberinto de peligros.", quality: "4k" },
    { id: 48, title: "El monstruo con capa", desc: "Un enemigo enmascarado.", quality: "4k" },
    { id: 49, title: "El fin del Barón Ashura", desc: "Un momento histórico en la serie.", quality: "4k" },
    { id: 50, title: "¡El Vizconde Pigman, el demonio que llegó del desierto!", desc: "Un nuevo y temible enemigo.", quality: "4k" },
    { id: 51, title: "¡Enigma! El ataque de la sombra negra", desc: "Misterio y destrucción.", quality: "4k" },
    { id: 52, title: "La Bestia Mecánica más grande de la historia", desc: "Un gigante entre gigantes.", quality: "4k" },
    { id: 53, title: "¡Explosión mortal! ¡El terrorífico Vizconde Pigman!", desc: "Poderes sobrenaturales en juego.", quality: "4k" },
    { id: 54, title: "¡¿A vida o muerte?! ¡Batalla desesperada en la Isla del Infierno!", desc: "Invasión a la base central.", quality: "4k" },
    { id: 55, title: "¡Se acaba el tiempo! ¡Milagro a 4.000 metros de profundidad!", desc: "Rescate submarino extremo.", quality: "4k" },
    { id: 56, title: "¡Enfádate, Shiro! ¡Dispara al recuerdo de tu madre!", desc: "Dilema moral para el joven Shiro.", quality: "4k" },
    { id: 57, title: "¡Última oportunidad! ¡La batalla a muerte del Dr. Infierno!", desc: "Enfrentamiento final... o eso parece.", quality: "4k" },
    { id: 58, title: "¡Combate a muerte! ¡Resucita, Mazinger Z!", desc: "Mazinger Z vuelve a la carga.", quality: "4k" },
    { id: 59, title: "La táctica del Duque Gorgón", desc: "Un nuevo villano entra en escena.", quality: "4k" },
    { id: 60, title: "¿Dónde está la bomba de cobalto?", desc: "Amenaza nuclear sobre la ciudad.", quality: "4k" },
    { id: 61, title: "El Dr. Infierno crea una réplica robótica del Dr. Yumi", desc: "Engaño en el corazón del proyecto.", quality: "4k" },
    { id: 62, title: "El gran contraataque: ¡Potencia Mazinger!", desc: "Nuevas mejoras para el robot.", quality: "4k" },
    { id: 63, title: "Shiro en peligro: ¡Adelante, Mazinger!", desc: "Kouji debe salvar a su hermano.", quality: "4k" },
    { id: 64, title: "El Barón Ashura se propone recuperar el diamante robado del Brutus M3", desc: "Búsqueda de tesoros peligrosos.", quality: "4k" },
    { id: 65, title: "El poderoso Jinrai S1 bombardea la ciudad desde el aire", desc: "Ataque aéreo masivo.", quality: "4k" },
    { id: 66, title: "El Dr. Infierno planea usar el trío de Aeros para provocar una erupción en el monte Fuji", desc: "Desastre natural provocado.", quality: "4k" },
    { id: 67, title: "Koji se propone detener al Daima U5, un robot del Dr. Infierno", desc: "Duelo de titanes.", quality: "4k" },
    { id: 68, title: "El Basra Q5 ataca desde el cielo", desc: "Más amenazas voladoras.", quality: "4k" },
    { id: 69, title: "El Dr. Infierno crea un Grengus C3, una bestia mecánica capaz de derribar a Mazinger Z", desc: "Diseñado para vencer.", quality: "4k" },
    { id: 70, title: "El Rood R2 se alimenta de luz solar, Mazinger Z debe bloquear su fuente de energía", desc: "Batalla energética.", quality: "4k" },
    { id: 71, title: "El Deltan V8, un mortífero robot dinosaurio", desc: "Prehistoria mecánica desatada.", quality: "4k" },
    { id: 72, title: "Las poderosas armas de Mazinger Z", desc: "Recopilación y mejora de arsenal.", quality: "4k" },
    { id: 73, title: "Mazinger Z secuestrado", desc: "危機! Mazinger en manos enemigas.", quality: "4k" },
    { id: 74, title: "¡Acto heroico! ¡El fin de Afrodita A!", desc: "Un sacrificio inolvidable.", quality: "4k" },
    { id: 75, title: "¡Ataque suicida! El Monstruo Mecánico de Gorgon", desc: "Fuerza bruta contra Mazinger.", quality: "4k" },
    { id: 76, title: "La novia del siglo: ¡Diana A!", desc: "Un nuevo aliado robótico.", quality: "4k" },
    { id: 77, title: "El Conde Brocken a las puertas de la muerte", desc: "Caída de un alto mando.", quality: "4k" },
    { id: 78, title: "¡La nueva Bestia Mecánica, el Gran General de la Oscuridad!", desc: "Aparece un poder superior.", quality: "4k" },
    { id: 79, title: "Koji contra el Gran General de la Oscuridad", desc: "El desafío más difícil.", quality: "4k" },
    { id: 80, title: "¡La Bestia Mecánica más malvada, el Gran General de la Oscuridad!", desc: "Poder maligno absoluto.", quality: "4k" },
    { id: 81, title: "El último desafío del Duque Gorgón", desc: "Fin de una rivalidad.", quality: "4k" },
    { id: 82, title: "¡Combate a muerte! ¡El final del Gran General de la Oscuridad!", desc: "Batalla épica conclusiva.", quality: "4k" },
    { id: 83, title: "El nuevo pilder", desc: "Actualización para Kouji.", quality: "4k" },
    { id: 84, title: "Una tumba en el fondo del mar para Mazinger Z", desc: "Hundimiento del coloso.", quality: "4k" },
    { id: 85, title: "La sombra negra del terror", desc: "Pesadillas mecánicas.", quality: "4k" },
    { id: 86, title: "La Odisea del Dr. Watson", desc: "Un aliado extranjero en peligro.", quality: "4k" },
    { id: 87, title: "¡El Terrorífico Vizconde Pigman!", desc: "Últimos coletazos de la magia negra.", quality: "4k" },
    { id: 88, title: "La batalla de la isla del Infierno", desc: "Combate decisivo.", quality: "4k" },
    { id: 89, title: "La bestia subterránea", desc: "Peligro bajo los pies.", quality: "4k" },
    { id: 90, title: "Encuentro mortal", desc: "Hacia el final del camino.", quality: "4k" },
    { id: 91, title: "Los gemelos de la muerte", desc: "Doble peligro final.", quality: "4k" },
    { id: 92, title: "El escarabajo asesino", desc: "El último desafío de la serie original.", quality: "4k" }
];

let currentPage = 0;
const EPISODES_PER_PAGE = 6;

function renderEpisodes(filter = '', qualityFilter = 'all') {
    const grid = document.getElementById('episodesGrid');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = episodeData.filter(ep => {
        const matchesSearch = ep.title.toLowerCase().includes(filter.toLowerCase()) || ep.id.toString() === filter;
        const matchesQuality = qualityFilter === 'all' ||
            ep.quality === qualityFilter ||
            (qualityFilter === 'original' && ep.quality === '4k');

        return matchesSearch && matchesQuality;
    });

    const totalPages = Math.ceil(filtered.length / EPISODES_PER_PAGE);
    
    // Ajustar página actual si el filtro reduce los resultados
    if (currentPage >= totalPages) currentPage = Math.max(0, totalPages - 1);

    const start = currentPage * EPISODES_PER_PAGE;
    const episodesToRender = filtered.slice(start, start + EPISODES_PER_PAGE);

    episodesToRender.forEach(ep => {
        const placeholderClass = `placeholder-${(ep.id % 6) + 1}`;
        const is4K = ep.quality === '4k';
        const badgeText = is4K ? '4K RESTAURADO' : 'ORIGINAL MP4';
        const badgeClass = is4K ? 'badge-restored' : 'badge-original';

        const card = document.createElement('div');
        card.className = 'episode-card';
        card.innerHTML = `
            <div class="card-image ${placeholderClass}">
                <div class="play-overlay">
                    <svg viewBox="0 0 24 24" fill="white" width="48" height="48"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
            <div class="card-badge ${badgeClass}">${badgeText}</div>
            <div class="card-info">
                <h3>#${ep.id} ${ep.title}</h3>
                <p>${ep.desc}</p>
            </div>
        `;

        card.addEventListener('click', () => openVideoModal(ep));
        grid.appendChild(card);
    });

    // Gestionar botones de navegación
    if (loadMoreContainer) {
        loadMoreContainer.innerHTML = `
            <button id="prevPageBtn" class="load-more-btn" ${currentPage === 0 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>ANTERIOR</button>
            <div class="page-indicator">${currentPage + 1} / ${Math.max(1, totalPages)}</div>
            <button id="nextPageBtn" class="load-more-btn" ${currentPage >= totalPages - 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''}>SIGUIENTE</button>
        `;
        
        document.getElementById('prevPageBtn').addEventListener('click', () => changePage(-1));
        document.getElementById('nextPageBtn').addEventListener('click', () => changePage(1));
    }
}

function changePage(offset) {
    const searchInput = document.getElementById('searchInput');
    const activeQuality = document.querySelector('.filter-btn.active')?.dataset.quality || 'all';
    const filter = searchInput?.value || '';

    currentPage += offset;
    renderEpisodes(filter, activeQuality);
    
    // Scroll suave hacia arriba de la sección de episodios
    document.getElementById('episodesGrid').scrollIntoView({ behavior: 'smooth' });
}

let currentEpisode = null;

function openVideoModal(ep) {
    currentEpisode = ep;
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const video = document.getElementById('mainVideo');
    const buttons = document.querySelectorAll('.tech-btn');

    modalTitle.textContent = `#${ep.id} ${ep.title}`;

    // Reset buttons
    buttons.forEach(b => b.classList.remove('active'));
    document.getElementById('btnEpisode').classList.add('active');

    playExtra('episode');

    updateNavButtons(ep.id);
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    addToMissionLog(ep);

    if (window.mazingerAudio) {
        window.mazingerAudio.playFX('ui_deploy');
        window.mazingerAudio.setDramaticMode(true);
    }
}

function updateNavButtons(episodeId) {
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (btnPrev) {
        btnPrev.style.display = episodeId <= 1 ? 'none' : 'block';
    }
    if (btnNext) {
        btnNext.style.display = episodeId >= 92 ? 'none' : 'block';
    }
}

function changeEpisode(offset) {
    if (!currentEpisode) return;
    const nextId = currentEpisode.id + offset;
    const nextEp = episodeData.find(ep => ep.id === nextId);

    if (nextEp) {
        openVideoModal(nextEp);
    }
}

function playExtra(type) {
    if (!currentEpisode) return;

    const video = document.getElementById('mainVideo');
    const source = video.querySelector('source');
    const placeholder = document.getElementById('videoPlaceholder');
    const modalDesc = document.getElementById('modalDesc');
    const buttons = document.querySelectorAll('.tech-btn');

    // Actualizar botones UI
    buttons.forEach(b => b.classList.remove('active'));
    const btnId = type === 'opening' ? 'btnOpening' : (type === 'ending' ? 'btnEnding' : 'btnEpisode');
    document.getElementById(btnId).classList.add('active');

    let videoPath = "";
    let isPlayable = false;

    if (type === 'opening') {
        videoPath = `espisodios 4k/opening.mp4`;
        modalDesc.textContent = "CRÉDITOS INICIALES - MAZINGER Z (Opening 4K Restaurado)";
        isPlayable = true;
    } else if (type === 'ending') {
        videoPath = `espisodios 4k/ending.mp4`;
        modalDesc.textContent = "CRÉDITOS FINALES - MAZINGER Z (Ending 4K Restaurado)";
        isPlayable = true;
    } else {
        // Lógica de Episodio (Existente)
        const idStr = currentEpisode.id.toString().padStart(2, '0');
        videoPath = `espisodios 4k/Mazinger-${idStr}.mp4`;
        modalDesc.textContent = `${currentEpisode.desc} [RESTAURACIÓN 4K AI]`;
        isPlayable = true;
    }

    const finalPath = encodeURI(videoPath) + '?v=' + Date.now();
    console.log("Cargando video:", type, finalPath);

    // Cambiar la fuente de forma robusta
    video.pause();
    source.src = finalPath;
    video.src = finalPath;

    video.load();

    if (isPlayable) {
        video.style.display = 'block';
        placeholder.style.display = 'none';
        video.play().then(() => {
            console.log("Reproducción iniciada con éxito");
        }).catch(e => {
            console.error("Error al reproducir video:", e);
        });
    } else {
        video.style.display = 'none';
        placeholder.style.display = 'flex';
        placeholder.innerHTML = `<p>🎬 Canal no compatible directamente (AVI).<br><small>Archivo: ${videoPath}</small></p>`;
    }
}

function addToMissionLog(ep) {
    let log = JSON.parse(localStorage.getItem('mazinger_mission_log') || '[]');
    // Evitar duplicados
    log = log.filter(item => item.id !== ep.id);
    log.unshift({ id: ep.id, title: ep.title, date: new Date().toLocaleTimeString() });
    // Limitar a los últimos 5
    if (log.length > 5) log.pop();
    localStorage.setItem('mazinger_mission_log', JSON.stringify(log));
    renderMissionLog();
}

function renderMissionLog() {
    const logContainer = document.getElementById('missionLog');
    if (!logContainer) return;

    const log = JSON.parse(localStorage.getItem('mazinger_mission_log') || '[]');
    if (log.length === 0) {
        logContainer.innerHTML = '<p class="empty-log">NO HAY REGISTROS RECIENTES</p>';
        return;
    }

    logContainer.innerHTML = log.map(item => `
        <div class="log-entry">
            <span class="log-time">[${item.date}]</span>
            <span class="log-action">Acceso a: #${item.id} ${item.title}</span>
        </div>
    `).join('');
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('mainVideo');

    if (video) video.pause();
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    if (window.mazingerAudio) {
        window.mazingerAudio.setDramaticMode(false);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const qualityFilters = document.querySelectorAll('.filter-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    const modal = document.getElementById('videoModal');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeQuality = document.querySelector('.filter-btn.active')?.dataset.quality || 'all';
            renderEpisodes(e.target.value, activeQuality);
        });
    }

    if (qualityFilters) {
        qualityFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                qualityFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const searchVal = searchInput?.value || '';
                renderEpisodes(searchVal, btn.dataset.quality);
            });
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    renderEpisodes();
    renderMissionLog();
});

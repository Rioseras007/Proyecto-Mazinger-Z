const beasts = [
    {
        id: 1,
        name: "Garada K7",
        role: "Kikaiju K7",
        desc: "Equipado con guadañas gigantes. La primera amenaza robótica diseñada por el Dr. Hell.",
        image: "img/Garada_K7.webp",
        wiki: "https://mazinger.fandom.com/es/wiki/Garada_K7",
        class: "garada",
        specs: { height: "18m", weight: "150t", weapons: "Guided Scythes", danger: "B" }
    },
    {
        id: 2,
        name: "Doublas M2",
        role: "Kikaiju M2",
        desc: "Unidad bicéfala de ataque térmico. Sus cuellos extensibles le permiten un rango de ataque superior.",
        image: "img/DuglasM2.jpeg",
        wiki: "https://mazinger.fandom.com/es/wiki/Doublas_M2",
        class: "doublas",
        specs: { height: "18m", weight: "180t", weapons: "Thermal Beams", danger: "B+" }
    },
    {
        id: 3,
        name: "Kingdan X10",
        role: "Kikaiju X10",
        desc: "Tanque medieval acorazado. Su resistencia física es legendaria entre las primeras bestias.",
        image: "img/Kingdan_X10.webp",
        wiki: "https://mazinger.fandom.com/wiki/KingDan_X10/TV",
        class: "kingdan",
        specs: { height: "20m", weight: "220t", weapons: "Mega Sword", danger: "B" }
    },
    {
        id: 4,
        name: "Gromazen R9",
        role: "Kikaiju R9",
        desc: "Bestia de demolición masiva. Diseñado para aplastar infraestructuras civiles y militares.",
        image: "img/Gromazen_R9.webp",
        wiki: "https://mazinger.fandom.com/wiki/Gromazen_R9",
        class: "gromazen",
        specs: { height: "19m", weight: "210t", weapons: "Iron Balls", danger: "B-" }
    },
    {
        id: 5,
        name: "Abdora U6",
        role: "Kikaiju U6",
        desc: "Unidad de excavación y ataque sorpresa. Sus garras pueden perforar búnkeres de alta seguridad.",
        image: "img/Abdora_U6.webp",
        wiki: "https://mazinger.fandom.com/wiki/Abdullah_U6",
        class: "abdora",
        specs: { height: "17m", weight: "140t", weapons: "Drill Fingers", danger: "C+" }
    },
    {
        id: 6,
        name: "Deimos F3",
        role: "Kikaiju F3",
        desc: "Especialista en rayos térmicos trifocales. Capaz de fundir defensas enemigas en segundos.",
        image: "img/DeimosF3.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Deimos_F3/TV",
        class: "deimos",
        specs: { height: "21m", weight: "195t", weapons: "Tri-Beam", danger: "A" }
    },
    {
        id: 7,
        name: "Dayan N4",
        role: "Kikaiju N4",
        desc: "Guerrero de estilo samurái con una katana de energía térmica capaz de cortar acero reforzado.",
        image: "img/Dayan_N4.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Dayan_N4",
        class: "dayan",
        specs: { height: "18.5m", weight: "160t", weapons: "Thermal Katana", danger: "A-" }
    },
    {
        id: 8,
        name: "Gelbros J3",
        role: "Kikaiju J3",
        desc: "Bestia de tres cabezas serpentinas con capacidades eléctricas y veneno corrosivo.",
        image: "img/GelbrosJ3.webp",
        wiki: "https://mazinger.fandom.com/wiki/Gelbros_J3",
        class: "gelbros",
        specs: { height: "23m", weight: "240t", weapons: "Triple Static", danger: "A+" }
    },
    {
        id: 9,
        name: "Brighton J2",
        role: "Kikaiju J2",
        desc: "Unidad de asalto aéreo con potentes proyectores de luz cegadora y ráfagas huracanadas.",
        image: "img/Brighton.webp",
        wiki: "https://mazinger.fandom.com/wiki/Brighton_J2/TV",
        class: "brighton",
        specs: { height: "16m", weight: "110t", weapons: "Flash Pulse", danger: "B" }
    },
    {
        id: 10,
        name: "Glossam X2",
        role: "Kikaiju X2",
        desc: "Acorazado submarino con pinzas de alta presión. El terror de las profundidades marinas.",
        image: "img/GlossamX2.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Glossam_X2",
        class: "glossam",
        specs: { height: "15m", weight: "130t", weapons: "Pressure Claw", danger: "B+" }
    },
    {
        id: 11,
        name: "Belgas V5",
        role: "Kikaiju V5",
        desc: "Francotirador aéreo que utiliza plumas explosivas de alta precisión para sabotajes estratégicos.",
        image: "img/Belgas-V5.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Belgas_V5/TV",
        class: "belgas",
        specs: { height: "20m", weight: "155t", weapons: "Explosive Plumes", danger: "A" }
    },
    {
        id: 12,
        name: "Genocider F9",
        role: "Kikaiju F9",
        desc: "Máquina de guerra total. Reúne el arsenal más mortífero de las primeras oleadas de invasión.",
        image: "img/Genocider-F9.webp",
        wiki: "https://mazinger.fandom.com/wiki/Genocider_F9",
        class: "genocider",
        specs: { height: "25m", weight: "300t", weapons: "Hellfire Cannons", danger: "S" }
    }
];

function renderBeasts() {
    const container = document.getElementById('beastsContainer');
    if (!container) return;

    container.innerHTML = '';
    beasts.forEach(beast => {
        const card = document.createElement('div');
        card.className = 'character-card beast-card';

        const imageContainer = document.createElement('div');
        imageContainer.className = `char-image-container ${beast.class}`;
        imageContainer.classList.add('blueprint-placeholder');
        imageContainer.innerHTML = `
            <div class="tech-icon">FILE_NR: ${beast.id.toString().padStart(3, '0')}</div>
            <div class="blueprint-overlay"></div>
            <div class="scanline-overlay"></div>
        `;

        if (beast.image && beast.image !== "") {
            const testImg = new Image();
            testImg.src = beast.image;
            testImg.onload = () => {
                imageContainer.style.backgroundImage = `url('${beast.image}')`;
                imageContainer.classList.remove('blueprint-placeholder');
                imageContainer.innerHTML = `
                    <div class="blueprint-overlay"></div>
                    <div class="scanline-overlay"></div>
                    <div class="dossier-tag">CLASSIFIED</div>
                `;
            };
        }

        card.appendChild(imageContainer);

        const info = document.createElement('div');
        info.className = 'char-info';

        // Dossier de especificaciones técnicas
        const specsHTML = `
            <div class="tech-dossier">
                <div class="spec-row">
                    <div class="spec-item"><span class="spec-label">ALTURA</span><span class="spec-value">${beast.specs.height}</span></div>
                    <div class="spec-item"><span class="spec-label">PESO</span><span class="spec-value">${beast.specs.weight}</span></div>
                </div>
                <div class="spec-row">
                    <div class="spec-item"><span class="spec-label">ARMAS</span><span class="spec-value">${beast.specs.weapons}</span></div>
                    <div class="spec-item"><span class="spec-label">PELIGRO</span><span class="spec-value risk-${beast.specs.danger[0]}">${beast.specs.danger}</span></div>
                </div>
            </div>
        `;

        info.innerHTML = `
            <div class="beast-header">
                <h3>${beast.name}</h3>
                <a href="${beast.wiki}" target="_blank" class="wiki-btn beast-wiki-btn" title="Mazinger Wiki">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.09 3c.34 0 .6.21.72.54l7.14 17.51c.12.33-.04.72-.37.84s-.72-.04-.84-.37L11.62 14H6.38L4.26 21.52c-.12.33-.51.49-.84.37s-.49-.51-.37-.84L10.19 3.54c.12-.33.38-.54.72-.54h1.18zM11.62 13L9 6l-2.62 7h5.24z"/></svg>
                </a>
            </div>
            <span class="char-role">${beast.role}</span>
            <p>${beast.desc}</p>
            ${specsHTML}
            <div class="tech-specs">
                <span>SECTOR: BARDOS</span>
                <span>STATUS: ACTIVE_THREAT</span>
            </div>
        `;
        card.appendChild(info);
        container.appendChild(card);

        card.addEventListener('mouseenter', () => {
            if (window.mazingerAudio) window.mazingerAudio.playFX('beast_attack');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBeasts();
});

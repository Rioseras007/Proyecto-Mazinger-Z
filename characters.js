const characters = [
    // HÉROES
    {
        name: "Kouji Kabuto",
        category: "hero",
        role: "Piloto de Mazinger Z",
        desc: "Joven impetuoso que hereda el robot más poderoso del mundo para combatir las fuerzas del mal.",
        image: "https://cdn.myanimelist.net/images/characters/7/61762.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Koji_Kabuto/TV",
        class: "koji"
    },
    {
        name: "Sayaka Yumi",
        category: "hero",
        role: "Piloto de Afrodita A",
        desc: "Valiente compañera de Kouji y piloto del robot de apoyo Afrodita A.",
        image: "https://cdn.myanimelist.net/images/characters/7/337085.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Sayaka_Yumi/TV",
        class: "sayaka"
    },
    {
        name: "Boss",
        category: "hero",
        role: "Aliado",
        desc: "Líder de una banda de motociclistas que pilota el hilarante pero valiente Boss Borot.",
        image: "https://cdn.myanimelist.net/images/characters/6/212273.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Boss/TV",
        class: "boss"
    },
    {
        name: "Shiro Kabuto",
        category: "hero",
        role: "Hermano de Kouji",
        desc: "El joven hermano de Kouji, siempre dispuesto a ayudar en el Instituto fotónico.",
        image: "https://cdn.myanimelist.net/images/characters/7/337084.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Shiro_Kabuto/TV",
        class: "shiro"
    },
    {
        name: "Profesor Yumi",
        category: "hero",
        role: "Director del Instituto",
        desc: "Padre de Sayaka y líder de la investigación de Energía Fotónica.",
        image: "https://cdn.myanimelist.net/images/characters/5/337107.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Gennosuke_Yumi/TV",
        class: "yumi"
    },
    {
        name: "Juzo Kabuto",
        category: "hero",
        role: "Creador de Mazinger Z",
        desc: "Abuelo de Kouji y Shiro, el genio que construyó a Mazinger Z en secreto.",
        image: "https://cdn.myanimelist.net/images/characters/9/337633.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Juzo_Kabuto/Shin",
        class: "juzo"
    },
    // VILLANOS
    {
        name: "Dr. Hell",
        category: "villain",
        role: "Antagonista Principal",
        desc: "Científico loco que descubrió las Bestias Mecánicas en la isla de Rodas.",
        image: "https://cdn.myanimelist.net/images/characters/12/352079.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Dr._Hell/TV",
        class: "dr-hell"
    },
    {
        name: "Barón Ashura",
        category: "villain",
        role: "Comandante",
        desc: "Leal lugarteniente del Dr. Hell, con un cuerpo mitad hombre y mitad mujer.",
        image: "https://cdn.myanimelist.net/images/characters/16/49472.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Baron_Ashura_(Manga)",
        class: "ashura"
    },
    {
        name: "Conde Brocken",
        category: "villain",
        role: "Comandante",
        desc: "Ex-oficial nazi cuya cabeza flota separada de su cuerpo. Rival del Barón Ashura.",
        image: "https://cdn.myanimelist.net/images/characters/7/51262.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Count_Brocken/TV",
        class: "brocken"
    },
    {
        name: "Vizconde Pygman",
        category: "villain",
        role: "Hechicero",
        desc: "Un ser místico creado de la unión de un guerrero pigmeo y un cuerpo robótico.",
        image: "https://cdn.myanimelist.net/images/characters/9/337158.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Viscount_Pygman/TV",
        class: "pygman"
    },
    {
        name: "Duque Gorgon",
        category: "villain",
        role: "Enviado de Mikene",
        desc: "Un ser mitad hombre y mitad tigre que sirve como enlace con el Imperio Mikene.",
        image: "https://cdn.myanimelist.net/images/characters/8/332179.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Archduke_Gorgon/TV",
        class: "gorgon"
    },
    {
        name: "Ankoku Daishogun",
        category: "villain",
        role: "Gran General de la Oscuridad",
        desc: "El comandante supremo del Imperio Mikene. Lidera las siete armadas de bestias guerreras.",
        image: "https://cdn.myanimelist.net/images/characters/4/332182.jpg",
        wiki: "https://mazinger.fandom.com/wiki/Mazinkaiser_vs._Great_General_of_Darkness",
        class: "daishogun"
    }
];

function renderCharacters() {
    const heroesContainer = document.getElementById('heroesContainer');
    const villainsContainer = document.getElementById('villainsContainer');

    if (!heroesContainer || !villainsContainer) return;

    heroesContainer.innerHTML = '';
    villainsContainer.innerHTML = '';

    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <a href="${char.wiki}" target="_blank" class="wiki-btn" title="Ver en Mazinger Wiki">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.09 3c.34 0 .6.21.72.54l7.14 17.51c.12.33-.04.72-.37.84s-.72-.04-.84-.37L11.62 14H6.38L4.26 21.52c-.12.33-.51.49-.84.37s-.49-.51-.37-.84L10.19 3.54c.12-.33.38-.54.72-.54h1.18zM11.62 13L9 6l-2.62 7h5.24z"/></svg>
            </a>
            <div class="char-image-container ${char.class}" style="background-image: url('${char.image}'); background-size: cover; background-position: center;">
            </div>
            <div class="char-info">
                <h3>${char.name}</h3>
                <span class="char-role">${char.role}</span>
                <p>${char.desc}</p>
            </div>
        `;

        if (char.category === 'hero') {
            heroesContainer.appendChild(card);
        } else {
            villainsContainer.appendChild(card);
        }

        // Trigger Audio Maestro
        card.addEventListener('mouseenter', () => {
            let key = 'ui_click';
            if (char.class === 'koji') key = 'hero_koji';
            else if (char.class === 'sayaka') key = 'hero_sayaka';
            else if (char.class === 'boss') key = 'hero_boss';
            else if (char.category === 'villain') key = 'villain_general';

            if (window.mazingerAudio) window.mazingerAudio.playFX(key);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCharacters();
});

/**
 * Mazinger Z Project - Digital Card Collection
 * Base de datos y lógica de renderizado de la baraja física.
 */

const mazingerCards = [
    // Serie Azul (B)
    { id: 'b1', series: 'blue', img: 'Baraja Mazinger/b1.jpg', name: 'Cromo B1' },
    { id: 'b2', series: 'blue', img: 'Baraja Mazinger/b2.jpg', name: 'Cromo B2' },
    { id: 'b3', series: 'blue', img: 'Baraja Mazinger/b3.jpg', name: 'Cromo B3' },
    { id: 'b4', series: 'blue', img: 'Baraja Mazinger/b4.jpg', name: 'Cromo B4' },
    { id: 'b5', series: 'blue', img: 'Baraja Mazinger/b5.jpg', name: 'Cromo B5' },
    { id: 'b6', series: 'blue', img: 'Baraja Mazinger/b6.jpg', name: 'Cromo B6' },
    { id: 'b7', series: 'blue', img: 'Baraja Mazinger/b7.jpg', name: 'Cromo B7' },
    { id: 'b8', series: 'blue', img: 'Baraja Mazinger/b8.jpg', name: 'Cromo B8' },

    // Serie Verde (G)
    { id: 'g1', series: 'green', img: 'Baraja Mazinger/g1.jpg', name: 'Cromo G1' },
    { id: 'g2', series: 'green', img: 'Baraja Mazinger/g2.jpg', name: 'Cromo G2' },
    { id: 'g3', series: 'green', img: 'Baraja Mazinger/g3.jpg', name: 'Cromo G3' },
    { id: 'g4', series: 'green', img: 'Baraja Mazinger/g4.jpg', name: 'Cromo G4' },
    { id: 'g5', series: 'green', img: 'Baraja Mazinger/g5.jpg', name: 'Cromo G5' },
    { id: 'g6', series: 'green', img: 'Baraja Mazinger/g6.jpg', name: 'Cromo G6' },
    { id: 'g7', series: 'green', img: 'Baraja Mazinger/g7.jpg', name: 'Cromo G7' },
    { id: 'g8', series: 'green', img: 'Baraja Mazinger/g8.jpg', name: 'Cromo G8' },

    // Serie Roja (R)
    { id: 'r1', series: 'red', img: 'Baraja Mazinger/r1.jpg', name: 'Cromo R1' },
    { id: 'r2', series: 'red', img: 'Baraja Mazinger/r2.jpg', name: 'Cromo R2' },
    { id: 'r3', series: 'red', img: 'Baraja Mazinger/r3.jpg', name: 'Cromo R3' },
    { id: 'r4', series: 'red', img: 'Baraja Mazinger/r4.jpg', name: 'Cromo R4' },
    { id: 'r5', series: 'red', img: 'Baraja Mazinger/r5.jpg', name: 'Cromo R5' },
    { id: 'r6', series: 'red', img: 'Baraja Mazinger/r6.jpg', name: 'Cromo R6' },
    { id: 'r7', series: 'red', img: 'Baraja Mazinger/r7.jpg', name: 'Cromo R7' },
    { id: 'r8', series: 'red', img: 'Baraja Mazinger/r8.jpg', name: 'Cromo R8' },

    // Serie Amarilla (Y)
    { id: 'y1', series: 'yellow', img: 'Baraja Mazinger/y1.jpg', name: 'Cromo Y1' },
    { id: 'y2', series: 'yellow', img: 'Baraja Mazinger/y2.jpg', name: 'Cromo Y2' },
    { id: 'y3', series: 'yellow', img: 'Baraja Mazinger/y3.jpg', name: 'Cromo Y3' },
    { id: 'y4', series: 'yellow', img: 'Baraja Mazinger/y4.jpg', name: 'Cromo Y4' },
    { id: 'y5', series: 'yellow', img: 'Baraja Mazinger/y5.jpg', name: 'Cromo Y5' },
    { id: 'y6', series: 'yellow', img: 'Baraja Mazinger/y6.jpg', name: 'Cromo Y6' },
    { id: 'y7', series: 'yellow', img: 'Baraja Mazinger/y7.jpg', name: 'Cromo Y7' },
    { id: 'y8', series: 'yellow', img: 'Baraja Mazinger/y8.jpg', name: 'Cromo Y8' }
];

function renderCards() {
    const container = document.getElementById('cardsGallery');
    if (!container) return;

    container.innerHTML = '';

    mazingerCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = `mazinger-card-item series-${card.series}`;

        cardEl.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${card.img}" alt="${card.name}" loading="lazy">
                    <div class="card-frame"></div>
                    <div class="card-series-tag">${card.series.toUpperCase()}</div>
                </div>
                <div class="card-back">
                    <div class="card-back-pattern"></div>
                    <div class="card-back-logo">Z</div>
                </div>
            </div>
        `;

        // Efecto Sonoro
        cardEl.addEventListener('mouseenter', () => {
            if (window.mazingerAudio) window.mazingerAudio.playFX('ui_deploy');
        });

        container.appendChild(cardEl);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderCards);

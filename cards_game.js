/**
 * Mazinger Z Card Game - Engine
 * Rules based on the 1978 original regulation.
 */

const cardData = {
    colors: ['blue', 'red', 'green', 'yellow'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
    prefixes: { blue: 'b', red: 'r', green: 'g', yellow: 'y' }
};

let gameState = {
    deck: [],
    discardPile: [],
    playerHand: [],
    cpuHand: [],
    activeColor: '',
    activeNumber: 0,
    currentTurn: 'player', // 'player' or 'cpu'
    isGameOver: false,
    wildcardPending: false
};

// 1. INITIALIZATION
function initGame() {
    // Create Deck
    gameState.deck = [];
    cardData.colors.forEach(color => {
        const prefix = cardData.prefixes[color];
        cardData.numbers.forEach(num => {
            gameState.deck.push({ color, number: num, id: `${prefix}${num}` });
        });
    });

    // Shuffle
    gameState.deck.sort(() => Math.random() - 0.5);

    // Deal (7 cards each for 2 players as per regulation)
    gameState.playerHand = gameState.deck.splice(0, 7);
    gameState.cpuHand = gameState.deck.splice(0, 7);

    // First card to discard pile (cannot be 5)
    let firstCardIdx = 0;
    while (gameState.deck[firstCardIdx].number === 5) {
        firstCardIdx++;
    }
    const firstCard = gameState.deck.splice(firstCardIdx, 1)[0];
    gameState.discardPile.push(firstCard);
    gameState.activeColor = firstCard.color;
    gameState.activeNumber = firstCard.number;

    updateUI();
}

// 2. CORE LOGIC
function canPlay(card) {
    if (card.number === 5) return true; // Wildcard
    return card.color === gameState.activeColor || card.number === gameState.activeNumber;
}

function playCard(cardIndex, isPlayer = true) {
    if (gameState.isGameOver || gameState.wildcardPending) return;

    const hand = isPlayer ? gameState.playerHand : gameState.cpuHand;
    const card = hand[cardIndex];

    if (!canPlay(card)) return;

    // Move card
    hand.splice(cardIndex, 1);
    gameState.discardPile.push(card);
    gameState.activeColor = card.color;
    gameState.activeNumber = card.number;

    if (window.mazingerAudio) window.mazingerAudio.playFX('ui_deploy');

    // Check Victory
    if (hand.length === 0) {
        endGame(isPlayer);
        return;
    }

    // Wildcard check (Number 5)
    if (card.number === 5) {
        if (isPlayer) {
            showColorSelector();
        } else {
            cpuSelectColor();
        }
    } else {
        gameState.currentTurn = isPlayer ? 'cpu' : 'player';
        updateUI();
        if (gameState.currentTurn === 'cpu') setTimeout(cpuTurn, 1500);
    }
}

function playerDraw() {
    if (gameState.currentTurn !== 'player' || gameState.isGameOver || gameState.wildcardPending) return;

    // Check if player has playable cards
    const playable = gameState.playerHand.some(c => canPlay(c));
    if (playable) {
        updateStatus("TIENES CARTAS JUGABLES");
        return;
    }

    if (gameState.deck.length === 0) {
        reshuffle();
    }

    if (gameState.deck.length > 0) {
        gameState.playerHand.push(gameState.deck.pop());
        updateUI();
        // Regulation: Draw until you get a playable card or pass
        const newCard = gameState.playerHand[gameState.playerHand.length - 1];
        if (!canPlay(newCard)) {
            updateStatus("ROBANDO...");
        }
    }
}

// 3. AI CPU LOGIC
function cpuTurn() {
    if (gameState.isGameOver) return;
    updateStatus("CPU ANALIZANDO ESTRATEGIA...");

    const playableIndices = [];
    gameState.cpuHand.forEach((card, i) => {
        if (canPlay(card)) playableIndices.push(i);
    });

    if (playableIndices.length > 0) {
        // Priority: Play normal cards matching active color, then matching number, then wildcards
        const bestIdx = playableIndices[0];
        playCard(bestIdx, false);
    } else {
        // Draw
        if (gameState.deck.length > 0) {
            gameState.cpuHand.push(gameState.deck.pop());
            updateUI();
            setTimeout(cpuTurn, 1000);
        } else {
            updateStatus("CPU PASA TURNO");
            gameState.currentTurn = 'player';
            updateUI();
        }
    }
}

function cpuSelectColor() {
    // Choose the color the CPU has most of
    const counts = { blue: 0, red: 0, green: 0, yellow: 0 };
    gameState.cpuHand.forEach(c => counts[c.color]++);

    let maxCount = -1;
    let bestColor = 'blue';
    for (let color in counts) {
        if (counts[color] > maxCount) {
            maxCount = counts[color];
            bestColor = color;
        }
    }

    gameState.activeColor = bestColor;
    updateStatus(`CPU CAMBIA COLOR A ${bestColor.toUpperCase()}`);
    gameState.currentTurn = 'player';
    updateUI();
}

// 4. UI UPDATES
function updateUI() {
    const playerContainer = document.getElementById('playerHand');
    const cpuContainer = document.getElementById('cpuHand');
    const discardContainer = document.getElementById('discardPile');
    const dot = document.getElementById('activeColorDot');

    // Color Indicator
    const colorMap = { blue: '#007bff', red: '#ff3e3e', green: '#28a745', yellow: '#ffc107' };
    dot.style.background = colorMap[gameState.activeColor] || 'white';

    // Discard Pile
    const topCard = gameState.discardPile[gameState.discardPile.length - 1];
    discardContainer.innerHTML = `<div class="game-card" style="background-image: url('Baraja Mazinger/${topCard.id}.jpg'); cursor: default;"></div>`;

    // Player Hand
    playerContainer.innerHTML = '';
    gameState.playerHand.forEach((card, i) => {
        const cardDiv = document.createElement('div');
        const playable = gameState.currentTurn === 'player' && canPlay(card);
        cardDiv.className = `game-card ${playable ? 'playable' : ''}`;
        cardDiv.style.backgroundImage = `url('Baraja Mazinger/${card.id}.jpg')`;
        cardDiv.onclick = () => playable && playCard(i);

        // Hover Preview
        cardDiv.onmouseenter = () => showPreview(card.id);
        cardDiv.onmouseleave = () => hidePreview();

        playerContainer.appendChild(cardDiv);
    });

    // CPU Hand (Hidden)
    cpuContainer.innerHTML = '';
    gameState.cpuHand.forEach(() => {
        const back = document.createElement('div');
        back.className = 'cpu-card-back';
        back.innerHTML = 'Z';
        cpuContainer.appendChild(back);
    });

    updateStatus(gameState.currentTurn === 'player' ? "TU TURNO" : "TURNO DEL CPU");
}

function updateStatus(msg) {
    const el = document.getElementById('statusMsg');
    if (el) el.innerText = msg;
}

function showPreview(cardId) {
    const preview = document.getElementById('cardPreview');
    if (preview) {
        preview.style.backgroundImage = `url('Baraja Mazinger/${cardId}.jpg')`;
        preview.style.display = 'block';
    }
}

function hidePreview() {
    const preview = document.getElementById('cardPreview');
    if (preview) preview.style.display = 'none';
}

function showColorSelector() {
    gameState.wildcardPending = true;
    document.getElementById('colorSelector').style.display = 'flex';
}

function selectColor(color) {
    gameState.activeColor = color;
    gameState.wildcardPending = false;
    document.getElementById('colorSelector').style.display = 'none';
    gameState.currentTurn = 'cpu';
    updateUI();
    setTimeout(cpuTurn, 1500);
}

function reshuffle() {
    const topCard = gameState.discardPile.pop();
    gameState.deck = gameState.discardPile;
    gameState.discardPile = [topCard];
    gameState.deck.sort(() => Math.random() - 0.5);
}

function endGame(playerWon) {
    gameState.isGameOver = true;
    const modal = document.getElementById('winModal');
    const title = document.getElementById('winTitle');
    const stats = document.getElementById('winStats');

    modal.style.display = 'flex';
    title.innerText = playerWon ? "¡MISIÓN CUMPLIDA!" : "DERROTA CRÍTICA";
    title.style.color = playerWon ? "#28a745" : "#ff3e3e";

    // Scoring
    let score = 0;
    const deadHand = playerWon ? gameState.cpuHand : gameState.playerHand;
    deadHand.forEach(c => {
        score += (c.number === 5) ? 25 : c.number;
    });

    stats.innerHTML = `Puntos en mano enemiga: ${score}<br>El Dr. Hell ha sido contenido.`;

    if (window.mazingerAudio) {
        window.mazingerAudio.playFX(playerWon ? 'ui_confirm' : 'beast_attack');
    }
}

document.addEventListener('DOMContentLoaded', initGame);

/**
 * Mazinger Z - Photonic Audio Center Control
 * Management for the Japan-sourced OST tracks.
 */

const tracks = [
    { id: 'MZ_OST_01', title: 'Mazinger Z Opening (Jap)', file: 'musica/track01.mp3', duration: '2:01' },
    { id: 'MZ_OST_02', title: 'Batalla en el Monte Fuji', file: 'musica/track02.mp3', duration: '2:45' },
    { id: 'MZ_OST_03', title: 'Amenaza de las Bestias', file: 'musica/track03.mp3', duration: '3:15' },
    { id: 'MZ_OST_04', title: 'Puños Fuera! - Tema Heroico', file: 'musica/track04.mp3', duration: '2:58' },
    { id: 'MZ_OST_05', title: 'Paz en el Laboratorio', file: 'musica/track05.mp3', duration: '3:30' },
    { id: 'MZ_OST_06', title: 'Invasión Mecánica', file: 'musica/track06.mp3', duration: '2:50' },
    { id: 'MZ_OST_07', title: 'Duelo de Gigantes', file: 'musica/track07.mp3', duration: '2:52' },
    { id: 'MZ_OST_08', title: 'Mazinger Z Ending (Instrumental)', file: 'musica/track08.mp3', duration: '3:20' }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio();

// Elements
const playlistElement = document.getElementById('playlist');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const currentTrackTitle = document.getElementById('currentTrackTitle');
const trackMeta = document.getElementById('trackMeta');
const visualizer = document.getElementById('visualizer');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

// 1. Initialize
function initPlayer() {
    renderPlaylist();
    loadTrack(0);
    createVisualizer();

    // Listeners
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);
    volumeSlider.addEventListener('input', (e) => audio.volume = e.target.value);

    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });
}

function renderPlaylist() {
    playlistElement.innerHTML = tracks.map((track, index) => `
        <div class="track-item ${index === currentTrackIndex ? 'active' : ''}" onclick="selectTrack(${index})">
            <span class="track-name">${track.title}</span>
            <span class="track-id">${track.id}</span>
        </div>
    `).join('');
}

function createVisualizer() {
    visualizer.innerHTML = '';
    for (let i = 0; i < 15; i++) {
        const bar = document.createElement('div');
        bar.className = 'equalizer-bar';
        visualizer.appendChild(bar);
    }
}

function animateVisualizer() {
    if (!isPlaying) {
        // Reset bars when stopped
        const bars = document.querySelectorAll('.equalizer-bar');
        bars.forEach(bar => bar.style.height = '10px');
        return;
    }

    const bars = document.querySelectorAll('.equalizer-bar');
    bars.forEach((bar, i) => {
        // Combinación de random y seno para un movimiento más orgánico
        const time = Date.now() / 150;
        const variation = Math.sin(time + i) * 30;
        const height = Math.max(10, Math.random() * 60 + 20 + variation);
        bar.style.height = `${height}%`;

        // Cambio sutil de brillo para más dinamismo
        bar.style.filter = `brightness(${0.8 + Math.random() * 0.4})`;
    });

    requestAnimationFrame(animateVisualizer);
}

// 2. Player Controls
function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];
    audio.src = track.file;
    currentTrackTitle.textContent = track.title;
    trackMeta.textContent = `SYSTEM_TRACK: ${track.id}`;

    // Update active state in playlist
    renderPlaylist();

    if (isPlaying) audio.play();
}

function togglePlay() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        audio.play();
        playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        animateVisualizer();
    } else {
        audio.pause();
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
}

function selectTrack(index) {
    loadTrack(index);
    if (!isPlaying) togglePlay();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
}

function updateProgress() {
    const { currentTime, duration } = audio;
    const percent = (currentTime / duration) * 100;
    progressFill.style.width = `${percent}%`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = isNaN(duration) ? '0:00' : formatTime(duration);
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

// Run
window.onload = initPlayer;

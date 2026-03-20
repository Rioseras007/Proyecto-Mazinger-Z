/**
 * Mazinger Z Project - Master Audio Manager (V2: Split Controls)
 * Gestión independiente de música y efectos especiales.
 */

const audioAssets = {
    bgDashboard: 'fx_sounds/mazinger_vocal.mp3',
    bgBeasts: 'fx_sounds/mazinger_instrumental.mp3',
    hero_koji: 'fx_sounds/golpe_atomico.mp3',
    hero_sayaka: 'fx_sounds/yumi_theme.mp3',
    hero_boss: 'fx_sounds/ui_surprise.mp3',
    villain_general: 'fx_sounds/dr_hell.mp3',
    beast_attack: 'fx_sounds/cohetes_taladros.mp3',
    ui_deploy: 'fx_sounds/ui_deploy.mp3',
    ui_click: 'fx_sounds/ui_click.mp3',
    ui_surprise: 'fx_sounds/ui_surprise.mp3'
};

class AudioController {
    constructor() {
        this.currentMusic = null;
        this.isMusicMuted = true;
        this.isFxMuted = false; // FX activados por defecto si hay interacción
        this.hasInteracted = false;
        this.musicVolume = 0.3;
        this.fxVolume = 0.6;

        this.tracks = {
            dashboard: new Audio(audioAssets.bgDashboard),
            beasts: new Audio(audioAssets.bgBeasts)
        };

        Object.values(this.tracks).forEach(t => {
            t.loop = true;
            t.volume = 0;
        });

        this.init();
    }

    init() {
        const unlock = () => {
            if (this.hasInteracted) return;
            this.hasInteracted = true;
            console.log("Audio Engine Unlocked");
            this.updateMusicState();
            document.removeEventListener('click', unlock);
        };
        document.addEventListener('click', unlock);
    }

    autoStartContextualMusic() {
        const isBeastsPage = window.location.pathname.includes('beasts.html');
        const context = isBeastsPage ? 'beasts' : 'dashboard';
        this.switchMusic(context);
    }

    switchMusic(context) {
        const nextMusic = this.tracks[context];
        if (this.currentMusic === nextMusic) return;

        if (this.currentMusic) {
            this.fadeOut(this.currentMusic);
        }

        this.currentMusic = nextMusic;
        this.updateMusicState();
    }

    updateMusicState() {
        if (!this.currentMusic || !this.hasInteracted) return;

        if (this.isMusicMuted) {
            this.fadeOut(this.currentMusic);
        } else {
            this.fadeIn(this.currentMusic);
        }
    }

    fadeIn(audio) {
        audio.play().catch(e => console.warn("Music play blocked:", e));
        let vol = audio.volume;
        const interval = setInterval(() => {
            vol += 0.05;
            if (vol >= this.musicVolume) {
                audio.volume = this.musicVolume;
                clearInterval(interval);
            } else {
                audio.volume = vol;
            }
        }, 100);
    }

    fadeOut(audio) {
        let vol = audio.volume;
        const interval = setInterval(() => {
            vol -= 0.05;
            if (vol <= 0) {
                audio.volume = 0;
                audio.pause();
                clearInterval(interval);
            } else {
                audio.volume = vol;
            }
        }, 100);
    }

    toggleMusic() {
        this.isMusicMuted = !this.isMusicMuted;
        this.updateMusicState();
        if (!this.isMusicMuted && !this.currentMusic) {
            this.autoStartContextualMusic();
        }
        return this.isMusicMuted;
    }

    toggleFx() {
        this.isFxMuted = !this.isFxMuted;
        return this.isFxMuted;
    }

    playFX(key) {
        if (this.isFxMuted || !this.hasInteracted) return;

        const path = audioAssets[key] || audioAssets.ui_click;
        try {
            const fx = new Audio(path);
            fx.volume = this.fxVolume;
            fx.play().catch(e => { });
        } catch (e) { }
    }

    setDramaticMode(active) {
        if (!this.currentMusic || this.isMusicMuted) return;
        this.currentMusic.volume = active ? 0.05 : this.musicVolume;
    }
}

window.mazingerAudio = new AudioController();

// Funciones globales para la UI
function toggleMusic() {
    if (!window.mazingerAudio.hasInteracted) window.mazingerAudio.hasInteracted = true;
    const isMuted = window.mazingerAudio.toggleMusic();
    const btn = document.getElementById('musicToggle');
    if (btn) {
        btn.classList.toggle('audio-active', !isMuted);
        btn.innerHTML = isMuted ?
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" opacity=".3"/><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>' :
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>';
    }
}

function toggleFx() {
    if (!window.mazingerAudio.hasInteracted) window.mazingerAudio.hasInteracted = true;
    const isMuted = window.mazingerAudio.toggleFx();
    const btn = document.getElementById('fxToggle');
    if (btn) {
        btn.classList.toggle('audio-active', !isMuted);
    }
}

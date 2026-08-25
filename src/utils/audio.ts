// src/utils/audio.js

// Import from src/assets/sounds/
import clickSoundFile from '../assets/sounds/clicksound.wav';
import winSoundFile from '../assets/sounds/winsound.mp3'

const clickSound = new Audio(clickSoundFile);
const winSound = new Audio(winSoundFile)

export function playClickSound() {
  clickSound.currentTime = 0; // Rewind to start for rapid clicks
  clickSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}

export function playWinSound() {
  winSound.currentTime = 0; // Rewind to start for rapid clicks
  winSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}
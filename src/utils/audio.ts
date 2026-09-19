import clickSoundFile from '../assets/sounds/clicksound.wav'
import winSoundFile from '../assets/sounds/winsound.mp3'
import uiClick from '../assets/sounds/ui-click.mp3'
import startSoundFile from "../assets/sounds/start.wav"

const clickSound = new Audio(clickSoundFile);
const winSound = new Audio(winSoundFile)
const uiClickSound = new Audio(uiClick)
const startSound = new Audio(startSoundFile)

function checkIsMuted(): boolean {
  const savedMuted = localStorage.getItem("muted");
  return savedMuted === "true";
}

export function playClickSound() {
  if(checkIsMuted()) return
  clickSound.currentTime = 0;
  clickSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}

export function playWinSound() {
  if (checkIsMuted()) return
  winSound.currentTime = 0;
  winSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}

export function playUiClickSound() {
  if (checkIsMuted()) return
  uiClickSound.currentTime = 0;
  uiClickSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}

export function playStartSound() {
  if (checkIsMuted()) return
  startSound.currentTime = 0;
  startSound.play().catch((err) => {
    console.warn("Audio playback prevented:", err);
  });
}
import closeSoundEffect from "./../../assets/Sounds/Other/close.wav";

export function closeSound() {
  const audioElement = new Audio(closeSoundEffect);

  audioElement.play();
}

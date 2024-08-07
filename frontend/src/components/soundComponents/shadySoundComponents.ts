import shadySoundEffect from "./../../assets/Sounds/Other/shady.wav";

export function shadySound() {
  const audioElement = new Audio(shadySoundEffect);

  audioElement.play();
}

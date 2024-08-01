import shadySoundEffect from "./../../assets/Sounds/Other/creepySiren.wav";

export function shadySound() {
  const audioElement = new Audio(shadySoundEffect);

  audioElement.play();
}

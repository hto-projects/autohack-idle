import shady from "./../../assets/Sounds/Other/shady.wav";

export function shadySound() {
  const audioElement = new Audio(shady);

  audioElement.play();
}

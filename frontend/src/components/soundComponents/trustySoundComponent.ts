import trustySoundEffect from "./../../assets/Sounds/Other/trustworthy.wav";

export function trustySound() {
  const audioElement = new Audio(trustySoundEffect);

  audioElement.play();
}

import deepClick from "./../../assets/Sounds/Other/deepClick.wav";

export function deepClickSound() {
  const audioElement = new Audio(deepClick);

  audioElement.play();
}

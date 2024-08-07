import open from "./../../assets/Sounds/Other/open.wav";

export function openSound() {
  const audioElement = new Audio(open);

  audioElement.play();
}

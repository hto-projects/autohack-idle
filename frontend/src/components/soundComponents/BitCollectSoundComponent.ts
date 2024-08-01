import bitCollect from "./../../assets/Sounds/Other/bitCollect.wav";

export function bitCollectSound() {
  const audioElement = new Audio(bitCollect);

  audioElement.play();
}

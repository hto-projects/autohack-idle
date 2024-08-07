import alVoice from "./../../assets/Sounds/Other/al.wav";

export function alSound() {
  const audioElement = new Audio(alVoice);

  audioElement.play();
}

import alSound from "./../../assets/Sounds/Other/al.wav";

export function alVoice() {
  const audioElement = new Audio(alSound);

  audioElement.play();
}

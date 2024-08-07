import explosion from "./../../assets/Sounds/Other/explosion.wav";

export function explosionSound() {
  const audioElement = new Audio(explosion);

  audioElement.play();
}

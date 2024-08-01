import explosion from "./../../assets/Sounds/Other/explosion.wav";

export function Explosion() {
  const audioElement = new Audio(explosion);

  audioElement.play();
}

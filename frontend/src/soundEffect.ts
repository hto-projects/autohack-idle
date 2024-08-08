const soundEffects = {
  al: new Audio("../assets/audio/sound_effects/al.wav"),
  bitCollect: new Audio("../assets/audio/sound_effects/bitCollect.wav"),
  close: new Audio("../assets/audio/sound_effects/close.wav"),
  deepClick: new Audio("../assets/audio/sound_effects/deepClick.wav"),
  explosion: new Audio("../assets/audio/sound_effects/explosion.wav"),
  open: new Audio("../assets/audio/sound_effects/open.wav"),
  shady: new Audio("../assets/audio/sound_effects/shady.wav"),
  trustworthy: new Audio("../assets/audio/sound_effects/trustworthy.wav")
};

export function playSoundEffect(name: string) {
  const soundEffect = soundEffects[name] as HTMLAudioElement;
  if (soundEffect !== undefined) {
    soundEffect.play();
  } else {
    console.log(`ERR: Sound effect: ${name} not found`);
  }
}

// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const face = document.querySelector('img');
  const talkButton = document.querySelector('button');
  talkButton.addEventListener('click', talk);
  if ("onvoiceschanged" in synth) {
    synth.onvoiceschanged = populateVoices;
    console.log("Added voices");
  }
  else {
    populateVoices();
    console.log("Added voices");
  }
}

function populateVoices() {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  let i = 0;
  for (const [i, persona] of voices.entries()) {
    const option = document.createElement('option');
    option.textContent = `${persona.name} (${persona.lang})`;
    option.value = i;
    document.querySelector("select").appendChild(option);
  }
}

function talk() {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();
  const text = document.getElementById("text-to-speak").value;
  const tts = new SpeechSynthesisUtterance(text);
  const face = document.querySelector('img');
  const chosenVoice = document.querySelector('select').value;
  tts.addEventListener('end', function() {face.src = "assets/images/smiling.png";});
  tts.voice = voices[chosenVoice];
  document.querySelector('img').src = "assets/images/smiling-open.png";
  synth.speak(tts);
}
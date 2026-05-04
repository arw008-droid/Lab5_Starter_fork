// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const vol = document.getElementById('volume');
  const horn = document.getElementById('horn-select');
  const audioButton = document.querySelector('button');
  vol.addEventListener('input', changeVolume);
  horn.addEventListener('change', showImage);
  audioButton.addEventListener('click', playSound);
}

function showImage() {
  const audio = document.querySelector('audio');
  const selectHorn = document.getElementById('horn-select');
  const selectedValue = selectHorn.value;
  const image = document.querySelector('main').querySelector('img');
  image.src = "assets/images/" + selectedValue + ".svg";
  audio.src = "assets/audio/" + selectedValue + ".mp3";
}

function playSound() {
  const audio = document.querySelector('audio');
  const audsrc = document.getElementById('horn-select').value;
  if (audsrc === "party-horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  audio.play();
}

function changeVolume() {
  const vol = document.getElementById('volume').value;
  const audio = document.querySelector('audio');
  audio.volume = vol / 100;
  const volImg = document.querySelector('div').querySelector('img');
  if (vol == 0) {
    volImg.src = 'assets/icons/volume-level-0.svg';
  } 
  else if (vol < 33) {
    volImg.src = 'assets/icons/volume-level-1.svg';
  } 
  else if (vol < 67) {
    volImg.src = 'assets/icons/volume-level-2.svg';
  } 
  else {
    volImg.src = 'assets/icons/volume-level-3.svg';
  }
}
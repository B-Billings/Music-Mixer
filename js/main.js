const musicboard = document.querySelector("#buttonHolder img"),
  instrument = document.querySelectorAll('.instruments *'),
  dropZones = document.querySelectorAll(".drop-zone"),
  Audio = document.querySelectorAll("audio *"),
  playbtn = document.getElementById('playbtn'),
  pausebtn = document.getElementById('stopbtn'),
  rewindbtn = document.getElementById('rewindbtn'),
  dragL = document.querySelector(".instruments"),
  AudioEl = document.querySelectorAll("audio");


function allowdrag(event) {
  event.dataTransfer.setData('currentItem', event.target.id);


}
function allowDragOver(event) {
  event.preventDefault();
  console.log('dragged over me');
}
function allowDrop(event) {
  event.preventDefault();
  console.log('dropped on me')

  if (this.childElementCount == 1) { return; }
  console.log('space filled');

  let droppedEl = event.dataTransfer.getData('currentItem');
  console.log(droppedEl);



  let music = document.querySelector(`#${droppedEl}`);
  this.appendChild(music);
  /*  let track = event.dataTransfer.getData('thetrack');

    document.querySelector(`audio[data-bgref="${track}"]`).play();*/
  let track = document.createElement('audio');

  track.loop = true;

  track.src = `audio/${music.dataset.bgref}.wav`;
  track.load();

  document.body.appendChild(track);
  track.play();
}


function playsound() {
  let sounds = document.querySelectorAll('audio');
  sounds.forEach(mixer => mixer.play());

}

function pausesound() {
  let sounds = document.querySelectorAll('audio');
  sounds.forEach(mixer => mixer.pause());

}

function rewindsound() {
  var sounds = document.getElementsByTagName("audio");
  for (i = 0; i < sounds.length; i++) sounds[i].currentTime = 0;

  console.log('rewinded')
}


function resetbtn() {
  dropZones.forEach(zone => {
    if (zone.childElementCount > 0) {
      dragL.appendChild(zone.firstElementChild);
    }
  })
  let sounds = document.querySelectorAll('audio');
  sounds.forEach(sound => document.body.removeChild(sound));
}



instrument.forEach(piece => piece.addEventListener("dragstart", allowdrag));

dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

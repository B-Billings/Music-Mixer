const musicboard = document.querySelector("#buttonHolder img"),
    instrument = document.querySelectorAll('.instruments *'),
    dropZones = document.querySelectorAll(".drop-zone"),
    Audio = document.querySelectorAll("audio *"),
    playbtn= document.getElementById('playbtn'),
    pausebtn= document.getElementById('stopbtn'),
    rewindbtn= document.getElementById('rewindbtn'),
    dragL = document.querySelector(".instruments"),
    AudioEl = document.querySelectorAll("audio");


    function allowdrag(event) {
        event.dataTransfer.setData('currentItem', event.target.id);
        event.dataTransfer.setData('thetrack', event.target.dataset.bgref);

    }
    function allowDragOver(event){
        event.preventDefault();
        console.log('dragged over me');
    }
    function allowDrop(event){
        event.preventDefault();
        console.log('dropped on me')



        let droppedEl = event.dataTransfer.getData('currentItem');
        console.log(droppedEl);

        if (this.childElementCount == 1) {return; }
        console.log('space filled');

      this.appendChild(document.querySelector(`#${droppedEl}`));

        let track = event.dataTransfer.getData('thetrack');

        document.querySelector(`audio[data-bgref="${track}"]`).play();

    }


    function playsound(){

        }



    function pausesound(){
        var sounds= document.getElementsByTagName("audio");
        for (i=0; i<sounds.length; i++ ) sounds[i].pause();
        console.log('paused')

    }

    function rewindsound(){
        var sounds = document.getElementsByTagName("audio");
        for (i=0; i<sounds.length; i++ ) sounds[i].currentTime = 0;
        console.log('rewinded')
    }

    function resetbtn(){
      dropZones.forEach(zone => {
			if (zone.childElementCount > 0) {
				dragL.appendChild(zone.firstElementChild);
			}
		})
    AudioEl.forEach(el => el.pause());
    }

    instrument.forEach(piece => piece.addEventListener("dragstart", allowdrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

const musicboard = document.querySelector("#buttonHolder img"),
    instrument = document.querySelectorAll('.instruments *'),
    dropZones = document.querySelectorAll(".drop-zone"),
    Audio = document.querySelector("audio"),
    playbtn= document.getElementById('playbtn'),
    pausebtn= document.getElementById('pausebtn'),
    rewindbtn= document.getElementById('rewindbtn');

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

      this.appendChild(document.querySelector(`#${droppedEl}`));

        let track = event.dataTransfer.getData('thetrack');

        document.querySelector(`audio[data-bgref="${track}"]`).play();


    }
    function playsound(event){
        let track = `audio/$(this.dataset.trackref).wav`;

    }


    instrument.forEach(piece => piece.addEventListener("dragstart", allowdrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

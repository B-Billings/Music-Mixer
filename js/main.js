const musicboard = document.querySelector("#buttonHolder img"),
    instrument = document.querySelectorAll('.instruments *'),
    dropZones = document.querySelectorAll(".drop-zone"),
    Audio = document.querySelector("audio");

    function allowdrag(event) {
        event.dataTransfer.setData('currentItem', event.target.id);

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

        event.target.appendChild(document.querySelector(`#${droppedEl}`));

        playsound(droppedEl);

        

    }
    function playsound(event){
        document.getElementById('audio').play();
        
    }
    
   
    instrument.forEach(piece => piece.addEventListener("dragstart", allowdrag));

    dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

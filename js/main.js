(() => {
let musicboard = document.querySelector(".drops"),
    instrument = document.querySelectorAll(".instruments *"),
    dropZones = document.querySelectorAll(".drop-zone");

    function dragStarted(event) {
        console.log('started draginng a piece');
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


        let droppedEl = event.dataTransfer.getData('currentItem');
        console.log(droppedEl);

        this.appendChild(document.querySelector(`#${droppedEl}`));


    }

    instrument.forEach(piece => piece.addEventListener("dragstart", dragStarted));

    dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

    dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));


})
const gridContainer = document.getElementById("grid-container");

streaks.forEach((el)=>{
    const tracker = document.createElement("div")
    tracker.innerHTML = `<div class= "info"><span class = "streak-days">
    ${el.tracker.getStreak()}</span> days of <span class="streak-activity">${el.tracker.activity}</span></div>`;
    tracker.classList += "tracker";
    gridContainer.appendChild(tracker);
});

const resize = ()=>{
    changeColumnNumbers();
    setTrackerHeight();
}

const setTrackerHeight = ()=>{
    const trackers = document.getElementsByClassName('tracker');
    for (i = 0; i<trackers.length; i ++){
        const width = trackers[i].offsetWidth;
        const infoDivHeight = trackers[i].children[0].offsetHeight;
        let height;
        height = width;
        trackers[i].style.height = height + 'px';
        trackers[i].style.paddingTop = (height-infoDivHeight)/2 + 'px';
        console.log( "w: ", width, "h: ", height)
    }
}

const changeColumnNumbers = ()=>{
    const width = window.innerWidth;
    if (width <400){
        gridContainer.style.gridTemplateColumns = "repeat(1, 90%)";
    } else if (width < 659){
        gridContainer.style.gridTemplateColumns = "repeat(2, 40%)";
    } else if (width<760) {
        gridContainer.style.gridTemplateColumns = "repeat(3, 24%)"
    } else {
        gridContainer.style.gridTemplateColumns = "repeat(4, 20%)"
    }
    if (width>1000){
        gridContainer.style.width = "60%"

    }else if (width>830){
        gridContainer.style.width = "75%"

    }
    
}

//helper found online
function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}



window.onresize = resize;

resize();
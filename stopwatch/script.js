let [seconds,minutes,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let isPaused = false;


function stopwatch(){
    if(!isPaused){
    seconds++;
    if(seconds == 60){
        seconds =0;
        minutes++;

        if(minutes == 60){
            minutes=0;
            hours++;
        }
    }
    

    let h = hours <10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds <10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h+":"+m +":"+s;
    }
}

function updateStartPauseButton() {
    const startPauseButton = document.getElementById("startPauseButton");
    if (timer === null) {
        startPauseButton.src = "images/start.png"; 
    } else {
        startPauseButton.src = "images/stop.png"; // 
    }
}

function watchToggle(){
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
        isPaused = false;
    } else {
        clearInterval(timer);
        timer = null;
        isPaused = true;
    }
    updateStartPauseButton();
}

    function watchStop(){
    clearInterval(timer);
    timer=null;
    isPaused=false;
}

function watchReset(){
    clearInterval(timer);
    timer=null;
    isPaused=false;
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}
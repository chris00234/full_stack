let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
const display = document.getElementById('display');

let timer = null;
let starTime = 0;
let elapsedTime = 0;
let isRunning = false;

start.onclick = () => {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            display.innerText = new Date(elapsedTime).toISOString().slice(11, -2);
        }, 10);
        isRunning = true;
    }
}
stop.onclick = () => {
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}
reset.onclick = () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.innerText = '00:00:00:00';
}

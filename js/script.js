const minutesE1 = document.querySelector("minutes")
const secondsE1 = document.querySelector("secons")
const milisecondsE1 = document.querySelector("miliseconds")
const startBtn = document.querySelector("startBtn")
const pauseBtn = document.querySelector("pauseBtn")
const resumeBtn = document.querySelector("resumeBtn")
const resetBtn = document.querySelector("resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
isPaused = false;

startBtn.addEventListener("click", startTimer)

function startTimer(){

    interval = setInterval(() => {

        if (!isPaused) {
            miliseconds += 10;
        
        if (miliseconds === 1000) {
            seconds++;
            miliseconds = 0;
        }
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        minutes.textContent = minutes;
        secondsE1.textContent = seconds;
        miliseconds.textContent = miliseconds;
        }
    }, 10)
}

function formatTime(time){
    
}

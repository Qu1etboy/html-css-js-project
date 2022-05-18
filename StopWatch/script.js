var timeOutput = document.getElementById("time");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");
var sec = 0;
var interval = null;

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);

function timer() {
    sec++;

    let hour = Math.floor(sec/3600) % 24;
    let minute = Math.floor(sec/60) % 60;
    let second = sec % 60;

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    timeOutput.innerHTML = `${hour}:${minute}:${second}`;
}

function startTimer() {
    if (interval)
        return;
    interval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    sec = 0;
    timeOutput.innerHTML = "00:00:00";
}
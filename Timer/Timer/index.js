window.onload = function ready() {
    var timer = new Timer();
    var showing;

    function startpauseTimer() {
        var innerText = document.getElementById("startbtn").innerHTML;
        if (innerText === "start") {
            timer.start();
            showing = setInterval(showTime, 100);
            document.getElementById("startbtn").innerHTML = "pause";
        }
        else {
            timer.pause();
            clearInterval(showing);
            document.getElementById("startbtn").innerHTML = "start";
        }
    }

    function stopTimer() {
        timer.stop();
        clearInterval(showing);
        document.getElementById("startbtn").innerHTML = "start";
        document.getElementById("time").innerHTML = "00:00:00";
        document.getElementById("time").style.color = '#ccc2a6'
    }

    function inputGoal() {
        var goalTime = document.getElementById('hourinp').value * 3600000 +
            document.getElementById('mininp').value * 60000 +
            document.getElementById('secinp').value * 1000;
        timer.setGoalTime(goalTime);
        document.getElementById("time").style.color = '#32a311';
    }

    function showTime() {
        var milisecond = timer.getMiliseconds();
        if (milisecond > timer.getGoalTime() && timer.getGoalTime() !== 0) {            
            document.getElementById("time").style.color = '#f0300e';
        }
        var second = (Math.floor(milisecond / 1000)) % 60;
        if (second < 10) second = "0" + second;
        var minute = (Math.floor(milisecond / 60000)) % 60;
        if (minute < 10) minute = "0" + minute;
        var hour = (Math.floor(milisecond / 3600000)) % 60;
        if (hour < 10) hour = "0" + hour;
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
    }

    // add event listener to buttons
    document.getElementById("startbtn").addEventListener("click", startpauseTimer, false);
    document.getElementById("stopbtn").addEventListener("click", stopTimer, false);
    document.getElementById("okbtn").addEventListener("click", inputGoal, false);
}

    

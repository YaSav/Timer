window.onload = function ready() {
    var timer = new Timer();
    var showing;

    function startpauseTimer() {
        var innerText = document.getElementById("startbtn").innerHTML;
        if (innerText === "Start") {
            timer.start();
            showing = setInterval(showTime, 100);
            document.getElementById("startbtn").innerHTML = "Pause";
        }
        else {
            timer.pause();
            clearInterval(showing);
            document.getElementById("startbtn").innerHTML = "Start";
        }
    }

    function stopTimer() {
        timer.reset();
        clearInterval(showing);
        document.getElementById("startbtn").innerHTML = "Start";
        document.getElementById("time").innerHTML = "00:00:00";
    }

    function inputGoal() {
        var goalTime = document.getElementById('hourinp').value * 3600000 +
            document.getElementById('mininp').value * 60000 +
            document.getElementById('secinp').value * 1000;
        timer.setGoalTime(goalTime);
    }

    function showTime() {
        var milisecond = timer.getMiliseconds();
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

    

function ready() {
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

    function resetTimer() {
        timer.reset();
        clearInterval(showing);
        document.getElementById("startbtn").innerHTML = "Start";
        document.getElementById("time").innerHTML = "00.00.00";
    }

    function showTime() {
        var milisecond = timer.getMiliseconds();
        var second = (milisecond / 1000 >> 0) % 60;
        if (second < 10) second = "0" + second;
        var minute = (milisecond / 60000 >> 0) % 60;
        if (minute < 10) minute = "0" + minute;
        var hour = (milisecond / 3600000 >> 0) % 60;
        if (hour < 10) hour = "0" + hour;
        document.getElementById("time").innerHTML = hour + "." + minute + "." + second;
    }

    // add event listener to start button
    document.getElementById("startbtn").addEventListener("click", startpauseTimer, false);

    // add event listener to reset button
    document.getElementById("resetbtn").addEventListener("click", resetTimer, false);
}

    

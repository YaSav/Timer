var Timer = function () {
    var startTime = 0;
    var allTime = 0;
    var goalTime = 0;
    isActive = false;
    isReached = false;

    this.stop = function () {
        isActive = false;
        isReached = false;
        startTime = 0;
        allTime = 0;
        goalTime = 0;
    }

    this.start = function () {
        if (isActive) {
            return;
        }
        startTime = Date.now();
        isActive = true;
    }

    this.pause = function () {

        if (!isActive) {
            return;
        }
        isActive = false;
        allTime = allTime + (Date.now() - startTime);
        startTime = 0;
    }

    this.getMiliseconds = function () {
        var time = allTime + Date.now() - startTime;
        if (time > goalTime && goalTime!==0) {
            isReached = true;
            alert('Syka');
        }
        return time;
    }

    this.setGoalTime = function (time) {
        goalTime = time;
        alert(goalTime)
    }


}
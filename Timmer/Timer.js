var Timer = function () {
    startTime = 0;
    allTime = 0;
    isActive = false;

    this.reset = function () {
        isActive = false;
        startTime = 0;
        allTime = 0;
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
        return allTime + Date.now() - startTime;
    }

}
window.addEventListener('load', ()=>{

    let time = document.getElementById('time');
    let pause = document.getElementById('pause');

    let paused = false;

    let startDate = new Date().getTime();

    let now, distance, hours, minutes, seconds;
    let storedDistance, storedNow, countdowndate;

    let i = 0;

    let interval = setInterval(function() {
        now = new Date().getTime();
        if (!paused) {
            distance = now - startDate;
        } else {
            countdowndate = (storedNow + storedDistance) - i * 5000;
            i++;
            distance = countdowndate - now;
        }

        if (distance < 0) {
           distance = 0;
        }

        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        time.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    }, 1000);

    pause.addEventListener('click', ()=>{
        paused = !paused;
        now = new Date().getTime();

        if (paused) {
            storedDistance = now - startDate;
            storedNow = now;
            console.log(storedDistance);
            pause.value = 'continue';
            i=0;
        } else {
            startDate = now - distance;
            pause.value = 'pause';
        }
    });
});
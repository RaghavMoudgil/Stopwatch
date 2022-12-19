(function () {
    var hr = 0;
    var min = 0;
    var sec = 0;
    var displaysec = 0;
    var displaymin = 0;
    var displayhr = 0;
    var reset_time;
    var rset = false;
    // var lap = null;
    var lapNow = null;
    function start() {
        rset = 'true';
        stopwatch();
    }
    function stop() {
        clearTimeout(reset_time);
    }
    function reset() {
        rset = 'false';
        hr = 0;
        min = 0;
        sec = 0;
        clearTimeout(reset_time)
        document.getElementById('time').innerHTML = '00:00:00';
    }
    function stopwatch() {
        if (rset == 'true') {
            sec++;
            if (sec / 60 == 1) {
                sec = 00;
                min++;
            }
            if (min / 60 == 1) {
                min = 00;
                sec = 00;
                hr++;
            }
            if (sec < 10) {
                displaysec = '0' + sec.toString();
            }
            else {
                displaysec = sec;
            }
            if (min < 10) {
                displaymin = '0' + min.toString();
            }
            else {
                displaymin = min;
            }
            if (hr < 10) {
                displayhr = '0' + hr.toString();
            }
            else {
                displayhr = hr;
            }
            document.getElementById('time').innerHTML = displayhr + ':' + displaymin + ':' + displaysec;

        }
        reset_time = setTimeout(stopwatch, 1000);

    }
    var lap_Btn = document.getElementById('lap')
    var lap_reset = document.getElementById('lap_reset');
    var lap_Record = document.getElementById('lap_record');
    var start_btn = document.getElementById('start');
    var stop_btn = document.getElementById('stop');
    var reset_btn = document.getElementById('reset');
    var laps = document.getElementById('laps');
    var count = 0;
    function counter() {
        count++

        return count
    }
    lap_Btn.style.visibility='hidden';
    stop_btn.style.visibility='hidden';
    laps.style.visibility='hidden';
    start_btn.addEventListener('click', () => {
        start();
        counter();
        if (count >= 1) {
            start_btn.disabled = true;
            lap_Btn.style.visibility='visible';
            reset_btn.style.visibility='hidden'
            start_btn.style.visibility='hidden'
            stop_btn.style.visibility='visible'
        }

    })

    stop_btn.addEventListener('click', () => {
        stop();
        if (start_btn.disabled == true) {
            start_btn.disabled = false;
            reset_btn.style.visibility='visible'

        }
    });
    reset_btn.addEventListener('click', () => {
        reset();
        if (start_btn.disabled == true) {
            start_btn.disabled = false;
        }
    });
    lap_Btn.addEventListener('click', () => {
        lap();
        show_btn();
        if (start_btn.disabled == true) {
            start_btn.disabled = false;
           
        }
    });
    lap_reset.addEventListener('click', () => {
        reset();
        if (start_btn.disabled == true) {
            start_btn.disabled = false;
        }
    });

    function lap() {

        lapNow = `<div class="lap"><li>${displayhr} : ${displaymin} : ${displaysec}</li></div>`;

        lap_Record.innerHTML += lapNow;
    }
    function reset() {
        location.reload();
    }
    function show_btn() {
        document.getElementById('lap_reset').style.display = 'inline';
        laps.style.visibility='visible';
    }


})();

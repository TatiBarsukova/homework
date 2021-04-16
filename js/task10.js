function differenceBetweenDates() {
    const hms = prompt('Введите время в формате ЧЧ:ММ:СС');
    console.log(hms);
    const s = hms.split(':');

    const seconds1 = (+s[0] * 3600) + (+s[1] * 60) + (+s[2]);
    console.log(seconds1);

    const seconds2 = prompt('Введите секунды');

    if (seconds1 > seconds2) {

        const time = (seconds1 - seconds2);
        console.log(time);


        let hrs = Math.floor(time / 3600);
        let mins = Math.floor((time % 3600) / 60);
        let secs = Math.floor(time % 60);

        let format = [
            hrs.toString().padStart(2, '0'),
            mins.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0')
        ].join(':');
        console.log(format);
    }
    else if (seconds2 > seconds1) {
        const time = (seconds2 - seconds1);
        console.log(time);

        let hrs = Math.floor(time / 3600);
        let mins = Math.floor((time % 3600) / 60);
        let secs = Math.floor(time % 60);

        let format = [
            hrs.toString().padStart(2, '0'),
            mins.toString().padStart(2, '0'),
            secs.toString().padStart(2, '0')
        ].join(':');
        console.log(format);
    }


}
differenceBetweenDates();



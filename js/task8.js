function inSeconds() {
    const hms = prompt('Введите время в формате ЧЧ:ММ:СС');
    console.log(hms);
    const s = hms.split(':');

    const seconds = (+s[0] * 3600) + (+s[1] * 60) + (+s[2]);

    console.log(seconds);

}
inSeconds();
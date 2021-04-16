function setTime(h) {

    return function setMinutes(m = '00') {
        return function setSeconds(s = '00') {
            return `${h}:${m}:${s}`;
        }
    }
}


let time = setTime(18)()(32);
console.log(time);
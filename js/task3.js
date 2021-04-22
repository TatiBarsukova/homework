
class NewDate {

    constructor() {
        this.ndate = new Date("2014-06-04").getTime();
    }

    addSeconds(n) {
        this.ndate += n * 1000;
    }

    addMinutes(n) {
        this.ndate += (n * 60) * 1000;
    }

    addHours(n) {
        this.ndate += ((n * 60) * 60) * 1000;
    }

    getDate() {
        return new Date(this.ndate).toString();
    }
}


const time = new NewDate();
console.log(time.getDate());
time.addSeconds(80);
console.log(time.getDate());
time.addMinutes(84);
console.log(time.getDate());
time.addHours(13);
console.log(time.getDate());


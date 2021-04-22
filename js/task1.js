const car = {
    manufacturer: "BMW ",
    model: "X5 ",
    yearOfIssue: "2018 ",
    averageSpeed: "120 ",

    infoCar: function () {
        console.log("Производитель атомобиля ", this.manufacturer + ",", "модель ", this.model + ",", "год выпука ", this.yearOfIssue + ",", "средняя скорость в км.ч", this.averageSpeed)
    },

    timeToCoverTheDistance: (distance, speed) => {

        let time = distance / speed;

        let hrs = Math.floor(time);
        let mins = Math.ceil((time - hrs) * 60);

        let format = [
            hrs.toString().padStart(2, '0'),
            mins.toString().padStart(2, '0'),
        ].join(':');
        console.log(format);

    }

}
car.infoCar();
car.timeToCoverTheDistance(550, 120);
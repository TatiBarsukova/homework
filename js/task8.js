function circleInASquare() {

    const circumference = prompt('Укажите длинну окружности: ');
    const perimeterSquare = prompt('Укажите периметр квадрата: ');
    const circleRadius1 = (perimeterSquare / 8);
    const Pi = 3.14
    const circleRadius2 = (circumference / (2 * Pi));

    if (circleRadius1 >= circleRadius2) {
        console.log('Круг вписывается в квадрат')
    }
    if (circleRadius1 <= circleRadius2) {
        console.log('Круг не вписывается в квадрат')
    }

}
circleInASquare()


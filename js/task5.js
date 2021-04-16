function numericalStatistics() {
    const values = prompt('Введите 10 чисел через пробел').split(' ');
    let numberOfZero = 0;
    let numberOfOdd = 0;
    let numberOfPositive = 0;
    let numberOfNegative = 0;
    let numberOfEven = 0;

    if (values.length < 10) {
        alert('Вы ввели не 10 чисел');
        return
    }

    for (let i = 0; i < values.length; i++) {
        if (parseFloat(values[i]) === 0) {
            numberOfZero++;
            continue;
        }
        if (parseInt(values[i]) % 2 === 0) {
            numberOfOdd++;
        }
        if (Math.abs(parseInt(values[i])) % 2 > 0) {
            numberOfEven++;
        }
        if (parseInt(values[i]) > 0) {
            numberOfPositive++;
        }
        if (parseInt(values[i]) < 0) {
            numberOfNegative++;
        }
    }
    document.write(`В введенных вами числах насчитывается ${numberOfPositive} позитивных чисел, ${numberOfNegative} негативных чисел, ${numberOfZero} нулевих чисел, ${numberOfOdd} четных чисел, ${numberOfEven} нечетных чисел`);

}

numericalStatistics();

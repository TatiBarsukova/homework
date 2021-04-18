function greatestCommonFactor() {
    let NOD;
    const a = +prompt('Введите первое число: ');
    const b = +prompt('Введите второе число: ');

    if (isNaN(a) || isNaN(b)) {
        alert('Укажите число!');
        return;
    }

    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            NOD = i;
        }
    }
    console.log(`Наибольшим общим делителем для числа ${a} и числа ${b}, является ${NOD}`);

}
greatestCommonFactor();




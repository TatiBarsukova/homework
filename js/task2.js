function greatestCommonFactor() {
    let NOD;
    const a = prompt('Введите первое число: ');
    const b = prompt('Введите второе число: ');

    let res = (a.replace(/\d+/, '') || b.replace(/\d+/, ''));

    if (res.length > 0) {
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




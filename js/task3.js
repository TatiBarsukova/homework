function concatenationOfNumbers() {
    const num1 = prompt('Введите первое число: ');
    const num2 = prompt('Введите второе число: ');
    const num3 = prompt('Введите третье число: ');
    let result;

    let res = (num1.replace(/\d+/, '') || num2.replace(/\d+/, '') || num3.replace(/\d+/, ''));

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    if (num1, num2, num3) {
        result = ("" + num1 + num2 + num3);
        return console.log(result);
    }

}
concatenationOfNumbers();


function twoNumbers() {
    const num1 = prompt('Введите первое число: ');
    const num2 = prompt('Введите второе число: ');
    let result;

    let res = (num1.replace(/\d+/, '') || num2.replace(/\d+/, ''));

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    if (num1 < num2) {
        result = -1;
        console.log(`${result}`);
    }
    if (num1 > num2) {
        result = 1;
        console.log(`${result}`);
    }
    if (num1 === num2) {
        result = 0;
        console.log(`${result}`);
    }
}
twoNumbers();
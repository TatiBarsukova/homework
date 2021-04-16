function diapazon() {
    let begin = prompt('Введите начальное число диапазона: ');
    let end = prompt('Введите число конца диапазона: ');
    let sum = begin;

    let res = (begin.replace(/\d+/, '') || end.replace(/\d+/, ''));

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    for (let i = begin + 1; i <= end; i++) {
        sum += i;
    }
    console.log('Сумма чисел в заданом вами диапазоне равна:', sum)
}
diapazon();

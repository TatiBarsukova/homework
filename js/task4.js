function numberOfDigits() {
    let myNum = prompt('Введите число: ');

    let res = myNum.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    console.log(myNum);
    let num = 0;

    if (myNum >= 0) ++num;

    while (myNum / 10 >= 1) {
        myNum /= 10;
        ++num;
    }
    return num;
}

console.log('В вашем числе знаков =', + numberOfDigits());





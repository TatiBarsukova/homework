function factorial() {
    let n = prompt('Введите число: ');
    let result = 1;
    let res = n.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    while (n) {
        result *= n--;
    }
    return console.log(result);

}
factorial();


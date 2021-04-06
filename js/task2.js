function checkNumber() {
    const number = prompt("Укажите число от 0 до 9");

    if (number.length === 0 || number.length > 1 || number.length < 1) {
        alert('Укажите число от 0 до 9');
        return;
    }

    const res = number.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Используйте только цифры');
        return;
    }

    const keys = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    const digit = parseInt(number);
    const numberTitle = digit === 0 ? keys[9] : keys[digit - 1];

    alert(numberTitle);
}

checkNumber();


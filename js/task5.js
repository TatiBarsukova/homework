
function perfectNumber() {
    const num = prompt('Введите число: ');
    let count = 0;

    let res = num.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }


    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            count += i;
        }
    }

    if (count === num && count !== 0) {
        console.log("Это совершенное число!");
    }
    else {
        console.log("Это не совершенное число!");
    }
}
perfectNumber();
function divisors() {
    const num = prompt('Введите число: ');

    let res = num.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Укажите пожалуйста число!')
        return;
    }

    for (i = 1; i <= num; i++)
        if (num % i === 0)
            console.log(i);
}

console.log("Все делители заданого вами числа:");
divisors();





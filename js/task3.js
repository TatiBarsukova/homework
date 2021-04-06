
const number = prompt('Введите трехзначное число: ');
if (number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
    alert('Найдено совпадение цифр');
} else {
    alert('Совпадений не найдено');
}



function shiftedNumber() {

    const myNum = prompt('Введите число');
    const shifted = prompt('На сколько цифр его сдвинуть?');
    arr = myNum.split('');

    let res = (myNum.replace(/\d+/, '') || shifted.replace(/\d+/, ''));

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }

    for (let i = 0; i < shifted; i++) {
        arr.push(arr.shift())
    }
    alert(arr.join``);
}
shiftedNumber();
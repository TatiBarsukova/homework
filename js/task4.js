function figureArea() {
    const a = prompt('Введите длинну  ширину прямоугольника: ');
    const b = prompt('Введите ширину прямоугольника: ');
    const s1 = a * b;
    const s2 = a * a;
    const s3 = b * b;

    let res = (a.replace(/\d+/, '') || b.replace(/\d+/, ''));

    if (res.length > 0) {
        alert('Укажите число!');
        return;
    }


    if (a != '' && b != '') {
        return console.log(s1);
    }
    else if (a != '' && b === '') {
        return console.log(s2);
    }
    else if (a === '' && b != '') {
        return console.log(s3);
    }

}
figureArea();
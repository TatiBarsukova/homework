function gameNamber() {
    let myNum;
    let start = 0;
    let finish = 100;
    let gameEnd = false;

    while (!gameEnd) {
        myNum = start + Math.floor((finish - start) / 2);
        if (confirm(`Ваше число > ${myNum}?`)) {
            if (myNum < 100) {
                start = myNum + 1;
            }
        } else if (confirm(`Ваше число < ${myNum}?`)) {
            if (myNum > 0) {
                finish = myNum;
            }
        } else if (confirm(`Ваше число == ${myNum}?`)) {
            gameEnd = true;
            alert(`Вы загадали  ${myNum}`)
        }
        if (finish == start) {
            gameEnd = true;
            myNum = finish;
            (confirm(`Ваше число === ${myNum}!`))
        }
    }


    alert(`Вы загадали  ${myNum}`);
    return;
}
gameNamber();
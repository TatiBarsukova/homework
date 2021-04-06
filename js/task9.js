function poll() {

    alert("Ответьте пожалуйста на три вопроса: ");
    let score = 0;

    while (1) {
        let q1 = +prompt("2+2 = (4|5|8)");
        if (q1 === 4 || q1 === 5 || q1 === 8) {
            q1 === 4 ? score += 2 : alert("Неверный ответ!");
            break;
        }
    };

    while (1) {
        let q2 = +prompt("2*2 = (0|4|15)");
        if (q2 === 0 || q2 === 4 || q2 === 15) {
            q2 == 4 ? score += 2 : alert("Неверный ответ!");
            break;
        }
    };

    while (1) {
        let q3 = +prompt("6-6 = (3|6|0)");
        if (q3 === 3 || q3 === 6 || q3 === 0) {
            q3 === 0 ? score += 2 : alert("Неверный ответ!");
            break;
        }
    };
    alert("Вы набрали: " + score + " бала");
}
poll()
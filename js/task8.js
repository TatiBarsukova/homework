function dayOfWeek() {
    const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    let myDays = prompt('Введите день недели с маленькой буквы');
    let currDay = days.indexOf(myDays);
    if (currDay === -1) {
        alert('Вы ввели неверное значение дня недели')
        return;
    }
    currDay++;
    while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
        currDay = (currDay + 1) % days.length;
    }
}
dayOfWeek();



function checkAge() {
    const age = prompt('Сколько тебе лет?');

    let res = age.replace(/\d+/, '');

    if (res.length > 0) {
        alert('Укажите ваш возраст');
        return;
    }

    let ageTitle = ' неопределенного возраста';

    if (age >= 0 && age <= 2) {
        ageTitle = 'ребенок';
    }

    if (age >= 12 && age <= 18) {
        ageTitle = 'подросток';
    }

    if (age >= 18 && age <= 60) {
        ageTitle = 'взрослый';
    }

    if (age >= 60 && age <= 100) {
        ageTitle = 'пенсионер';
    }

    alert('Вы ' + ageTitle);
}

checkAge();
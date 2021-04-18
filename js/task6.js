function calcul() {
    do {
        const myNum1 = +prompt('Введите первое число');
        const operator = prompt('Выберите знак + - * /');
        const myNum2 = +prompt('Введите второе число');

        if (isNaN(myNum1) || isNaN(myNum2)) {
            alert('Пожалуйста, введите число');
            return;
        }

        switch (operator) {
            case '+':
                alert(myNum1 + myNum2);
                break;
            case '-':
                alert(myNum1 - myNum2);
                break;
            case '/':
                alert(myNum1 / myNum2);
                break;
            case '*':
                alert(myNum1 * myNum2);
                break;

            default:
                alert('Unknown operator');
                return;
        }

    } while (confirm('Хотите ли вы решить еще один пример?'));
}
calcul();
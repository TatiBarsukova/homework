function calcul() {
    do {
        const myNum1 = +prompt('Введите первое число');
        const operator = prompt('Выберите знак + - * /');
        const myNum2 = +prompt('Введите второе число');
        const validOperators = ['+', '-', '*', '/'];

        if (isNaN(parseFloat(myNum1)) || isNaN(parseFloat(myNum2)) || !validOperators.includes(operator)) {
            alert('Пожалуйста, введите число');
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
        }

    } while (confirm('Хотите ли вы решить еще один пример?'));
}
calcul();
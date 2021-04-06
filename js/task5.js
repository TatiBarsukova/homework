

let userNumber;
let counter = 0;

function palindrome(userNumber) {
    let re = /[^A-Za-z0-9]/g;

    userNumber = userNumber.toLowerCase().replace(re, "");
    let len = userNumber.length;

    for (let i = 0; i < len / 2; i++) {
        if (userNumber[i] !== userNumber[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

userNumber = prompt("Введите пятиразрядное число:  ");
let isPalindrome = palindrome(userNumber);

while (counter < 10) {
    if (userNumber.length == 5) {
        if (isPalindrome) {
            console.log("Это число палиндром!");
        } else {
            console.log("Это число не палиндром!");

            userNumber = window.prompt(
                "Введите пятиразрядное число: "
            );
            isPalindrome = palindrome(userNumber);
        }
        counter++;
    } else if (userNumber.length != 5) {
        alert("Вы ввели не пятиразрядное число. Попробуйте заново.");

        let userNumber = prompt("Введите пятиразрядное число:  ");
        isPalindrome = palindrome(userNumber);
    }
}
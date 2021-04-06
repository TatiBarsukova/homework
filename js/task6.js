let course = [0.85, 27.81, 1.70];

let EUR = course[0];
let UAN = course[1];
let AZN = course[2];

let result = 0;

function convert(amount, convertFrom, convertTo) {
    if (convertFrom == 'USD' && convertTo == 'EUR') {
        result = amount * EUR;
    } else if (convertFrom == 'USD' && convertTo == 'UAN') {
        result = amount * UAN;
    } else if (convertFrom == 'USD' && convertTo == 'AZN') {
        result = amount * AZN;
    }

}
convert()

console.log('Выполните действие: колличество usd * на выбранную вами валюту (EUR, UAN, AZN)');



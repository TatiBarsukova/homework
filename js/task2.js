
let productList = [
    {
        productName: "Огурцы",
        quantity: 0.4,
        price: 52.00,
        bought: true,
    },
    {
        productName: "Сметана",
        quantity: 1,
        price: 33.00,
        bought: true,
    },
    {
        productName: "Зеленый лук",
        quantity: 0.1,
        price: 150.00,
        bought: true,
    },
    {
        productName: "Яйца",
        quantity: 10,
        price: 3.00,
        bought: true,
    },
    {
        productName: "Куриная грудка",
        quantity: 0.45,
        price: 104.00,
        bought: true,
    },
    {
        productName: "Картошка",
        quantity: 1.3,
        price: 12.50,
        bought: true,
    }
];

//Распечатка чека на экран;
function printCheck() {
    for (let i = 0; i < productList.length; i++)
        console.log(`Название продукта: ${productList[i].productName}, К-во: ${productList[i].quantity}
                    Цена: ${Math.abs(productList[i].price).toFixed(2)}, Сумма ${Math.abs(productList[i].quantity * productList[i].price).toFixed(2)} `);
};
printCheck();

console.log('-------');

//Подсчет общей суммы покупки;
function sumCheck() {
    let sum = 0;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].bought === true) {
            console.log(`Название продукта: ${productList[i].productName}, К-во: ${productList[i].quantity}
            Цена: ${Math.abs(productList[i].price).toFixed(2)}, Сумма ${Math.abs(productList[i].quantity * productList[i].price).toFixed(2)} `);
            sum += productList[i].quantity * productList[i].price;
        }
    }
    console.log('Общая сумма по чеку: ' + sum + 'грн.');
}
sumCheck();

console.log('-------');

//Получение самой дорогой покупки в чеке;
function maxSumInCheck() {
    let max = -Infinity;
    for (let i = 0; i < productList.length; i++) {
        const sum = productList[i].quantity * productList[i].price;
        if (sum > max) {
            max = Math.abs(sum).toFixed(2);
        }
    }

    return console.log("Самая дорогая покупка в чеке: " + max + "грн.");
}
maxSumInCheck();

console.log('-------');

//Подсчет средней стоимости одного товара в чеке.
function averageCostProduct() {
    for (let i = 0, sum = 0; i < productList.length; i++) {
        sum += productList[i].quantity * productList[i].price;
        result = Math.abs(sum / productList.length).toFixed(2);
    }
    return console.log("Средняя стоимость одного товара в чеке: " + result + "грн.");
}
averageCostProduct();







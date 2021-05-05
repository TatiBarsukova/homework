let shoppingList = [
    {
        productName: "Огурцы",
        quantity: 2,
        bought: false,
    },
    {
        productName: "Сметана",
        quantity: 1,
        bought: true,
    },
    {
        productName: "Зеленый лук",
        quantity: 1,
        bought: true,
    },
    {
        productName: "Яйца",
        quantity: 10,
        bought: false,
    },
    {
        productName: "Куриная грудка",
        quantity: 1,
        bought: true,
    },
    {
        productName: "Картошка",
        quantity: 10,
        bought: false,
    }
];

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function sortShoppingList() {
    return [...shoppingList.sort((a, b) => {
        return (a.bought - b.bought)
    }).map(product => { return { ...product } })
    ];
}
const sortedShoppingList = sortShoppingList(shoppingList);
console.log(sortedShoppingList);

//Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
const newShoppingList = [
    {
        productName: "Шоколад",
        quantity: 1,
        bought: true,
    },
    {
        productName: "Сметана",
        quantity: 1,
        bought: true,
    },
    {
        productName: "Куриная грудка",
        quantity: 3,
        bought: true,
    }
];

for (let i = 0; i < newShoppingList.length; i++) {
    let j = 0;
    for (; j < shoppingList.length; j++) {
        if (shoppingList[j].productName === newShoppingList[i].productName) {
            shoppingList[j].quantity += newShoppingList[i].quantity;
            break;
        }
    }
    if (j === shoppingList.length) {
        shoppingList.push(newShoppingList[i]);
    }
}

console.log(shoppingList);

//Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function updateProductInList(productList, boghtName) {
    for (let i = 0; i < productList.length; i++) {
        if (boghtName === productList[i].productName) {
            productList[i].bought = true;
            return;
        }
    }
}
updateProductInList(shoppingList, "Яйца");

const sortedUpdatedShoppingList = sortShoppingList(shoppingList);
console.log(sortedUpdatedShoppingList);
















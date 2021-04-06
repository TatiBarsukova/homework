function discountPrice() {

    let price = parseInt(prompt("Введите сумму покупки:"));
    let discount1 = 3;
    let discount2 = 5;
    let discount3 = 7;

    if (price <= 100) {
        console.log(price);
    }

    if (price >= 200 && price <= 299) {
        let afterDiscount = price - (price * discount1 / 100);

        console.log(afterDiscount)
    }
    if (price >= 300 && price <= 499) {
        let afterDiscount = price - (price * discount2 / 100);

        console.log(afterDiscount)
    }
    if (price >= 500 && price <= 100000000) {
        let afterDiscount = price - (price * discount3 / 100);

        console.log(afterDiscount)
    }
}
discountPrice();

function random(max) {
    let res = [];
    for (let i = 3; i <= max; i++) {
        let count = 1;
        for (let j = 2, num = parseInt(i / 2); j <= num; j++) {
            if (!(i % j))
                count += j;
        }
        if (i == count)
            res.push(i);
    }
    return console.log(res);
}
random(1000);




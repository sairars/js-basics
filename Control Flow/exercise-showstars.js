showStars(10);

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i; j++)
            str += '*';
        console.log(str);
    }
}
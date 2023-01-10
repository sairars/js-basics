const array = [2, NaN, '', false,  null, undefined];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let item of array) {
        if (item)
            count++;
    }

    return count;
}
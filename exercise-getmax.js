const numbers = [1, 2, 3, 4, -1, 599, 2, 100, 300];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    return array.reduce((a, b) => (a < b)? b : a, array[0]);
}
const numbers = [1, 2, 3, 4, 5, 1, -2];
const output = except(numbers, [1, 2]);
console.log(output);

function except(array, excluded) {
    const output = array.filter(n => (!excluded.includes(n)));
    return output;
}
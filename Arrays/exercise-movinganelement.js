const numbers = [99, 2, 3, 4, 5];

const output = move(numbers, 2, -2);
console.log(output);

function move(array, index, offset) {
    const output = [...array];
    const position = index + offset;
    if (output.length == 0 ||
        index < 0 || 
        index >= output.length || 
        position < 0 || 
        position >= output.length) {
        console.error('Invalid arguments');
        return;
    }

    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}
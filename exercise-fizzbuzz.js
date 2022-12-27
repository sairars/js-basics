console.log(fizzbuzz(false));
function fizzbuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    
    if (input % 3 === 0) 
        return (input % 5 === 0)? 'fizzbuzz' : 'fizz';

    return (input % 5 === 0)? 'buzz' : input;
}
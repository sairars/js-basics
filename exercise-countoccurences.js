const numbers = [1, 2, 3, 4, 1, 1, 1, 2];
const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
   return array.reduce((accumulator, currentValue) =>  
            (accumulator += (currentValue === searchElement)? 1 : 0), 
            0);
}
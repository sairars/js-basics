// Adding Elements To Array
const numbers = [3,4];

// add to end of array
numbers.push(5,6);
console.log(numbers);

// add to beginning of array
numbers.unshift(1, 2);
console.log(numbers);

// add to some place in the middle of array
numbers.splice(3, 0, 'a', 'b');
console.log(numbers);

// Finding Elements In Array (Primitives)
const numbers2 = [1, 2, 3, 1, 2, 3];
console.log(numbers2.indexOf(1, 2)); // should return the index of the second 1 
                                    // in the array
console.log(numbers2.indexOf('1')); // returns -1
console.log(numbers2.includes(1)); // should return true 
console.log(numbers2.lastIndexOf(1)); // should return 3 as index of second 1

// Finding Elements In Array (Objects)
const courses = [ { id: 1, name: 'a'}, 
                  { id: 2, name: 'b'}];
console.log(courses.find(function(course) {
    return course.name === 'a';
})); // returns the course if found, if not found returns undefined

console.log('Index is: ', courses.findIndex(function(course) {
    return course.name === 'a';
})); // returns the course index if found, if not found returns -1

// Arrow functions (anonymous functions)

// returns the course if found, if not found returns undefined
console.log(courses.find(course => course.name === 'a')); 

// returns the course index if found, if not found returns -1
console.log('Index is: ', courses.findIndex(course => course.name === 'a')); 

// Remove elements from array

// Middle of the array
numbers.splice(3, 2) // removes 'a' and 'b from index =  3
console.log(numbers);

// End of the array
numbers.pop();
console.log(numbers);

//Beginning of the array
numbers.shift();
console.log(numbers);

// Emptying An Array
numbers.length = 0; // truncates all elements in the array

// Combining & Slicing Array
let first = [1,2, 3];
let second = [4, 5];

let combined = first.concat(second);
console.log(combined);

let slice = combined.slice(2, 4);
console.log(slice);

// Spread Operator
combined = [...first, ...second];
console.log('Combined: ', combined);

let copy = [...combined];
console.log('Copy:', copy);

// Iterating An Array using For-Each
combined.forEach(number => console.log(number));
copy.forEach((number, index) => console.log(index, number));

// Joining and splitting array
console.log(combined.join(','));

const message = 'this is a sentence';
const parts = message.split(' ');

console.log(parts.join('-'));

// Sort Array , Reverse Array
numbers.push(1, 9, 3, 5, 2);
console.log(numbers.sort());
console.log(numbers.reverse());

// Sorting Arrays of objects
courses.length = 0;
courses.push(
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javascript'}
)

courses.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);

// Testing elements of array using every() and some()
numbers.push(1, 2, -1, 3, 4, 5, 7);
const allPositive = numbers.every(n =>  n >= 0);
console.log(allPositive);

const atLeastOnePositive = numbers.some(n => n >= 0);
console.log(atLeastOnePositive);

// Filtering an Array
numbers.length = 0;
numbers.push(1, 2, -1, -3, 4);

const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

// Mapping items of Array and method chaining
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value < 4)
    .map(obj => obj.value);

console.log(items);

// Reduce items in Array using accumulator
const sum = numbers.reduce((sum, current) => sum + current);
console.log(sum);

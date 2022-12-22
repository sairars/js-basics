// variables in js
let firstName = 'Saira';
let lastName = 'Rashid';

console.log(firstName + ' ' + lastName);

// constants in js
const interestRate = 0.3;
console.log(interestRate);

// primitive/value types
let name = 'Saira'; // String Literal type
let age = 39; // Number type
let isShipped = true; // Boolean type
let country; // Undefined type
let selectedColour = null; // null type

// object/reference types
// object type
let person = {
    name: 'Saira',
    age: 39
};

// dot notation
person.name = 'Jane';
console.log(person.name);

// bracket notation
let selection = 'name';
person[selection] = 'jill';
console.log(person[selection]);

// array type
let emptyArray = []; // empty array literal
let items = ['red', 'blue'];
items[2] = 1;
console.log(items);
console.log(items.length);
console.log(items[0]);


// Functions

// Function that performs a task
function greet(firstName) {
    console.log(firstName);
}

greet('john');

// Function that calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));


 


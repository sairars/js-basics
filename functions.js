// function declaration
function walk() {
    console.log('walk');
}

// anonymous function expression
let run = function() {
    console.log('run');
}

// named function expression
let a = function jog() {
    console.log('jog');
}

x(); // this is okay and will call x function (possible due to JS Engine Hoisting)

function x() {
    console.log('x'); 
}

// y(); // this will give error, call to function should be made 
        // after function expression
let y = function() {
    console.log('y');
}

let z = y;

z(); // this will also print 'y' on console.

// arguments object 
function sum() {
    let total = 0;
    for (let argument of arguments)
        total += argument;

    return total;
}

const result = sum(1, 2, 3, 4, 15);
console.log(result);

// rest operator ...

function sumWithRest(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumWithRest(1, 2, 3, 4, 5, 15));

function cost(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log('Cost after applying discount: ', cost(0.1, 20, 30));

// default parameters

// old technique for specifying default parameters
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest(10000));

// old technique for specifying default parameters
function interest2(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interest2(10000));

// Getters and Setters
const person = {
    firstName: 'Saira',
    lastName: 'Rashid',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

console.log(person.fullName);

person.fullName = 'Jane Doe';
console.log(person);

// Basic Error Handling - try/catch blocks
const employee = {
    first: 'Saira',
    last: 'Rashid',
    get fullName() {
        return `${this.first} ${this.last}`;
    },
    set fullName(value) {
        if (typeof(value) !== 'string')
            throw new Error('Enter a valid name.');
        
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first name and a last name.');
        this.first = parts[0];
        this.last = parts[1]; 
    }
}

console.log(employee.fullName);

try {
    employee.fullName = true;
} 
catch (e) {
    alert(e);
}

try {
    employee.fullName = '';
} 
catch (e) {
    alert(e);
}
console.log(employee);

// var keyword (should be avoided)
function testVarKeyword() {
    for (var i = 0; i < 5; i++)
        console.log(i);

    console.log('last value of i: ', i); // i is still accessible here, as var is function scope
}

testVarKeyword();

// This keyword
const video = {
    title: 'video1',
    play() {
        console.log(this.title); // here this refers to video object
    }
}

video.play();

function stop() {
    console.log(this); // here this refers to global object which is window
}

stop();

class Video {
    constructor(title) {
        this.title = title; 
        console.log(this); // Here this refers to an empty object
    } 
}
let v = new Video('video2');

const videoTags = {
    title: 'video3',
    tags: ['action', 'horror'],
    showTags() {
        // Here this refers to object where arrow function is
        // defined(videoTags object)
        this.tags.forEach(tag => console.log(this.title, '-', tag)); 
    }
}

videoTags.showTags();




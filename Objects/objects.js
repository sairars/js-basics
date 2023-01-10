// Basic object using object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 100,
        y: 300
    },
    isVisible: true,
    draw: function() {
        console.log('Draw a circle');
    }
}

// Functions inside an object are known as methods of that object
circle.draw();

// Factory functions to create more than one variable of object type Circle

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw a circle');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2); 

//Class Declaration (another way to instantiate objects with different values)
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw a circle');
        };
    }
}

const circle3 = new Circle(2);
console.log(circle3);

//Dynamic nature of objects in JS (properties can be added or removed at run-time)
const square = {
    length: 4
}

square.colour = 'pink';
square.render = function() {
    console.log('Render square');
}

console.log(square);

delete square.colour;
delete square.render;

console.log(square);

// NOTE: we can change properties of circle object but we cannot reassign it as it
// is created as a const variable

 // square = {} // Throws an exception

// All objects in javascript have a property called constructor that 
// references the function which creates that object
class Square {
    constructor(length) {
        this.length = length;
    }
}

const square1 = new Square(1);

function createSquare(length) {
    return {
        length
    }
}

const anotherSquare = createSquare(1);

// Functions are objects in JS

// Different ways of iterating over object properties
const x = {
    radius: 1,
    draw: function() {}
}

for (let key in x) {
    console.log(key, x[key]);
}

for (let entry of Object.entries(x)) {
    console.log(entry);
}

if ('radius' in x )
    console.log('it exists');

// Cloning an object
// using Object.assign
let another = Object.assign({ color: 'yellow'}, circle);
// using spread ... operator
let y = {color: 'yellow', ... x};

// Template literals
const name = 'Jane';
const sender = 'Saira';
const message = `Hi ${name},

Thank you for joining my mailing list.

Regards, 
${sender}`;
console.log(message);

















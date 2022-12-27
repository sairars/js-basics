// if .. else
let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon');
else 
    console.log('Good evening');

// switch statement
let role;

switch(role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}

// for loops
for (let i = 0; i < 5; i++) 
    console.log('Hello World');

// while loops
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0)
        console.log(i);
    i++;    
}

// do-while loops
let j = 0;
do {
    if (j % 2 !== 0)
        console.log(j);
    j++;
} while (j <= 5);

// for-in loop
const person = {
    name: 'Saira',
    age: 25
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// for-off loop
const colours = ['red', 'green', 'blue'];

for (let colour of colours) {
    console.log(colour);
}


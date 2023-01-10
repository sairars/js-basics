// arithmetic operators
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment
console.log(x++);
console.log(++y);

// Decrement
console.log(x--);
console.log(--y);

// Assignment operators
x += 5;
console.log(x);

// Relational comparison operators
console.log(x > 1);
console.log(x <= 1);

// Equality operators

// Strict equality operator (checks equality of type and value)
console.log(1 === 1); //evaluates to true
console.log('1' === 1); //evaluates to false
console.log(true === 1); //evaluates to false

console.log(x !== 10); //inequality operator

// Loose equality operator (checks equality of only values)
// All the below statements evaluate to true
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary operator
let points = 110;
let customerType = (points >= 100)? 'gold' : 'silver';
console.log(customerType);

// Logical operators

// AND 
let A = true;
let B = true;
console.log(A && B); 

// OR 
console.log(A || B);

// NOT
console.log(! (A && B));

// Logical operators with non-boolean values

// Falsy values in Javascript (resolve to false):
// Undefined
// null
// 0
// ''
// false
// NaN

// Truthy values are anything that is not falsy.
// Logical operators with non-boolean values are used when we need to apply default
// values in certain situations.
let userColour = 'red';
let defaultColour = 'blue';
let displayColour = userColour || defaultColour; // resolves to red
console.log(displayColour); 

userColour = undefined;
displayColour = userColour || defaultColour; // resolves to blue as userColour is falsy
console.log(displayColour);

// Short-circuiting example
let result = false || 1 || 2;
// result resolves to 1. As soon as the OR operator finds a truthy value, it 
// ignores everything after that on the right. 

// Bit-wise operators ( to perform operations on individual bits)

// Read-permissions = 00000100
// Write-permissions = 00000010
// Execute-permissions = 00000001

let userPermission = 0;
let readPermission = 4;
let writePermission = 2;
let executePermission = 1;

// Bitwise Or is used to add permissions
userPermission = userPermission | readPermission | writePermission;
console.log(userPermission) // resolves to 6 or 00000110

// Bitwise And is used to check permissions
let bitwiseResult = (userPermission & readPermission) ? 'Has Read Permission' : 'Does not have Read Permission';
console.log(bitwiseResult);



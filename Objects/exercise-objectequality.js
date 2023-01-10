class Address {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

address1.country = 'd';
address2.state = 'd';


function areEqual(address1, address2) {
    if (typeof address1 !== typeof address2)
        return false;
    
    if (Object.keys(address1).length !== Object.keys(address2).length)
        return false;

    for (let key in address1) {
        if (!(key in address2))
            return false;
        if (address1[key] !== address2[key])
            return false;
    }

    return true;
    
}

function areSame(address1, address2) {
    return (address1 === address2);
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
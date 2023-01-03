function createAddress(street, city, state, zipCode) {
    return {
        street,
        city,
        state,
        zipCode
    };
}

const factoryAddress = createAddress('123 king st', 
                                     'mississauga', 
                                     'ontario', 
                                     'L5V-3A8');


class Address {
    constructor(street, city, state, zipCode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipCode;
    }
}

const constructorAddress = new Address('123 king st w', 
                                       'oakville', 
                                       'ontario', 
                                       'L7L-4Y9');

function showAddress(address) {
    for (let key in address) 
        console.log(`${key}: ${address[key]}`);
}

showAddress(factoryAddress);
showAddress(constructorAddress);
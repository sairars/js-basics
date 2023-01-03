const address = {
    street: '123 king st',
    city: 'mississauga',
    state: 'ontario',
    zipcode: 'L5V-3A8'
};

function showAddress(address) {
    for (let key in address) 
        console.log(`${key}:  ${address[key]}`);
} 

showAddress(address);
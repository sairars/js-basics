console.log(sumOfMultiplesOf3And5(15));

function sumOfMultiplesOf3And5(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    }

    return sum;
}
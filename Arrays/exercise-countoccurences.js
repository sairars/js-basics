const numbers = [1, 2, 3, 4, 1, 1, 1, 2];
try {
   const count = countOccurrences(numbers, 1);
   console.log(count);   
} catch (error) {
   alert(error);
}

function countOccurrences(array, searchElement) {
   if (!Array.isArray(array))
      throw new Error('Invalid arguments');
   return array.reduce((accumulator, currentValue) =>  
            (accumulator += (currentValue === searchElement)? 1 : 0), 
            0);
}
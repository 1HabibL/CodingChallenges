//Complete the code for the squareList function 
//using any combination of map(), filter(), and reduce(). 
//The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) 
//when an array of real numbers is passed to it. 
//An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].


const squareList = arr => {
    // Only change code below this line
let filteredIntegers = arr.filter(newIntegers => Number.isInteger(newIntegers))
console.log(filteredIntegers)
let postiveIntegers = filteredIntegers.filter(postivenumbers => postivenumbers > 0)
console.log(postiveIntegers)

let squaredIntegers = postiveIntegers.map(finalVariable => finalVariable * finalVariable )
console.log(squaredIntegers)
return squaredIntegers

    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);